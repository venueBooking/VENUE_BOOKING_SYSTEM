package com.vrs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.feign.CustomerFeign;
import com.vrs.model.Customer;

@Service
public class CustomerFeignServiceImpl implements CustomerFeignService {

	@Autowired
	CustomerFeign customerFeign;
	
	@Override
	public Customer getCustomerByJwt(String jwt) {
		return customerFeign.getCustomerByJwt(jwt);
	}

	@Override
	public Customer updateCustomer(String authorizationHeader,Customer customer) {
		return customerFeign.updateCustomer(authorizationHeader,customer);
	}

}
