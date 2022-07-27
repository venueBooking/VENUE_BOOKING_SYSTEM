package com.venue.venue_module.services;

import java.util.List;

import com.venue.venue_module.entities.Venue;

public interface VenueService {
	
	public List<Venue> getVenues();

	public Venue addVenue(Venue venue);

	public Venue updateVenue(Venue venue);

	void deleteVenue(long parseLong);

//	Venue getVenue(long venueId);

}
