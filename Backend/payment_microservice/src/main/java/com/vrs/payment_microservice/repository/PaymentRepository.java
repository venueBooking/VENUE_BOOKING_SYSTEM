package com.vrs.payment_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vrs.payment_microservice.model.Payment;


public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
