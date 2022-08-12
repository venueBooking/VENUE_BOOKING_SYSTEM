package com.vrs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vrs.model.Venue;

public interface VenueRepository extends JpaRepository<Venue, Integer> {
	
	@Query("from Venue where venue_name = ?1")
	Venue searchVenueByName(String venueName);
	
	@Query("from Venue where lower(venue_location) = lower(?1)")
	List<Venue> searchVenueByLocation(String venueLocation);
	
	@Query("from Venue where dealer_id = ?1")
	List<Venue> findVenueByDealerId(int dealerId);
}

