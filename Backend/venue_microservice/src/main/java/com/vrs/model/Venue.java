package com.vrs.model;

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
public class Venue {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
}