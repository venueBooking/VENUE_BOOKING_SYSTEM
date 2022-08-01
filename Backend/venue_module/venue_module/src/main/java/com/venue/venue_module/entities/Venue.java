package com.venue.venue_module.entities;


import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Entity
public class Venue {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long venueId;
	private String venuename;
	private String venuelocation;
	private int capacity;
	private int dealerId;	
	private boolean banquetAmenity;
	private boolean diningAmenity;
	private boolean parkingAmenity;

	
	public Venue(long venueId, String venuename, String venuelocation, int capacity, int dealerId,
			boolean banquetAmenity, boolean diningAmenity, boolean parkingAmenity) {
		super();
		this.venueId = venueId;
		this.venuename = venuename;
		this.venuelocation = venuelocation;
		this.capacity = capacity;
		this.dealerId = dealerId;
		this.banquetAmenity = banquetAmenity;
		this.diningAmenity = diningAmenity;
		this.parkingAmenity = parkingAmenity;
	}


	@Override
	public String toString() {
		return "Venue [venueId=" + venueId + ", venuename=" + venuename + ", venuelocation=" + venuelocation
				+ ", capacity=" + capacity + ", dealerId=" + dealerId + ", banquetAmenity=" + banquetAmenity
				+ ", diningAmenity=" + diningAmenity + ", parkingAmenity=" + parkingAmenity + "]";
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

	public long getVenueId() {
		return venueId;
	}
	public void setVenueId(long venueId) {
		this.venueId = venueId;
	}
	public boolean isBanquetAmenity() {
		return banquetAmenity;
	}
	public void setBanquetAmenity(boolean banquetAmenity) {
		this.banquetAmenity = banquetAmenity;
	}
	public boolean isDiningAmenity() {
		return diningAmenity;
	}
	public void setDiningAmenity(boolean diningAmenity) {
		this.diningAmenity = diningAmenity;
	}
	public boolean isParkingAmenity() {
		return parkingAmenity;
	}
	public void setParkingAmenity(boolean parkingAmenity) {
		this.parkingAmenity = parkingAmenity;
	}
	public int getDealerId() {
		return dealerId;
	}
	public void setDealerId(int dealerId) {
		this.dealerId = dealerId;
	}
}
