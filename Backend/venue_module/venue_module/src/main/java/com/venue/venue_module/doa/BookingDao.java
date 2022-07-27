package com.venue.venue_module.doa;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venue.venue_module.entities.Booking;



public interface BookingDao extends JpaRepository<Booking, Long> {
	public List<Booking> findByVenueId(long venueId);
	
}
