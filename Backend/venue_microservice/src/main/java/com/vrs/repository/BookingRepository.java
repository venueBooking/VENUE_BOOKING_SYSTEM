package com.vrs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vrs.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
	@Query("from Booking where venue_id = ?1")
	List<Booking> findBookingByVenueId(int venueId);
	
	@Query("from Booking where venue_id = ?1 and Booking_Status = ?2")
	List<Booking> findBookingByBookingStatus(int venueId, String BookingStatus);
}
