import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import VenueService from "../../Services/VenueService";

function UpdateVenueComponent() {
  const navigate = useNavigate()
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const location = useLocation()

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")
  },[])

  async function startUpdate(event) {
    event.preventDefault()

    // console.log("Start venue update with    ",location.state);

    const newVenue = {
      "venueId": location.state.venueId,
      "venueName": document.getElementById("update-venue-name").value,
      "venueLocation": document.getElementById("update-venue-location").value,
      "capacity": document.getElementById("update-venue-capacity").value,
      "banquet": document.getElementById("update-venue-banquet").checked,
      "dining": document.getElementById("update-venue-dining").checked,
      "parking": document.getElementById("update-venue-parking").checked,
      "dealerId": location.state.dealerId
    }

    // console.log("start update venue --> ", newVenue);

    if (document.getElementById("update-venue-password").value != userC.state.password) {
      alert("Wrong Password!")
      document.getElementById("update-venue-password").value=""
      return
    }

    var response = await VenueService.updateVenue(headerC.state.jwtToken, newVenue)
    // console.log("update venue response --> ", response);

    if (response != "") {
      alert("Venue updated successfully")
      navigate("/manageVenueRequests",{ state: response.data })
    }
    else {
      alert("Failed to update venue")
    }
  }

  async function deleteVenue() {

    if (document.getElementById("update-venue-password").value != userC.state.password) {
      alert("Wrong Password!")
      document.getElementById("update-venue-password").value=""
      return
    }

    var response = VenueService.deleteVenue(headerC.state.jwtToken, userC.state.userId, location.state.venueId)
    if (response != "") {
      alert("Venue deleted successfully")
      navigate("/viewVenueStatus")
    }
    else {
      alert("Failed to delete")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={startUpdate}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Venue Update</span>
            <div className="dealer-registration-input-row">
              <div>
                <span className="dealer-login-span-input">Venue name</span>
                <input
                  type="text"
                  className="dealer-login-input-field"
                  id="update-venue-name"
                  placeholder="Enter venue name"
                  defaultValue={location && location.state && location.state.venueName}
                  required
                ></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Venue location</span>
                <input
                  type="text"
                  className="dealer-login-input-field"
                  id="update-venue-location"
                  placeholder="Enter venue location"
                  defaultValue={location && location.state && location.state.venueLocation}
                  required
                ></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Capacity</span>
                <input
                  type="number"
                  className="dealer-login-input-field"
                  id="update-venue-capacity"
                  placeholder="Enter capacity in numbers"
                  defaultValue={location && location.state && location.state.capacity}
                  required
                ></input>
              </div>
            </div>
            <div className="dealer-registration-input-row">
              <div>
                <span className="dealer-login-span-input">
                  Amenities Available
                </span>
                {/* <input type="text" className="dealer-login-input-field" placeholder='Enter username' required></input> */}
                <div>
                  <div className="venue-registration-input-checkbox">
                    <input type="checkbox" name="banquet" id="update-venue-banquet" value="Banquet" defaultChecked={location && location.state && location.state.banquet}></input>
                    <span className="venue-registration-input-checkbox-label">
                      Banquet
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox">
                    <input type="checkbox" name="dining" id="update-venue-dining" value="Dining" defaultChecked={location && location.state && location.state.dining}></input>
                    <span className="venue-registration-input-checkbox-label">
                      Dining
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox">
                    <input type="checkbox" id="update-venue-parking" value="Parking" defaultChecked={location && location.state && location.state.parking}></input>
                    <span className="venue-registration-input-checkbox-label">
                      Parking
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="dealer-login-span-input">Password</span>
                <input
                  type="password"
                  className="dealer-login-input-field"
                  id="update-venue-password"
                  placeholder="Enter password"
                  required
                ></input>
              </div>
            </div>
            <div className="dealer-registration-input-row">
              <button className="btn btn-outline-light btn-lg dealer-login-button">
                Update Details
              </button>
              <button className="btn btn-outline-light btn-lg dealer-login-button" onClick={deleteVenue}>
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

UpdateVenueComponent.defaultProps = {
  "venueId": -1,
  "venueName": "DefaultValue",
  "venueLocation": "DefaultValue",
  "capacity": -1,
  "banquet": false,
  "dining": false,
  "parking": false,
  "dealerId": -1
}

export default UpdateVenueComponent;
