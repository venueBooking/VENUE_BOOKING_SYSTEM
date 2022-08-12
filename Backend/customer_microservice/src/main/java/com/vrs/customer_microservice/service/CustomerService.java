package com.vrs.customer_microservice.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vrs.customer_microservice.model.Customer;


public interface CustomerService extends UserDetailsService{
	
	List<Customer> getCustomers();

	Customer updateCustomer(Customer customer);
	
	Customer addCustomer(Customer customer);
	
	int deleteCustomer(int customerId);
	
	Customer getCustomerByUsername(String username);

	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
	
}
