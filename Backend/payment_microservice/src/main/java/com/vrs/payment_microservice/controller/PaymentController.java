package com.vrs.payment_microservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.vrs.payment_microservice.model.Payment;
import com.vrs.payment_microservice.service.PaymentService;

@RequestMapping
@RestController
public class PaymentController {
	@Autowired
	PaymentService paymentService;
	
	@PostMapping("/makePayment")
	@ResponseStatus(value=HttpStatus.CREATED)
	public Payment makePayment(@RequestBody Payment payment) {
		return paymentService.addDealer(payment);
	}
	

}
