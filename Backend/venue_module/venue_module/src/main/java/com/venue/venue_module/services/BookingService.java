package com.venue.venue_module.services;

import java.util.List;

import com.venue.venue_module.entities.Booking;


public interface BookingService {

	public List<Booking> getBookings() ;

	public Booking addBooking(Booking book);

	
}
