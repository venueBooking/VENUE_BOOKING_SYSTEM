package com.venue.venue_module.Controller;

import java.time.LocalDate;
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
import com.venue.venue_module.utilities.venuebookedException;

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
		LocalDate datestart= book.getDateFrom();
		LocalDate enddate=book.getDateTo();

	List<Booking> books=bookingDao.findByVenueId(book.getVenueId());
	
		books.forEach(e->{
//			if(e.getDateFrom().isEqual(datestart)||( e.getDateFrom()).isEqual(enddate)||
//					(e.getDateFrom().isBefore(enddate)&& e.getDateFrom().isAfter(datestart))) {
//				throw new venuebookedException();
//			}
//			else if(e.getDateTo().isEqual(datestart)||e.getDateTo().isEqual(enddate)||
//					(e.getDateTo().isBefore(enddate)&& e.getDateTo().isAfter(datestart))) {
//				throw new venuebookedException();
//			}
			if(e.getDateFrom().isBefore(enddate) && e.getDateTo().isAfter(datestart)) {
				throw new venuebookedException();
			}
			
				});
		return this.bookService.addBooking(book);
	}
	
	
}
