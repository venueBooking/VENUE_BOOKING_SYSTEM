package com.vrs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.feign.DealerFeign;
import com.vrs.model.Dealer;

@Service
public class DealerFeignServiceImpl implements DealerFeignService {

	@Autowired
	DealerFeign dealerFeign;

	@Override
	public Dealer getDealerByJwt(String authorization) {
		return dealerFeign.getDealerByJwt(authorization);
	}

	@Override
	public int addBalance(int dealerId, int amount) {
		return dealerFeign.addBalance(dealerId, amount);
	}

}
