package com.vrs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.model.PaymentResponse;
import com.vrs.repository.PaymentRespondRepository;

@Service
public class PaymentResponseServiceImpl implements PaymentResponseService {

	@Autowired
	PaymentRespondRepository paymentRespondRepository;
	
	@Override
	public PaymentResponse getPaymentResponseByResponseId(int responseId) {
		return paymentRespondRepository.findById(responseId).orElse(null);
	}

	@Override
	public PaymentResponse savePaymentResponse(PaymentResponse paymentResponse) {
		return paymentRespondRepository.save(paymentResponse);
	}

	@Override
	public int deletePaymentResponse(int responseId) {
		try {
			paymentRespondRepository.deleteById(responseId);
			return responseId;
		}
		catch (Exception e) {
			return -1;
		}
	}

}
