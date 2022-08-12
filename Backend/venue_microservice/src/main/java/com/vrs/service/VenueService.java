package com.vrs.service;

import java.util.List;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vrs.model.Venue;

public interface VenueService {
	
	List<Venue> getVenues(int dealerId);
	
	List<Venue> getVenueByLocation(String venueLocation);

	Venue updateVenue(Venue venue);
	
	int deleteVenue(int venueId);
	
	Venue getVenueByName(String name);

	Venue loadUserByName(String name) throws UsernameNotFoundException;
	
	
}
