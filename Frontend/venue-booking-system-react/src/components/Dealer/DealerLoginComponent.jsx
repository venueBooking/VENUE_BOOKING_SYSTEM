import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import venueContext from "../../contexts/venueContext";
import DealerService from "../../Services/DealerService";
import VenueService from "../../Services/VenueService";

export const DealerLoginComponent = () => {
  const navigate = useNavigate(headerContext);
  const userC = useContext(userContext);
  const venueC = useContext(venueContext);
  const headerC = useContext(headerContext);

  function goToDealerRegistration() {
    navigate("/dealerRegistration");
  }

  async function startDealerLogin(event) {
    event.preventDefault();
    let response;
    let dealer;
    let venue;

    const credentials = {
      username: document.getElementById("dealer-login-username").value,
      password: document.getElementById("dealer-login-password").value,
    };

    response = await DealerService.getToken(credentials);
    // console.log("JWT token --> ", response.data);
    headerC.updateJwtToken(response.data);
    // console.log("header context jwtToken --> ", headerC.state.jwtToken);
    dealer = await DealerService.getDealerData(response.data);
    // console.log("dealer --> ", dealer.data);

    userC.updateUser(
      dealer.data.dealerId,
      dealer.data.firstName,
      dealer.data.lastName,
      dealer.data.dob,
      dealer.data.username,
      credentials.password,
      dealer.data.balance
    );

    // response = await VenueService.getToken(credentials);
    // console.log("JWT token --> ", response.data);
    // headerC.updateJwtToken(response.data);
    // console.log("header context jwtToken --> ", headerC.state.jwtToken);
    venue = await VenueService.getVenueData(response.data);
    // console.log("venue --> ", venue.data);

    venueC.updateVenue(venue.data);

    headerC.updateLogin("block");
    headerC.updateUserType("dealer");

    navigate("/viewVenueStatus");
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={startDealerLogin}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Dealer Login</span>
            <div>
              <span className="dealer-login-span-input">Username</span>
              <input
                type="text"
                className="dealer-login-input-field"
                id="dealer-login-username"
                placeholder="Enter username"
                required
              ></input>
            </div>
            <div>
              <span className="dealer-login-span-input">Password</span>
              <input
                type="password"
                className="dealer-login-input-field"
                id="dealer-login-password"
                placeholder="Enter password"
                required
              ></input>
            </div>
            <div className="dealer-login-input">
              <button className="btn btn-outline-light btn-lg dealer-login-button">
                Login
              </button>
              <button
                className="btn btn-outline-light btn-lg dealer-login-button"
                onClick={goToDealerRegistration}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Dealer Login Component</div> */}
    </>
  );
};
