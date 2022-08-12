package com.vrs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vrs.model.PaymentResponse;

public interface PaymentRespondRepository extends JpaRepository<PaymentResponse, Integer> {

}
