import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";
import headerContext from "../../contexts/headerContext";
import VenueService from "../../Services/VenueService";

export const VenueRegistrationComponent = () => {
  const navigate = useNavigate()
  const userC = useContext(userContext)
  const headerC = useContext(headerContext)

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")
  },[])

  function goToViewVenueStatus(event) {
    event.preventDefault()

    const newVenue = {
      "venueName": document.getElementById("venue-registration-venue-name").value,
      "venueLocation": document.getElementById("venue-registration-venue-location").value,
      "capacity": document.getElementById("venue-registration-venue-capacity").value,
      "banquet": document.getElementById("venue-registration-venue-banquet").checked,
      "dining": document.getElementById("venue-registration-venue-dining").checked,
      "parking": document.getElementById("venue-registration-venue-parking").checked,
      "dealerId": userC.state.userId
    }

    console.log("New Venue --> ", newVenue);

    var response = VenueService.addVenue(headerC.state.jwtToken, newVenue)

    if (response !== "") {
      // console.log("add venue POST response --> ", response);
      alert("Venue registered successfully!")
      navigate("/viewVenueStatus")
    }
    else {
      alert("Failed to register venue")
    }
  }
  return (
    <>
      <div className="app-background">

        <form onSubmit={goToViewVenueStatus}>

          <div className="inner-box">

            <span className="dealer-login-span-header">Venue Registration</span>

            <div className="dealer-registration-input-row">

              <div>
                <span className="dealer-login-span-input">Venue name</span>
                <input type="text" id="venue-registration-venue-name" className="dealer-login-input-field" placeholder="Enter venue name" required></input>
              </div>

              <div>
                <span className="dealer-login-span-input">Venue location</span>
                <input type="text" id="venue-registration-venue-location" className="dealer-login-input-field" placeholder="Enter venue location" required></input>
              </div>

              <div>
                <span className="dealer-login-span-input">Capacity</span>
                <input type="number" id="venue-registration-venue-capacity" className="dealer-login-input-field" min="10" placeholder="Enter capacity in numbers" required></input>
              </div>

            </div>

            <div className="dealer-registration-input-row" style={{ justifyContent: "left", paddingLeft: "1.4vw" }}>
              
              <div>

                <span className="dealer-login-span-input">
                  Amenities Available
                </span>

                {/* <input type="text" className="dealer-login-input-field" placeholder='Enter username' required></input> */}
                <div>

                  <div className="venue-registration-input-checkbox">

                    <input type="checkbox" name="banquet" value="Banquet" id="venue-registration-venue-banquet"></input>
                    <span className="venue-registration-input-checkbox-label">Banquet</span>

                  </div>

                  <div className="venue-registration-input-checkbox">

                    <input type="checkbox" name="dining" value="Dining" id="venue-registration-venue-dining"></input>
                    <span className="venue-registration-input-checkbox-label">Dining</span>

                  </div>

                  <div className="venue-registration-input-checkbox">

                    <input type="checkbox" value="Parking" id="venue-registration-venue-parking"></input>
                    <span className="venue-registration-input-checkbox-label">Parking</span>

                  </div>

                </div>

              </div>

            </div>

            <button className="btn btn-outline-light btn-lg dealer-login-button">Register</button>

          </div>

        </form>

      </div>
    </>
  );
};
