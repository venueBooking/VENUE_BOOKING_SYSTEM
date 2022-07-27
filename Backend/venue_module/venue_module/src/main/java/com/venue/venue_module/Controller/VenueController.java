package com.venue.venue_module.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.venue.venue_module.entities.Venue;
import com.venue.venue_module.services.VenueService;

@RestController
public class VenueController {
	
	@Autowired
	private VenueService venueService;
	
	@GetMapping("/home")
	public String home() {
		return "This is venue page";
	}
	
	//get venues
	@GetMapping("/venues")
	public List<Venue> getvenues()
	{
		return this.venueService.getVenues();
	}
 // add venue
	@PostMapping("/venues")
	public Venue addVenue(@RequestBody Venue venue )
	{
		return this.venueService.addVenue(venue);
	}
	
	//update venue
	@PutMapping("/venues")
	public Venue updateVenue(@RequestBody Venue venue) {
		return this.venueService.updateVenue(venue);
	}
	
	//delete Venue
	@DeleteMapping("/venues/{venueId}")
	public ResponseEntity<HttpStatus> deleteVenue(@PathVariable String venueId){
		try {
			this.venueService.deleteVenue(Long.parseLong(venueId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
