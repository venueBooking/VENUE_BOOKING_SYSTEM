package com.vrs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vrs.model.Dealer;

public interface DealerRepository extends JpaRepository<Dealer, Integer> {
	
	@Query("from Dealer where username = ?1")
	Dealer searchDealerByUsername(String username);
}
