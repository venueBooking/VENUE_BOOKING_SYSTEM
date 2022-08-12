package com.vrs.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.vrs.model.Dealer;

@FeignClient(name = "DealerFeignClient", url = "${Dealer.baseUrl}")
public interface DealerFeign {
	
	@GetMapping("/getDealer")
	public Dealer getDealerByJwt(@RequestHeader String Authorization);
	
	@PostMapping("/addBalance/{dealerId}/{amount}")
	public int addBalance(@PathVariable int dealerId, @PathVariable int amount);
}
