package com.venue.venue_module.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venue.venue_module.entities.Venue;

public interface VenueDao extends JpaRepository<Venue, Long>{


}
