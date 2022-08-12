// US-09

import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../contexts/headerContext";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import VenueService from "../../Services/VenueService";

function BookVenueComponent(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)

  useEffect(()=>{
    document.getElementById("book-venue-from").min = new Date().toISOString().split("T")[0];
    document.getElementById("book-venue-to").min = new Date().toISOString().split("T")[0];
    if (headerC.state.userType !== "customer")
    navigate("/customerLogin")
  },[])

  function setMinDateTo(event){
    document.getElementById("book-venue-to").min = document.getElementById("book-venue-from").value;
  }

  async function raiseBookingRequest(event) {
    event.preventDefault()

    // console.log("when raised     ", location.state);

    const newBookingRequest = {
      "bookedFrom": document.getElementById("book-venue-from").value,
      "bookedTo": document.getElementById("book-venue-to").value,
      "bookingStatus": "Raised",
      "customerId": userC.state.userId,
      "customerFirstName": userC.state.firstName,
      "customerLastName": userC.state.lastName,
      "venueId": location.state.venueId,
      "venueName": location.state.venueName,
      "venueLocation": location.state.venueLocation,
      "capacity": location.state.capacity,
      "banquet": document.getElementById("book-venue-banquet").checked,
      "dining": document.getElementById("book-venue-dining").checked,
      "parking": document.getElementById("book-venue-parking").checked,
      "dealerId": location.state.dealerId
    }

    // console.log("passing this     ", newBookingRequest);

    var response = await VenueService.saveBooking(headerC.state.jwtToken, newBookingRequest)
    // console.log("response is this     ", response.data);

    if (response != "") {
      alert("Request Submitted Successfully!")
      navigate("/searchVenue");
    }
    else {
      alert("Venue is already reserved during provided timeframe!")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={raiseBookingRequest}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Book Venue</span>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Venue Name</span>
                <input type="text" className="dealer-login-input-field" value={location && location.state && location.state.venueName} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Book from</span>
                <input type="date" id="book-venue-from" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} onChange={setMinDateTo} required></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Book to</span>
                <input type="date" id="book-venue-to" className="dealer-login-input-field" style={{ paddingRight: "1vw" }} required></input>
              </div>
            </div>
            <div className='dealer-registration-input-row'>
              <div>
                <span className="dealer-login-span-input">Venue Location</span>
                <input type="text" id="dealer-registration-lastname" className="dealer-login-input-field" value={location && location.state && location.state.venueLocation} readOnly></input>
              </div>
              <div>
                <span className="dealer-login-span-input">
                  Select amenities to avail
                </span>
                <div>
                  <div className="venue-registration-input-checkbox" style={{ display: (location && location.state && location.state.banquet) == true? "inline-block" : "None"}}>
                    <input type="checkbox" id="book-venue-banquet" name="banquet" value="Banquet"></input>
                    <span className="venue-registration-input-checkbox-label">
                      Banquet
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox" style={{ display: (location && location.state && location.state.dining) == true? "inline-block" : "None"}}>
                    <input type="checkbox" id="book-venue-dining" name="dining" value="Dining"></input>
                    <span className="venue-registration-input-checkbox-label">
                      Dining
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox" style={{ display: (location && location.state && location.state.parking) == true? "inline-block" : "None"}}>
                    <input type="checkbox" id="book-venue-parking" value="Parking"></input>
                    <span className="venue-registration-input-checkbox-label">
                      Parking
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className='btn btn-outline-light btn-lg dealer-login-button'>Request Booking</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookVenueComponent;
