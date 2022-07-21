package com.vrs.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRequest {
	
	@NotEmpty
	private String username;
	
	@NotEmpty
	private String password;
	
}
