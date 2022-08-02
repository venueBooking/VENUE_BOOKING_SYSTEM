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

import com.vrs.customer_microservice.model.AuthenticationRequest;
import com.vrs.customer_microservice.model.Customer;
import com.vrs.customer_microservice.service.CustomerService;
import com.vrs.customer_microservice.service.JwtUtilService;

@CrossOrigin("http://localhost:3000")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUtilService jwtUtilService;

	@GetMapping("/getAllCustomers")
	public List<Customer> getDealers() {
		return customerService.getCustomers();
	}

	@PostMapping("/authenticate")
	public ResponseEntity<String> generateJwt(@Valid @RequestBody AuthenticationRequest request) {
		ResponseEntity<String> response = null;

		try {

			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
			final Customer dealer = customerService.getCustomerByUsername(request.getUsername());
			final String jwt = jwtUtilService.generateToken(dealer); // returning the token as response
			response = new ResponseEntity<String>(jwt, HttpStatus.OK);

		} catch (Exception e) {

			response = new ResponseEntity<String>("Not Authorized Dealer", HttpStatus.FORBIDDEN);
		}
		return response;
	}

	@PostMapping("/updateCustomer")
	public ResponseEntity<?> updateDealer(@RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.updateCustomer(customer));
	}

	@PostMapping("/addCustomer")
	public Customer addDealer(@RequestBody Customer c) {
		return customerService.addCustomer(c);
	}

	@DeleteMapping("/deleteCustomer/{username}")
	public ResponseEntity<String> deletePost(@PathVariable String username) {

		Customer customer = customerService.getCustomerByUsername(username);

		if (customer == null) {
			return new ResponseEntity<>(username + " not found", HttpStatus.NOT_FOUND);
		}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
		customerService.deleteCustomer(customer.getCustomerId());
		return new ResponseEntity<>(String.format("%s %s IS DELETED!", customer.getFirstName().toUpperCase(),
				customer.getLastName().toUpperCase()), HttpStatus.OK);
	}

}
