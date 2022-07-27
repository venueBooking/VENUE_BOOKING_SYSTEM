package com.venue.venue_module.entities;

//import java.util.LinkedHashMap;

import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Entity
public class Venue {
	
	private String venuename;
	private String venuelocation;
	private int capacity;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long venueId;
	
//	private LinkedHashMap<String, String> aminitiesoptions;
//	private String[] aminities;
//	public Venue() {
//		aminitiesoptions=new LinkedHashMap<String,String>();
//		aminitiesoptions.put("parking","parking");
//		aminitiesoptions.put("dinning","dinning");
//		
//	}
	public Venue(String venuename, String venuelocation, int capacity) {
		super();
		this.venuename = venuename;
		this.venuelocation = venuelocation;
		this.capacity = capacity;
//		this.venueId = venueId;
	}
	@Override
	public String toString() {
		return "Venue [venuename=" + venuename + ", venuelocation=" + venuelocation + ", capacity=" + capacity
				+  "]";
	}
	public String getVenuename() {
		return venuename;
	}

	public void setVenuename(String venuename) {
		this.venuename = venuename;
	}
	public String getVenuelocation() {
		return venuelocation;
	}
	public void setVenuelocation(String venuelocation) {
		this.venuelocation = venuelocation;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
//	public Venue() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
	public long getVenueId() {
		return venueId;
	}
	public void setVenueId(long venueId) {
		this.venueId = venueId;
	}
//	public String[] getAminities() {
//		return aminities;
//	}
//	public void setAminities(String[] aminities) {
//		this.aminities = aminities;
//	}
//	public LinkedHashMap<String, String> getAminitiesoptions() {
//		return aminitiesoptions;
//	}
//	public void setAminitiesoptions(LinkedHashMap<String, String> aminitiesoptions) {
//		this.aminitiesoptions = aminitiesoptions;
//	}

}
