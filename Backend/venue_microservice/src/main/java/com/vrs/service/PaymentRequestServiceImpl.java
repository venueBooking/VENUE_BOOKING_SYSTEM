package com.vrs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vrs.model.PaymentRequest;
import com.vrs.repository.PaymentRequestRepository;

@Service
public class PaymentRequestServiceImpl implements PaymentRequestService {

	@Autowired
	PaymentRequestRepository paymentRequestRepository;
	
	@Override
	public PaymentRequest getPaymentRequestByBookingStatus(String bookingStatus, int customerId) {
		return paymentRequestRepository.getPaymentRequestByBookingStatus(bookingStatus, customerId);
	}

	@Override
	public PaymentRequest savePaymentRequest(PaymentRequest paymentRequest) {
		return paymentRequestRepository.save(paymentRequest);
	}

	@Override
	public int deletePaymentRequest(int requestId) {
		try {
			paymentRequestRepository.deleteById(requestId);
			return requestId;
		}
		catch (Exception e) {
			return -1;
		}
		
	}

	@Override
	public PaymentRequest getPaymentRequestByRequestId(int requestId) {
		return paymentRequestRepository.findById(requestId).orElse(null);
	}

}
