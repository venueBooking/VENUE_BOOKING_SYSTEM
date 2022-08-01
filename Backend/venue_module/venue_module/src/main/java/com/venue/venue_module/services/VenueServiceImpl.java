package com.venue.venue_module.services;

//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.venue.venue_module.doa.VenueDao;
import com.venue.venue_module.entities.Venue;

@Service
public class VenueServiceImpl implements VenueService {
	@Autowired
	private VenueDao venueDao;

	public VenueServiceImpl() {
	}

	@Override
	public List<Venue> getVenues() {
		return venueDao.findAll();
	}

	@Override
	public Venue addVenue(Venue venue) {
		venueDao.save(venue);
		return venue;
	}

	@Override
	public Venue updateVenue(Venue venue) {
		venueDao.save(venue);
		return venue;
	}

	@Override
	public void deleteVenue(long parseLong) {
		// TODO Auto-generated method stub
//		list=this.list.stream().filter(e->e.getVenueId()!=parseLong).collect(Collectors.toList());

		Venue entity = venueDao.getOne(parseLong);
		venueDao.delete(entity);
	}

}
