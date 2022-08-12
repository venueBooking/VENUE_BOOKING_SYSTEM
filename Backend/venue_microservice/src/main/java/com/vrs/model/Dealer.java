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
public class Dealer{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="dealer_id")
	@NotNull
	private int dealerId;
	
	@Column(name="first_name")
	@NotEmpty
	private String firstName;

	@Column(name="last_name")
	@NotEmpty
	private String lastName;
	
	@Column(name="date_of_birth")
	@NotNull
	private Date dob;
	
	@Column(name="balance")
	@NotNull
	private int balance;
	
	@Column(name="username",unique=true)
	@NotEmpty
	private String username;
	
	@Column(name="password")
	@NotEmpty
	private String password;
}
