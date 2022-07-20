import React from "react";

export const CustomerLoginComponent = () => {
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="login-span-header">
              Welcome Back, login to continue
            </span>
            <div>
              <span className="login-span-input">Username</span>
              <input
                type="text"
                className="login-input-field"
                placeholder="Enter username"
              ></input>
            </div>
            <div>
              <span className="login-span-input">Password</span>
              <input
                type="password"
                className="login-input-field"
                placeholder="Enter password"
              ></input>
            </div>
            <div className="login-input">
              <button className="btn btn-outline-light btn-lg login-button">
                Login
              </button>
              <button className="btn btn-outline-light btn-lg login-button">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Customer Login Component</div> */}
    </>
  );
};
