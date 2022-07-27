package com.vrs.payment_microservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrs.payment_microservice.model.Payment;
import com.vrs.payment_microservice.service.PaymentService;

@RequestMapping
@RestController
public class PaymentController {
	@Autowired
	PaymentService paymentService;
	
	@PostMapping("/makePayment")
	public Payment makePayment(@RequestBody Payment payment) {
		return paymentService.addDealer(payment);
	}
	
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}

}
