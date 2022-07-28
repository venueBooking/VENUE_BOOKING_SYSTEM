import React from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";

export const CustomerRegistrationComponent = () => {
  const navigate = useNavigate(headerContext);
  function goToCustLogin() {
    navigate("/customerLogin");
  }
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="customer-register-span-header">
              Customer Registration
            </span>

            <div id="reg-row-1">
              <div className="reg-form">
                <span className="customer-register-span-input">First Name</span>
                <input
                  type="text"
                  className="customer-register-input-field"
                  placeholder="Enter firstname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="customer-register-span-input">Last Name</span>
                <input
                  type="text"
                  className="customer-register-input-field"
                  placeholder="Enter lastname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="customer-register-span-input">
                  Date of Birth
                </span>
                <input
                  type="date"
                  className="customer-register-input-field"
                  placeholder="Enter DOB"
                ></input>
              </div>
            </div>

            <div id="reg-row-2">
              <div className="reg-form">
                <span className="customer-register-span-input">Username</span>
                <input
                  type="text"
                  className="customer-register-input-field"
                  placeholder="Enter username"
                ></input>
              </div>
              <div>
                <span className="customer-register-span-input">Password</span>
                <input
                  type="password"
                  className="customer-register-input-field"
                  placeholder="Enter password"
                ></input>
              </div>
              <div>
                <span className="customer-register-span-input">
                  Confirm Password
                </span>
                <input
                  type="password"
                  className="customer-register-input-field"
                  placeholder="Re-enter password"
                ></input>
              </div>
            </div>

            <div className="customer-register-input">
              <button
                className="btn btn-outline-light btn-lg customer-register-button"
                onClick={goToCustLogin}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Customer Register Component</div> */}
    </>
  );
};
