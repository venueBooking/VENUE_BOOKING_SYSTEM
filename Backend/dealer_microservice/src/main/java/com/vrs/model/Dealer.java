package com.vrs.model;

import java.sql.Date;
import java.util.Collection;
import java.util.Collections;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Dealer implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
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

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.emptyList();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
