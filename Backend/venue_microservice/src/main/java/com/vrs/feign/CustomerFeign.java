package com.vrs.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.vrs.model.Customer;

@FeignClient(name = "CustomerFeignClient", url = "${Customer.baseUrl}")
public interface CustomerFeign {
		
		@GetMapping("/getCustomer")
		public Customer getCustomerByJwt(@RequestHeader String Authorization);
		
		@PostMapping("/updateCustomer")
		public Customer updateCustomer(@RequestHeader(value = "Authorization", required = true) String authorizationHeader,@RequestBody Customer customer);
}
