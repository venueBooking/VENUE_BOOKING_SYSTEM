import React from "react";

export const AdminLoginComponent = () => {
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="login-span-header">Admin Login</span>
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
            </div>
          </div>
        </form>
      </div>
      {/* <div>Admin Login Component</div> */}
    </>
  );
};
