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
public class Customer{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	@NotNull
	private int customerId;
	
	@Column(name="first_name")
	@NotEmpty
	private String firstName;

	@Column(name="last_name")
	@NotEmpty
	private String lastName;
	
	@Column(name="balance")
	@NotNull
	private long balance;
	
	@Column(name="date_of_birth")
	@NotNull
	private Date dob;
	
	@Column(name="username")
	@NotEmpty
	private String username;
	
	@Column(name="password")
	@NotEmpty
	private String password;
}
