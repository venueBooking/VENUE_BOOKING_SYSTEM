package com.vrs.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PaymentRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Request_Id")
	@NotNull
	private int requestId;
	
	@Column(name="Requested_Amount")
	@NotNull
	private long requestedAmount;
	
	//Booking Model
	@Column(name="Booking_Id")
	@NotNull
	private int bookingId;

	@Column(name="Booked_From")
	@NotNull
	private Date bookedFrom;
	
	@Column(name="Booked_To")
	@NotNull
	private Date bookedTo;
	
	@Column(name="Booking_Status")
	@NotEmpty
	private String bookingStatus;	
	
	@Column(name="Customer_Id")
	@NotNull
	private String customerId;
	
	//Venue Model
	@Column(name="venue_id")
	@NotNull
	private int venueId;
	
	@Column(name="venue_name")
	@NotEmpty
	private String venueName;

	@Column(name="venue_location")
	@NotEmpty
	private String venueLocation;
	
	@Column(name="capacity")
	@NotNull
	private int capacity;
	
	@Column(name="banquet")
	@NotNull
	private Boolean banquet;
	
	@Column(name="dining")
	@NotNull
	private Boolean dining;
	
	@Column(name="parking")
	@NotNull
	private Boolean parking;
	
	@Column(name="dealer_id")
	@NotNull
	private int dealerId;
	
	@Column(name="Dealer_FirstName")
	private String dealerFirstName;
	
	@Column(name="Dealer_LastName")
	private String dealerLastName;
	
}
