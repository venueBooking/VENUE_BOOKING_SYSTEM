package com.vrs.payment_microservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.payment_microservice.model.Payment;
import com.vrs.payment_microservice.repository.PaymentRepository;

@Service
public class PaymentServiceImpls implements PaymentService {

	@Autowired
	PaymentRepository paymentRepository;

	@Override
	public Payment addDealer(Payment payment) {
		// TODO Auto-generated method stub
		paymentRepository.save(payment);
		return payment;
	}

}
