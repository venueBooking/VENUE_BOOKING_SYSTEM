package com.vrs.controller;

import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.vrs.model.Dealer;
import com.vrs.model.AuthenticationRequest;
import com.vrs.service.DealerService;
import com.vrs.service.JwtUtilService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping
public class DealerController {

	@Autowired
	DealerService dealerService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUtilService jwtUtilService;
	
	@Autowired
    private RestTemplate venueRestTemplate;
	
	@Autowired
    private RestTemplate bookingRestTemplate;

	@GetMapping("/getAllDealers")
	public List<Dealer> getDealers() {
		log.info("\nReceived Request #1!\n");
		return dealerService.getDealers();
	}


	@PostMapping("/authenticate")
//	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<String> generateJwt(@Valid @RequestBody AuthenticationRequest request) {
		ResponseEntity<String> response = null;
		

		log.info("\nReceived Request #authenticate!\n");

		// authenticating the User-Credentials
		try {
			log.info("inside try");
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
			// else when it authenticates successfully
			log.info("After authmanager.auth()");
			final Dealer dealer = dealerService.getDealerByUsername(request.getUsername());
			log.info("Found User :: {}", dealer);

			final String jwt = jwtUtilService.generateToken(dealer); // returning the token as response

			// test
			log.info("Authenticated User :: {}", dealer);

			response = new ResponseEntity<String>(jwt, HttpStatus.OK);

			log.info("Successfully Authenticated user!");

		} catch (Exception e) {
			log.error("{} !! info about request-body : {}", e.getMessage(), request);
			response = new ResponseEntity<String>("Not Authorized Dealer", HttpStatus.NOT_FOUND);
		}
		log.info("-------- Exiting /authenticate");
		return response;
	}
	
	@GetMapping("/getDealer")
//	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<?> getDealerByJwt(@RequestHeader String Authorization) {
		
		String jwt = Authorization.substring(7);
		log.info("get dealer jwt {}",jwt);
		log.info("get dealer jwt username {}",jwtUtilService.extractUsername(jwt));
		return ResponseEntity.ok(dealerService.getDealerByUsername(jwtUtilService.extractUsername(jwt)));
	}

	@PostMapping("/updateDealer")
	public ResponseEntity<?> updateDealer(@RequestBody Dealer dealer) {
		return ResponseEntity.ok(dealerService.updateDealer(dealer));
	}

	@PostMapping("/addDealer")
	public ResponseEntity<?> addDealer(@RequestBody Dealer dealer) {
		
		if (dealerService.getDealerByUsername(dealer.getUsername()) == null) {
			dealer.setBalance(100);
			return ResponseEntity.ok(dealerService.updateDealer(dealer));
		}
		else
			return new ResponseEntity<>("Cannot add existing user",HttpStatus.BAD_REQUEST);
		
	}
	
	@PostMapping("/addAllDealer")
	public ResponseEntity<?> addAllDealer(@RequestBody List<Dealer> dealer) {
		
		dealer.forEach(item -> {
				item.setBalance(1000);
				dealerService.updateDealer(item);
		});

		return ResponseEntity.ok(dealer);
	}

	@DeleteMapping("/deleteDealer/{username}")
	public ResponseEntity<String> deletePost(@RequestHeader String Authorization, @PathVariable String username) {


		log.info("Authorization {}",Authorization);
		String jwt = Authorization.substring(7);
		
		log.info("jwt {}",jwt);
		

		log.info("jwt username {}",jwtUtilService.extractUsername(jwt));
		
		Dealer dealer = dealerService.getDealerByUsername(username);

		if (dealer == null) {
			return new ResponseEntity<>(username + " not found", HttpStatus.NOT_FOUND);
		}
		else if (!jwtUtilService.extractUsername(jwt).equals(username)){
			return new ResponseEntity<>(jwtUtilService.extractUsername(jwt) + " cannot delete " + username, HttpStatus.FORBIDDEN);
		}
		
		dealerService.deleteDealer(dealer.getDealerId());
		return new ResponseEntity<>(String.format("%s %s IS DELETED!", dealer.getFirstName().toUpperCase(),
				dealer.getLastName().toUpperCase()), HttpStatus.OK);
	}
	@GetMapping("/getAllVenues") 
    public List<Object> getAllVenues() {
    	
		Object[] objects = venueRestTemplate.getForObject("http://localhost:9004/venue/venues", Object[].class);
		System.out.println("Array obj "+Arrays.asList(objects));
    	return Arrays.asList(objects);
    }
	@GetMapping("/getAllBookings") 
    public List<Object> getAllBookings() {
    	
		Object[] objects = bookingRestTemplate.getForObject("http://localhost:9004/venue/bookings", Object[].class);
		System.out.println("Array obj "+Arrays.asList(objects));
    	return Arrays.asList(objects);
    }

}
