package com.vrs.service;

import com.vrs.model.PaymentResponse;

public interface PaymentResponseService {

	PaymentResponse getPaymentResponseByResponseId(int responseId);

	PaymentResponse savePaymentResponse(PaymentResponse paymentResponse);

	int deletePaymentResponse(int responseId);
}
