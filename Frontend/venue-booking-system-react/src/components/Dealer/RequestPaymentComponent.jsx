// US_07
import React, { useContext, useEffect } from "react";
import Design from "../../Design";
import CustomTextField from "../../Supporting_Components/CustomTextField";
import { useLocation, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import VenueService from "../../Services/VenueService";

function RequestPaymentComponent() {
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")
    // console.log("Name   ", (location && location.state && location.state.booking && location.state.booking.customerFirstName) + " " + (location && location.state && location.state.booking && location.state.booking.customerLastName));
  },[])

  async function acceptBookingRequest(event) {
    event.preventDefault()
    // alert("Accept Booking")

    var newPaymentRequest = {
      "requestedAmount": document.getElementById("request-payment-amount").value,
      "bookingId": location.state.booking.bookingId,
      "bookedFrom": location.state.booking.bookedFrom,
      "bookedTo": location.state.booking.bookedTo,
      "bookingStatus": "accepted",
      "customerId": location.state.booking.customerId,
      "venueId":  location.state.booking.venueId,
      "venueName":  location.state.booking.venueName,
      "venueLocation":  location.state.booking.venueLocation,
      "capacity": location.state.booking.capacity,
      "banquet": location.state.booking.banquet,
      "dining": location.state.booking.dining,
      "parking": location.state.booking.parking,
      "dealerId": location.state.booking.dealerId,
      "dealerFirstName": userC.state.firstName,
      "dealerLastName": userC.state.lastName
    }

    // console.log("new request payment in req pay     ",newPaymentRequest);

    var response = await VenueService.savePaymentRequest(headerC.state.jwtToken, userC.state.userId, newPaymentRequest)

    // console.log("Response in req pay     ",response);

    if (response != "") {
      alert("Payment Requested Successfully!")
      navigate("/manageVenueRequests", { state: location.state.venue })
    }
    else {
      alert("Payment Request Failed. Venue is already booked during given timeframe")
    }
  }

  async function declineBookingRequest(event) {
    event.preventDefault()

    var response = VenueService.deleteBooking(headerC.state.jwtToken, userC.state.userId, location.state.booking.bookingId)

    if (response != "") {
      alert("Request Declined")
      navigate("/manageVenueRequests", { state: location.state.venue })
    }
    else {
      alert("Decline Failed")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={acceptBookingRequest}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Request Payment</span>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Customer Name</span>
                <input type="text" id="dealer-registration-firstname" className="dealer-login-input-field" value={ (location && location.state && location.state.booking && location.state.booking.customerFirstName) + " " + (location && location.state && location.state.booking && location.state.booking.customerLastName)} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Requested from</span>
                <input type="date" id="dealer-registration-dob" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} value={location && location.state && location.state.booking && location.state.booking.bookedFrom} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Requested to</span>
                <input type="date" id="dealer-registration-dob" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} value={location && location.state && location.state.booking && location.state.booking.bookedTo} readOnly></input>
              </div>
            </div>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Amount</span>
                <input type="number" id="request-payment-amount" className="dealer-login-input-field" min="0" required></input>
              </div>
              <div>
                <span className="dealer-login-span-input">
                  Requested amenities
                </span>
                <div>
                  <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.booking && location.state.booking.banquet == true? "inline-block" : "None"}}>Banquet</span>
                  <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.booking && location.state.booking.dining == true? "inline-block" : "None"}}>Dining</span>
                  <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.booking && location.state.booking.parking == true? "inline-block" : "None"}}>Parking</span>
                </div>
              </div>
            </div>
            <div className="dealer-registration-input-row">
              <button className='btn btn-outline-light btn-lg dealer-login-button' style={{ display: location && location.state && location.state.booking && location.state.booking.bookingStatus == "Raised"? "inline-block" : "None"}}>Accept &amp; Request Payment</button>
              <button className='btn btn-outline-light btn-lg dealer-login-button' onClick={declineBookingRequest}>Decline</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RequestPaymentComponent;
