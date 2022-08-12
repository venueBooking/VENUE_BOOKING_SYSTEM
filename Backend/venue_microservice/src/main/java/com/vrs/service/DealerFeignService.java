package com.vrs.service;

import com.vrs.model.Dealer;

public interface DealerFeignService {
	Dealer getDealerByJwt(String username);
	
	int addBalance(int dealerId, int amount);
}
