// US_13
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import Design from "../../Design";
import VenueService from "../../Services/VenueService";
import CustomTextField from "../../Supporting_Components/CustomTextField";

function ConfirmPaymentComponent() {
  const navigate = useNavigate();
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const location = useLocation()

  useEffect(()=>{
    if (headerC.state.userType !== "customer")
    navigate("/customerLogin")
  },[])

  async function confirmPayment(event) {
    event.preventDefault()
    // alert("Accept Booking")

    var newPaymentResponse = {
      "requestId": location.state.requestId,
      "requestedAmount": location.state.requestedAmount,
      "bookingId": location.state.bookingId,
      "bookedFrom": location.state.bookedFrom,
      "bookedTo": location.state.bookedTo,
      "bookingStatus": "accepted",
      "customerId": location.state.customerId,
      "venueId":  location.state.venueId,
      "venueName":  location.state.venueName,
      "venueLocation":  location.state.venueLocation,
      "capacity": location.state.capacity,
      "banquet": location.state.banquet,
      "dining": location.state.dining,
      "parking": location.state.parking,
      "dealerId": location.state.dealerId,
      "customerFirstName": userC.state.firstName,
      "customerLastName": userC.state.lastName
    }

    // console.log("new request payment in req pay     ",newPaymentResponse);

    var response = await VenueService.savePaymentResponse(headerC.state.jwtToken, userC.state.userId, newPaymentResponse)

    // console.log("Response in req pay     ",response);

    if (response != "") {
      alert("Venue booked Successfully!")
      navigate("/searchVenue")
    }
    else {
      alert("Payment Failed")
    }
  }

  async function declinePaymentRequest(){
    var response = VenueService.deletePaymentRequest(headerC.state.jwtToken, userC.state.userId, location.state.requestId)

    if (response != "") {
      alert("Payment Request Declined")
      navigate("/searchVenue")
    }
    else {
      alert("Decline Failed")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={confirmPayment}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Confirm Payment</span>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Venue Name</span>
                <input type="text" id="dealer-registration-firstname" className="dealer-login-input-field" value={location && location.state && location.state.venueName} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Requested from</span>
                <input type="date" id="dealer-registration-dob" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} value={location && location.state && location.state.bookedFrom} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Requested to</span>
                <input type="date" id="dealer-registration-dob" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} value={location && location.state && location.state.bookedTo} readOnly></input>
              </div>
            </div>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Amount</span>
                <input type="number" id="dealer-registration-lastname" className="dealer-login-input-field" placeholder='Enter last name' value={location && location.state && location.state.requestedAmount} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">
                  Requested amenities
                </span>
                <div>
                <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.banquet == true? "inline-block" : "None"}}>Banquet</span>
                  <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.dining == true? "inline-block" : "None"}}>Dining</span>
                  <span className="venue-registration-input-checkbox-label" style={{ display: location && location.state && location.state.parking == true? "inline-block" : "None"}}>Parking</span>
                </div>
              </div>
            </div>
            <div className="dealer-registration-input-row">
              <button className='btn btn-outline-light btn-lg dealer-login-button'>Confirm &amp; Pay</button>
              <button type="button" className='btn btn-outline-light btn-lg dealer-login-button' onClick={declinePaymentRequest}>Decline</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConfirmPaymentComponent;
