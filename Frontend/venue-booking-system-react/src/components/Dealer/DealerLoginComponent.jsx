import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import DealerService from "../../Services/DealerService";

export const DealerLoginComponent = () => {
  const navigate = useNavigate(headerContext);
  const userC = useContext(userContext);
  const headerC = useContext(headerContext);

  function goToDealerRegistration() {
    navigate("/dealerRegistration");
  }
  function goToViewVenueStatus() {
    navigate("/viewVenueStatus");
  }
};

async function startDealerLogin(event) {
  event.preventDefault();
  var response;
  var dealer;

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
    dealer.data.password
  );

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
            <button
              className="btn btn-outline-light btn-lg dealer-login-button"
              onClick={goToViewVenueStatus}
            >
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
