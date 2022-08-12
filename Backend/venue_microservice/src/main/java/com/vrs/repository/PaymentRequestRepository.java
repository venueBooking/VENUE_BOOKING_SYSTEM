package com.vrs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vrs.model.PaymentRequest;

public interface PaymentRequestRepository extends JpaRepository<PaymentRequest,Integer> {
	@Query("from PaymentRequest where Booking_Status = ?1 and Customer_Id = ?2")
	PaymentRequest getPaymentRequestByBookingStatus(String bookingStatus, int customerId);
}
