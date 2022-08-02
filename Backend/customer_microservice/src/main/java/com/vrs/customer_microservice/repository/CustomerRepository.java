package com.vrs.customer_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vrs.customer_microservice.model.Customer;


public interface CustomerRepository extends JpaRepository<Customer,Integer>{

	@Query("from Customer where username = ?1")
	Customer searchCustomerByUsername(String username);

}
