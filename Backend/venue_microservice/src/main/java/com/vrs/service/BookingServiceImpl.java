package com.vrs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.model.Booking;
import com.vrs.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingRepository bookingRepository;
	
	@Override
	public Booking getBookingByBookingId(int bookingId) {
		return bookingRepository.findById(bookingId).orElse(null);
	}

	@Override
	public Booking saveBooking(Booking booking) {
		return bookingRepository.save(booking);
	}

	@Override
	public List<Booking> getBookingByVenueId(int venueId) {
		return bookingRepository.findBookingByVenueId(venueId);
	}

	@Override
	public List<Booking> getAllBookingsByBookingStatus(int venueId, String bookingStatus) {
		return bookingRepository.findBookingByBookingStatus(venueId, bookingStatus);
	}

	@Override
	public int deleteBooking(int bookingId) {
		try {
			bookingRepository.deleteById(bookingId);
			return bookingId;
		}
		catch (Exception e) {
			return -1;
		}
	}


}
