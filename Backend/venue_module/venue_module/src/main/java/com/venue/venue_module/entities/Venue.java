package com.venue.venue_module.entities;


import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;

@Entity
@NoArgsConstructor
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
	private int bookingRequest;
	public long getVenueId() {
		return venueId;
	}
	public void setVenueId(long venueId) {
		this.venueId = venueId;
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
	public int getDealerId() {
		return dealerId;
	}
	public void setDealerId(int dealerId) {
		this.dealerId = dealerId;
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
	public int getBookingRequest() {
		return bookingRequest;
	}
	public void setBookingRequest(int bookingRequest) {
		this.bookingRequest = bookingRequest;
	}
	@Override
	public String toString() {
		return "Venue [venueId=" + venueId + ", venuename=" + venuename + ", venuelocation=" + venuelocation
				+ ", capacity=" + capacity + ", dealerId=" + dealerId + ", banquetAmenity=" + banquetAmenity
				+ ", diningAmenity=" + diningAmenity + ", parkingAmenity=" + parkingAmenity + ", bookingRequest="
				+ bookingRequest + "]";
	}
	
}
