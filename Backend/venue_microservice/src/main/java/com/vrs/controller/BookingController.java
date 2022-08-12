package com.vrs.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
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

import com.vrs.model.Booking;
import com.vrs.model.Customer;
import com.vrs.model.Dealer;
import com.vrs.service.BookingService;
import com.vrs.service.CustomerFeignService;
import com.vrs.service.DealerFeignService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping
@Slf4j
@CrossOrigin(origins="http://localhost:3000")
public class BookingController {

	@Autowired
	BookingService bookingService;

	@Autowired
	CustomerFeignService customerFeignService;

	@Autowired
	DealerFeignService dealerFeignService;

	@GetMapping("/getBookingByBookingId/{dealerId}/{bookingId}")
	public ResponseEntity<?> getBookingByBookingId(@RequestHeader String jwt, @PathVariable int dealerId,
			@PathVariable int bookingId) {
		log.info("Inside getBookingByBookingId");
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			return new ResponseEntity<Booking>(bookingService.getBookingByBookingId(bookingId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@GetMapping("/getBookingByVenueId/{dealerId}/{venueId}")
	public ResponseEntity<?> getBookingByVenueId(@RequestHeader String jwt, @PathVariable int dealerId,
			@PathVariable int venueId) {
		log.info("Inside getBookingByVenueId");
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			return new ResponseEntity<List<Booking>>(bookingService.getBookingByVenueId(venueId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@SuppressWarnings("deprecation")
	@PostMapping("/saveBooking")
	public ResponseEntity<?> saveBooking(@RequestHeader String jwt,	@RequestBody Booking booking) {
		log.info("Inside saveBooking");
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		
		boolean available = true;
		Date requestedFrom;
		Date requestedTo;
		Date bookedFrom;
		Date bookedTo;

//		System.out.println(bookingService.getAllBookingsByBookingStatus(booking.getVenueId(), "Booked"));
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
		for (Booking b : bookingService.getAllBookingsByBookingStatus(booking.getVenueId(), "Booked")) {

			log.info("Inside Loop");
			requestedFrom = new Date(booking.getBookedFrom().getYear(), booking.getBookedFrom().getMonth(),
					booking.getBookedFrom().getDate());
			requestedTo = new Date(booking.getBookedTo().getYear(), booking.getBookedTo().getMonth(),
					booking.getBookedTo().getDate());
			bookedFrom = new Date(b.getBookedFrom().getYear(), b.getBookedFrom().getMonth(),
					b.getBookedFrom().getDate());
			bookedTo = new Date(b.getBookedTo().getYear(), b.getBookedTo().getMonth(), b.getBookedTo().getDate());

			System.out.println("booking.getBookedFrom() "+booking.getBookedFrom());
			System.out.println("b.getBookedTo() "+b.getBookedTo());
			System.out.println("booking.getBookedTo() "+booking.getBookedTo());
			System.out.println("b.getBookedFrom() "+b.getBookedFrom());
			
			System.out.println("requestedFrom "+requestedFrom);
			System.out.println("requestedTo "+requestedTo);
			System.out.println("bookedFrom "+bookedFrom);
			System.out.println("bookedTo "+bookedTo);

			System.out.println(requestedFrom.compareTo(bookedTo));
			System.out.println(requestedTo.compareTo(bookedFrom));
			System.out.println();
			System.out.printf("booking.getBookedFrom[%s] | b.getBookedTo[%s] | booking.getBookedFrom().compareTo(b.getBookedTo())[%d] <= 0 [%b] \n",sdformat.format(booking.getBookedFrom()),sdformat.format(b.getBookedTo()),booking.getBookedFrom().compareTo(b.getBookedTo()),booking.getBookedFrom().compareTo(b.getBookedTo()) <= 0);
			System.out.println();
			System.out.println(requestedFrom.compareTo(bookedTo) <= 0 && requestedTo.compareTo(bookedFrom) >= 0);

			if (requestedFrom.compareTo(bookedTo) <= 0 && requestedTo.compareTo(bookedFrom) >= 0) {
				available = false;
				break;
			}
			System.out.println("Available " + available);
		}
		if (booking.getCustomerId() == customer.getCustomerId() && available == true) {
			booking.setCustomerFirstName(customer.getFirstName());
			booking.setCustomerLastName(customer.getLastName());
			return new ResponseEntity<Booking>(bookingService.saveBooking(booking), HttpStatus.OK);
		} else if (available == false) {
			return new ResponseEntity<String>("Date not Available for booking", HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<String>("Wrong Customer", HttpStatus.FORBIDDEN);
		}
	}
	
	@DeleteMapping("/deleteBookingByBookingId/{dealerId}/{bookingId}")
	public ResponseEntity<?> deletePaymentByRequestId(@RequestHeader String jwt, @PathVariable int dealerId,
			@PathVariable int bookingId) {
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			log.info("Inside deleteBookingByBookingId");
			return new ResponseEntity<Integer>(bookingService.deleteBooking(bookingId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	
}
