import React from "react";

export const DealerRegistrationComponent = () => {
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="dealer-register-span-header">
              Dealer Registration
            </span>

            <div id="reg-row-1">
              <div className="reg-form">
                <span className="dealer-register-span-input">First Name</span>
                <input
                  type="text"
                  className="customer-register-input-field"
                  placeholder="Enter firstname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-register-span-input">Last Name</span>
                <input
                  type="text"
                  className="dealer-register-input-field"
                  placeholder="Enter lastname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-register-span-input">
                  Date of Birth
                </span>
                <input
                  type="date"
                  className="dealer-register-input-field"
                  placeholder="Enter DOB"
                ></input>
              </div>
            </div>

            <div id="reg-row-2">
              <div className="reg-form">
                <span className="dealer-register-span-input">Username</span>
                <input
                  type="text"
                  className="dealer-register-input-field"
                  placeholder="Enter username"
                ></input>
              </div>
              <div>
                <span className="dealer-register-span-input">Password</span>
                <input
                  type="password"
                  className="dealer-register-input-field"
                  placeholder="Enter password"
                ></input>
              </div>
              <div>
                <span className="dealer-register-span-input">
                  Confirm Password
                </span>
                <input
                  type="password"
                  className="dealer-register-input-field"
                  placeholder="Re-enter password"
                ></input>
              </div>
            </div>

            <div className="dealer-register-input">
              <button className="btn btn-outline-light btn-lg dealer-register-button">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Dealer Register Component</div> */}
    </>
  );
};
