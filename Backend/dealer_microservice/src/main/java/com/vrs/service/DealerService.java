package com.vrs.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vrs.model.Dealer;

public interface DealerService extends UserDetailsService{
	
	List<Dealer> getDealers();

	Dealer updateDealer(Dealer dealer);

	Dealer addDealer(Dealer dealer);
	
	int deleteDealer(int dealerId);
	
	Dealer getDealerByUsername(String username);

	Dealer loadUserByUsername(String username) throws UsernameNotFoundException;
	
}
