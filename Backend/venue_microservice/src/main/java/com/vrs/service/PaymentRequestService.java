package com.vrs.service;

import com.vrs.model.PaymentRequest;

public interface PaymentRequestService {
	
	
	PaymentRequest getPaymentRequestByRequestId(int requestId);
	
	PaymentRequest getPaymentRequestByBookingStatus(String bookingStatus, int customerId);
	
	PaymentRequest savePaymentRequest(PaymentRequest paymentRequest);
	
	int deletePaymentRequest(int requestId);
	
}
