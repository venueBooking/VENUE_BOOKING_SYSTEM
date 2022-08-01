package com.venue.venue_module.entities;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long bookingId;
	private long venueId;
	private long customerId;
	private LocalDate dateFrom;
	private LocalDate dateTo;
	private int bookingRequest;
	public long getBookingId() {
		return bookingId;
	}
	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}
	public LocalDate getDateFrom() {
		return dateFrom;
	}
	public void setDateFrom(LocalDate dateFrom) {
		this.dateFrom = dateFrom;
	}
	public LocalDate getDateTo() {
		return dateTo;
	}
	public void setDateTo(LocalDate dateTo) {
		this.dateTo = dateTo;
	}
	public long getVenueId() {
		return venueId;
	}
	public void setVenueId(long venueId) {
		this.venueId = venueId;
	}
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	
	public int getBookingRequest() {
		return bookingRequest;
	}
	public void setBookingRequest(int bookingRequest) {
		this.bookingRequest = bookingRequest;
	}
	
	public Booking(long bookingId, long venueId, long customerId, LocalDate dateTo, LocalDate dateFrom,
			int bookingRequest) {
		super();
		this.bookingId = bookingId;
		this.venueId = venueId;
		this.customerId = customerId;
		this.dateTo = dateTo;
		this.dateFrom = dateFrom;
		this.bookingRequest = bookingRequest;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
