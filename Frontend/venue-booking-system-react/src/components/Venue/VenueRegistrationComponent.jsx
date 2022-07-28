import React from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";

export const VenueRegistrationComponent = () => {
  const navigate = useNavigate(headerContext);
  function goToViewVenueStatus() {
    navigate("/viewVenueStatus");
  }
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="dealer-login-span-header">Venue Registration</span>
            <div className="dealer-registration-input-row">
              <div>
                <span className="dealer-login-span-input">Venue name</span>
                <input
                  type="text"
                  className="dealer-login-input-field"
                  placeholder="Enter venue name"
                  required
                ></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Venue location</span>
                <input
                  type="text"
                  className="dealer-login-input-field"
                  placeholder="Enter venue location"
                  required
                ></input>
              </div>
              <div>
                <span className="dealer-login-span-input">Capacity</span>
                <input
                  type="number"
                  className="dealer-login-input-field"
                  placeholder="Enter capacity in numbers"
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
                    <input
                      type="checkbox"
                      name="banquet"
                      value="Banquet"
                    ></input>
                    <span className="venue-registration-input-checkbox-label">
                      Banquet
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox">
                    <input type="checkbox" name="dining" value="Dining"></input>
                    <span className="venue-registration-input-checkbox-label">
                      Dining
                    </span>
                  </div>
                  <div className="venue-registration-input-checkbox">
                    <input type="checkbox" value="Parking"></input>
                    <span className="venue-registration-input-checkbox-label">
                      Parking
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline-light btn-lg dealer-login-button"
              onClick={goToViewVenueStatus}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
