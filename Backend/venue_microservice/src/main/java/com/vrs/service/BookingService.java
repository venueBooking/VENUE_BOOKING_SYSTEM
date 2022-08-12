package com.vrs.service;

import java.util.List;

import com.vrs.model.Booking;

public interface BookingService {
	Booking getBookingByBookingId(int bookingId);
	
	Booking saveBooking(Booking booking);

	List<Booking> getBookingByVenueId(int venueId);
	
	List<Booking> getAllBookingsByBookingStatus(int venueId, String bookingStatus);
	
	int deleteBooking(int bookingId);
}
