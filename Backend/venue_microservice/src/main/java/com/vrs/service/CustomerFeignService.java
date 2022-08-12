package com.vrs.service;

import com.vrs.model.Customer;

public interface CustomerFeignService {
	Customer getCustomerByJwt(String jwt);
	Customer updateCustomer(String authorizationHeader, Customer customer);
}
