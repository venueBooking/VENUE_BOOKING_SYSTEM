package com.venue.venue_module.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.venue.venue_module.doa.BookingDao;
import com.venue.venue_module.entities.Booking;
import com.venue.venue_module.services.BookingService;

@RestController
public class BookingController {
	@Autowired
	private BookingService bookService;
	
	@Autowired
	private BookingDao bookingDao;

	@GetMapping("/bookhome")
	public String home() {
		return "this is booking page";
	}
	
	@GetMapping("/bookings")
	public List<Booking> getBookings()
	{
		return this.bookService.getBookings();
	}
	
	@PostMapping("/bookings")
	public Booking addBooking(@RequestBody Booking book )
	{
		return this.bookService.addBooking(book);
	}
	
	
}
