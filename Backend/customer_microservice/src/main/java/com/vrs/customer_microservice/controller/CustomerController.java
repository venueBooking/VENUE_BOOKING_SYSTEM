package com.vrs.customer_microservice.controller;

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

import com.vrs.customer_microservice.controller.CustomerController;
import com.vrs.customer_microservice.model.AuthenticationRequest;
import com.vrs.customer_microservice.model.Customer;
import com.vrs.customer_microservice.service.CustomerService;
import com.vrs.customer_microservice.service.JwtUtilService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUtilService jwtUtilService;

	@GetMapping("/getAllCustomers")
	public List<Customer> getCustomers() {
		log.info("\nReceived Request #1!\n");
		return customerService.getCustomers();
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
			final Customer customer = customerService.getCustomerByUsername(request.getUsername());
			log.info("Found User :: {}", customer);

			final String jwt = jwtUtilService.generateToken(customer); // returning the token as response

			// test
			log.info("Authenticated User :: {}", customer);

			response = new ResponseEntity<String>(jwt, HttpStatus.OK);

			log.info("Successfully Authenticated user!");

		} catch (Exception e) {
			log.error("{} !! info about request-body : {}", e.getMessage(), request);
			response = new ResponseEntity<String>("Not Authorized Customer", HttpStatus.NOT_FOUND);
		}
		log.info("-------- Exiting /authenticate");
		return response;
	}
	
	@GetMapping("/getCustomer")
//	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<?> getCustomerByJwt(@RequestHeader String Authorization) {
		
		String jwt = Authorization.substring(7);
		log.info("get customer jwt {}",jwt);
		log.info("get customer jwt username {}",jwtUtilService.extractUsername(jwt));
		return ResponseEntity.ok(customerService.getCustomerByUsername(jwtUtilService.extractUsername(jwt)));
	}

	@PostMapping("/updateCustomer")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.updateCustomer(customer));
	}

	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		
		if (customerService.getCustomerByUsername(customer.getUsername()) == null) {
			customer.setBalance(100);
			return ResponseEntity.ok(customerService.addCustomer(customer));
		}
		else
			return new ResponseEntity<>("Cannot add existing user",HttpStatus.BAD_REQUEST);
		
	}
	
	@PostMapping("/addAllCustomer")
	public ResponseEntity<?> addAllCustomer(@RequestBody List<Customer> customer) {
		
		customer.forEach(item -> {
				item.setBalance(1000);
				customerService.addCustomer(item);
		});

		return ResponseEntity.ok(customer);
	}

	@DeleteMapping("/deleteCustomer/{username}")
	public ResponseEntity<String> deletePost(@RequestHeader String Authorization, @PathVariable String username) {


		log.info("Authorization {}",Authorization);
		String jwt = Authorization.substring(7);
		
		log.info("jwt {}",jwt);
		

		log.info("jwt username {}",jwtUtilService.extractUsername(jwt));
		
		Customer customer = customerService.getCustomerByUsername(username);

		if (customer == null) {
			return new ResponseEntity<>(username + " not found", HttpStatus.NOT_FOUND);
		}
		else if (!jwtUtilService.extractUsername(jwt).equals(username)){
			return new ResponseEntity<>(jwtUtilService.extractUsername(jwt) + " cannot delete " + username, HttpStatus.FORBIDDEN);
		}
		
		customerService.deleteCustomer(customer.getCustomerId());
		return new ResponseEntity<>(String.format("%s %s IS DELETED!", customer.getFirstName().toUpperCase(),
				customer.getLastName().toUpperCase()), HttpStatus.OK);
	}

}
