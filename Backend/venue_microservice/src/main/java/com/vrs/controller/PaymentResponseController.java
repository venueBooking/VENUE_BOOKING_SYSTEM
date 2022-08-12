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
import com.vrs.model.PaymentResponse;
import com.vrs.service.BookingService;
import com.vrs.service.CustomerFeignService;
import com.vrs.service.DealerFeignService;
import com.vrs.service.PaymentRequestService;
import com.vrs.service.PaymentResponseService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping
@Slf4j
@CrossOrigin(origins="http://localhost:3000")
public class PaymentResponseController {

	@Autowired
	PaymentResponseService paymentResponseService;

	@Autowired
	CustomerFeignService customerFeignService;

	@Autowired
	DealerFeignService dealerFeignService;

	@Autowired
	BookingService bookingService;

	@Autowired
	PaymentRequestService paymentRequestService;

	@GetMapping("/getPaymentResponseByResponseId/{dealerId}/{ResponseId}")
	public ResponseEntity<?> getPaymentResponseByResponseId(@RequestHeader String jwt, @PathVariable int dealerId,
			@PathVariable int ResponseId) {
		log.info("Inside getPaymentResponseByResponseId");
		Dealer dealer = dealerFeignService.getDealerByJwt(jwt);
		if (dealer.getDealerId() == dealerId) {
			return new ResponseEntity<PaymentResponse>(
					paymentResponseService.getPaymentResponseByResponseId(ResponseId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Dealer", HttpStatus.FORBIDDEN);
		}
	}

	@SuppressWarnings("deprecation")
	@PostMapping("/savePaymentResponse/{customerId}")
	public ResponseEntity<?> savePaymentResponse(@RequestHeader String jwt, @PathVariable int customerId,
			@RequestBody PaymentResponse paymentResponse) {
		log.info("Inside saveBooking");
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		PaymentRequest paymentRequest = paymentRequestService.getPaymentRequestByBookingStatus("Accepted", customerId);
		if (paymentRequest.getRequestedAmount() > customer.getBalance()) {
			return new ResponseEntity<String>("Customer does not have sufficient amount to pay",
					HttpStatus.BAD_REQUEST);
		} else {

			boolean available = true;
			Date requestedFrom;
			Date requestedTo;
			Date bookedFrom;
			Date bookedTo;

			for (Booking b : bookingService.getAllBookingsByBookingStatus(paymentResponse.getVenueId(), "Booked")) {

				log.info("Inside Loop");
				requestedFrom = new Date(paymentResponse.getBookedFrom().getYear(),
						paymentResponse.getBookedFrom().getMonth(), paymentResponse.getBookedFrom().getDate());
				requestedTo = new Date(paymentResponse.getBookedTo().getYear(),
						paymentResponse.getBookedTo().getMonth(), paymentResponse.getBookedTo().getDate());
				bookedFrom = new Date(b.getBookedFrom().getYear(), b.getBookedFrom().getMonth(),
						b.getBookedFrom().getDate());
				bookedTo = new Date(b.getBookedTo().getYear(), b.getBookedTo().getMonth(), b.getBookedTo().getDate());

				if (requestedFrom.compareTo(bookedTo) <= 0 && requestedTo.compareTo(bookedFrom) >= 0) {
					available = false;
					break;
				}
				System.out.println("Available " + available);
			}

			if (customer.getCustomerId() == customerId && paymentResponse.getCustomerId() == customerId
					&& available == true) {
				Booking booking = bookingService.getBookingByBookingId(paymentResponse.getBookingId());
				booking.setBookingStatus("Booked");
				bookingService.saveBooking(booking);

				System.out.println(paymentRequest);
				paymentRequest.setBookingStatus("Booked");
				paymentRequestService.savePaymentRequest(paymentRequest);
				System.out.println(paymentRequest);
				paymentResponse.setBookingStatus("Booked");
				paymentResponse.setCustomerFirstName(customer.getFirstName());
				paymentResponse.setCustomerLastName(customer.getLastName());

				// Saving the amount into dealer
				dealerFeignService.addBalance(paymentResponse.getDealerId(), (int)paymentResponse.getRequestedAmount());
				
				// deducting the amount from customer
				customer.setBalance(customer.getBalance() - paymentRequest.getRequestedAmount());
				customerFeignService.updateCustomer(jwt,customer);
				return new ResponseEntity<PaymentResponse>(paymentResponseService.savePaymentResponse(paymentResponse),
						HttpStatus.OK);
			} else if (available == false) {
				return new ResponseEntity<String>("Date not Available for booking", HttpStatus.BAD_REQUEST);
			} else {
				return new ResponseEntity<String>("Wrong Customer", HttpStatus.FORBIDDEN);
			}
		}
	}

	@DeleteMapping("/deletePaymentByResponseId/{customerId}/{ResponseId}")
	public ResponseEntity<?> deletePaymentByResponseId(@RequestHeader String jwt, @PathVariable int customerId,
			@PathVariable int ResponseId) {
		Customer customer = customerFeignService.getCustomerByJwt(jwt);
		if (customer.getCustomerId() == customerId) {
			log.info("Inside deletePaymentByResponseId");
			//For deleting payment request
			PaymentResponse paymentResponse = paymentResponseService.getPaymentResponseByResponseId(ResponseId);
			PaymentRequest paymentRequest = paymentRequestService.getPaymentRequestByRequestId(paymentResponse.getRequestId());
			paymentRequestService.deletePaymentRequest(paymentRequest.getRequestId());
			//For deleting booking
			Booking booking = bookingService.getBookingByBookingId(paymentResponse.getBookingId());
			bookingService.deleteBooking(booking.getBookingId());
			return new ResponseEntity<Integer>(paymentResponseService.deletePaymentResponse(ResponseId), HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Wrong Customer", HttpStatus.FORBIDDEN);
		}
	}
}
