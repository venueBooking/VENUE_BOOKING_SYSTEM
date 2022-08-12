package com.vrs.controller;

import java.sql.Date;

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
import com.vrs.model.PaymentRequest;
import com.vrs.service.BookingService;
import com.vrs.service.CustomerFeignService;
import com.vrs.service.DealerFeignService;
import com.vrs.service.PaymentRequestService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping
@Slf4j
@CrossOrigin(origins="http://localhost:3000")
public class PaymentRequestController {

	@Autowired
	PaymentRequestService paymentRequestService;

	@Autowired
	BookingService bookingService;

	@Autowired
	DealerFeignService dealerFeignService;

	@Autowired
	CustomerFeignService customerFeignService;

	@GetMapping("/getPaymentRequestByBookingStatus/{customerId}/{BookingStatus}")
	public ResponseEntity<?> getPaymentRequestByBookingStatus(@RequestHeader String jwt, @PathVariable int customerId,
			@PathVariable String BookingStatus) {
		log.info("Inside getPaymentRequestByBookingStatus");
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		if (customer.getCustomerId() == customerId) {
			return new ResponseEntity<PaymentRequest>(
					paymentRequestService.getPaymentRequestByBookingStatus(BookingStatus, customerId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Customer", HttpStatus.FORBIDDEN);
		}
	}

	@SuppressWarnings("deprecation")
	@PostMapping("/savePaymentRequest/{dealerId}")
	public ResponseEntity<?> savePaymentRequest(@RequestHeader String jwt, @PathVariable int dealerId,
			@RequestBody PaymentRequest paymentRequest) {
		log.info("Inside saveBooking");
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);

		boolean available = true;
		Date requestedFrom;
		Date requestedTo;
		Date bookedFrom;
		Date bookedTo;
		for (Booking b : bookingService.getAllBookingsByBookingStatus(paymentRequest.getVenueId(), "Booked")) {

			log.info("Inside Loop");
			requestedFrom = new Date(paymentRequest.getBookedFrom().getYear(),
					paymentRequest.getBookedFrom().getMonth(), paymentRequest.getBookedFrom().getDate());
			requestedTo = new Date(paymentRequest.getBookedTo().getYear(), paymentRequest.getBookedTo().getMonth(),
					paymentRequest.getBookedTo().getDate());
			bookedFrom = new Date(b.getBookedFrom().getYear(), b.getBookedFrom().getMonth(),
					b.getBookedFrom().getDate());
			bookedTo = new Date(b.getBookedTo().getYear(), b.getBookedTo().getMonth(), b.getBookedTo().getDate());

			if (requestedFrom.compareTo(bookedTo) <= 0 && requestedTo.compareTo(bookedFrom) >= 0) {
				available = false;
				break;
			}
			System.out.println("Available " + available);
		}

		if (dealer.getDealerId() == dealerId && paymentRequest.getDealerId() == dealerId && available == true) {
			Booking booking = bookingService.getBookingByBookingId(paymentRequest.getBookingId());
			booking.setBookingStatus("Accepted");
			bookingService.saveBooking(booking);
			paymentRequest.setBookingStatus("Accepted");
			paymentRequest.setDealerFirstName(dealer.getFirstName());
			paymentRequest.setDealerLastName(dealer.getLastName());
			return new ResponseEntity<PaymentRequest>(paymentRequestService.savePaymentRequest(paymentRequest),
					HttpStatus.OK);
		} else if (available == false) {
			return new ResponseEntity<String>("Date not Available for booking", HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@DeleteMapping("/deletePaymentByRequestId/{customerId}/{requestId}")
	public ResponseEntity<?> deletePaymentByRequestId(@RequestHeader String jwt, @PathVariable int customerId,
			@PathVariable int requestId) {
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		if (customer.getCustomerId() == customerId) {
			log.info("Inside deletePaymentByRequestId");
			PaymentRequest paymentRequest = paymentRequestService.getPaymentRequestByRequestId(requestId);
			Booking booking = bookingService.getBookingByBookingId(paymentRequest.getBookingId());
			bookingService.deleteBooking(booking.getBookingId());
			return new ResponseEntity<Integer>(paymentRequestService.deletePaymentRequest(requestId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Customer", HttpStatus.FORBIDDEN);
		}
	}
}
