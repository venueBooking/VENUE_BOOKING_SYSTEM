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
//	List<Venue> list;

	public VenueServiceImpl() {
//		list=new ArrayList<>();
//		list.add(new Venue(123,"abc","xyz",250));
//		list.add(new Venue(456,"pqr","lmn",300));

	}

	@Override
	public List<Venue> getVenues() {
		// TODO Auto-generated method stub

		return venueDao.findAll();
	}

	@Override
	public Venue addVenue(Venue venue) {
		// TODO Auto-generated method stub
//		list.add(venue);
		venueDao.save(venue);
		return venue;
	}

	@Override
	public Venue updateVenue(Venue venue) {
		// TODO Auto-generated method stub
//		list.forEach(e->{
//			if(e.getVenuename() == venue.getVenuename()) {
//				e.setVenuelocation(venue.getVenuelocation());
//				e.setCapacity(venue.getCapacity());
//			}
//		});

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
//	@Override
//	public Venue getVenue(long venueId) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
