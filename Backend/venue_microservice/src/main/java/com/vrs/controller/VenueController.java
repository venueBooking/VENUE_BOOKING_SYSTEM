package com.vrs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrs.model.Customer;
import com.vrs.model.Dealer;
import com.vrs.model.Venue;
import com.vrs.service.CustomerFeignService;
import com.vrs.service.DealerFeignService;
import com.vrs.service.VenueService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping
@Slf4j
@CrossOrigin(origins="http://localhost:3000")
public class VenueController {

	@Autowired
	VenueService venueService;

	@Autowired
	DealerFeignService dealerFeignService;
	
	@Autowired
	CustomerFeignService customerFeignService;

	@GetMapping
	public String testHello() {
		return "Meaningful";
	}

	@GetMapping("/getAllVenues/{dealerId}")
	public ResponseEntity<?> getVenues(@RequestHeader String jwt, @PathVariable int dealerId) {
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			log.info("\nReceived Request #1!\n");
			return new ResponseEntity<List<Venue>>(venueService.getVenues(dealerId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@PostMapping("/updateVenue")
	public ResponseEntity<?> updateVenue(@RequestHeader String jwt,	@RequestBody Venue venue) {
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (venue.getDealerId() == dealer.getDealerId()) {
			log.info("\nReceived Request #2!\n");
			return ResponseEntity.ok(venueService.updateVenue(venue));
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@GetMapping("/getVenueByLocation/{customerId}/{venueLocation}")
	public ResponseEntity<?> getVenues(@RequestHeader String jwt, @PathVariable int customerId,
			@PathVariable String venueLocation) {
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		if (customer.getCustomerId() == customerId) {
			log.info("\nReceived Request #3!\n");
			return new ResponseEntity<List<Venue>>(venueService.getVenueByLocation(venueLocation), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}
	
	@DeleteMapping("/deleteVenueByVenueId/{dealerId}/{venueId}")
	public ResponseEntity<?> deleteVenueByVenueId(@RequestHeader String jwt, @PathVariable int dealerId,
			@PathVariable int venueId) {
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			log.info("Inside deleteBookingByBookingId");
			return new ResponseEntity<Integer>(venueService.deleteVenue(venueId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

}
