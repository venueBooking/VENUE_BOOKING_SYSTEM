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

	
	
}
