package com.vrs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vrs.model.Dealer;
import com.vrs.repository.DealerRepository;

@Service
public class DealerServiceImpl implements DealerService{

	@Autowired
	DealerRepository dealerRepository;
	
	@Override
	public List<Dealer> getDealers() {
		return dealerRepository.findAll();
	}
	
	@Override
	public Dealer updateDealer(Dealer dealer) {
		dealer.setPassword(new BCryptPasswordEncoder(10).encode(dealer.getPassword()));
		dealerRepository.save(dealer);
		return dealer;
	}
	
	@Override
	public Dealer getDealerByUsername(String username) {
		return dealerRepository.searchDealerByUsername(username);
	}

	@Override
	public int deleteDealer(int dealerId) {
		try {
			dealerRepository.deleteById(dealerId);
			return dealerId;
		}
		catch (Exception e) {
			return -1;
		}
	}
	
	@Override
	public Dealer loadUserByUsername(String username) throws UsernameNotFoundException {
		Dealer dealer = null;
		dealer = getDealerByUsername(username);
//		if (dealer != null) {
//			dealer = new ProjectManagerDetails(getProjectManagerByUserName(username));
//		}

		return dealer;
	}

}
