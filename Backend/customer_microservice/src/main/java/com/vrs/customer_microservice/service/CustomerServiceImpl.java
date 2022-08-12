package com.vrs.customer_microservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vrs.customer_microservice.model.Customer;
import com.vrs.customer_microservice.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	public List<Customer> getCustomers() {
		return customerRepository.findAll();
	}
	
	@Override
	public Customer updateCustomer(Customer customer) {
		if ( customer.getPassword().equals( getCustomerByUsername( customer.getUsername() ).getPassword() ) ) {
			customerRepository.save(customer);
		}
		else {
			customer.setPassword(new BCryptPasswordEncoder(10).encode(customer.getPassword()));
			customerRepository.save(customer);
		}
		return customer;
	}
	
	@Override
	public Customer addCustomer(Customer customer) {
		customer.setPassword(new BCryptPasswordEncoder(10).encode(customer.getPassword()));
		customerRepository.save(customer);
		return customer;
	}

	@Override
	public int deleteCustomer(int customerId) {
		try {
			customerRepository.deleteById(customerId);
			return customerId;
		}
		catch (Exception e) {
			return -1;
		}
	}

	@Override
	public Customer getCustomerByUsername(String username) {
		return customerRepository.searchCustomerByUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Customer customer = null;
		customer = getCustomerByUsername(username);
		return customer;
	}

}
