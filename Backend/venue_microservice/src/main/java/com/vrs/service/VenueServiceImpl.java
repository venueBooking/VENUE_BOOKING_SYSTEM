package com.vrs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.model.Venue;
import com.vrs.repository.VenueRepository;

@Service
public class VenueServiceImpl implements VenueService {

	@Autowired
	VenueRepository venueRepository;
	
	@Override
	public List<Venue> getVenues(int dealerId) {
		return venueRepository.findVenueByDealerId(dealerId);
	}

	@Override
	public Venue updateVenue(Venue venue) {
		venueRepository.save(venue);
		return venue;
	}

	@Override
	public int deleteVenue(int venueId) {
		try {
			venueRepository.deleteById(venueId);
			return venueId;
		}
		catch (Exception e) {
			return -1;
		}
	}

	@Override
	public Venue getVenueByName(String name) {
		return venueRepository.searchVenueByName(name);
	}

	@Override
	public Venue loadUserByName(String name) {
		Venue venue = null;
		venue = getVenueByName(name);

		return venue;
	}

	@Override
	public List<Venue> getVenueByLocation(String venueLocation) {
		return venueRepository.searchVenueByLocation(venueLocation);
	}
	
}
