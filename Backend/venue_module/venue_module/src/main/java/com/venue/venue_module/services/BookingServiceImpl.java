package com.venue.venue_module.services;

import java.time.LocalDate;
import java.time.chrono.ChronoLocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.venue.venue_module.doa.BookingDao;
import com.venue.venue_module.entities.Booking;

@Service

public class BookingServiceImpl implements BookingService {
	@Autowired
	private BookingDao bookingDao;
	@Override
	public List<Booking> getBookings() {
		
		return bookingDao.findAll();
	}

	@Override
	public Booking addBooking(Booking book) {
		LocalDate datestart= book.getDateFrom();
		LocalDate enddate=book.getDateTo();

	List<Booking> books=bookingDao.findByVenueId(book.getVenueId());
	
		books.forEach(e->{
			if(e.getDateFrom().isEqual(datestart)||( e.getDateFrom()).isEqual(enddate)||
					(e.getDateFrom().isBefore(enddate)&& e.getDateFrom().isAfter(datestart))) {
				
			}
			else if(e.getDateTo().isEqual(datestart)||e.getDateTo().isEqual(enddate)||
					(e.getDateTo().isBefore(enddate)&& e.getDateTo().isAfter(datestart))) {
				
			}
			
				});
		return bookingDao.save(book);
		
	}
	

}
