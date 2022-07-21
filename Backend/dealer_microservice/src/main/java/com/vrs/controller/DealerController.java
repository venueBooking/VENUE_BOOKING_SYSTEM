package com.vrs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.vrs.model.Dealer;
import com.vrs.model.AuthenticationRequest;
import com.vrs.service.DealerService;
import com.vrs.service.JwtUtilService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class DealerController {

	@Autowired
	DealerService dealerService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUtilService jwtUtilService;

	@GetMapping("/getAllDealers")
	public List<Dealer> getDealers() {
		log.info("\nReceived Request #1!\n");
		return dealerService.getDealers();
	}


	@PostMapping("/authenticate")
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
			response = new ResponseEntity<String>("Not Authorized Dealer", HttpStatus.FORBIDDEN);
		}
		log.info("-------- Exiting /authenticate");
		return response;
	}

	@PostMapping("/updateDealer")
	public ResponseEntity<?> updateDealer(@RequestBody Dealer dealer) {
		return ResponseEntity.ok(dealerService.updateDealer(dealer));
	}

	@PostMapping("/addDealer")
	public Dealer addDealer(@RequestBody Dealer deal) {
		return dealerService.addDealer(deal);
	}

	@DeleteMapping("/deleteDealer/{username}")
	public ResponseEntity<String> deletePost(@PathVariable String username) {

		Dealer dealer = dealerService.getDealerByUsername(username);

		if (dealer == null) {
			return new ResponseEntity<>(username + " not found", HttpStatus.NOT_FOUND);
		}

		dealerService.deleteDealer(dealer.getDealerId());
		return new ResponseEntity<>(String.format("%s %s IS DELETED!", dealer.getFirstName().toUpperCase(),
				dealer.getLastName().toUpperCase()), HttpStatus.OK);
	}

}
