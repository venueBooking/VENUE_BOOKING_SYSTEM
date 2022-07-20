import React from "react";

export const UpdateDealerComponent = () => {
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="dealer-update-span-header">Edit Profile</span>

            <div id="survey1">
              <div className="reg-form">
                <span className="dealer-update-span-input">First Name</span>
                <input
                  type="text"
                  className="dealer-update-input-field"
                  placeholder="Enter firstname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-update-span-input">Last Name</span>
                <input
                  type="text"
                  className="dealer-update-input-field"
                  placeholder="Enter lastname"
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-update-span-input">Date of Birth</span>
                <input
                  type="date"
                  className="dealer-update-input-field"
                  placeholder="Enter DOB"
                ></input>
              </div>
            </div>

            <div id="survey2">
              <div>
                <span className="dealer-update-span-input">Password</span>
                <input
                  type="password"
                  className="dealer-update-input-field"
                  placeholder="Enter password"
                ></input>
              </div>
            </div>

            <div className="dealer-update-input">
              <button className="btn btn-outline-light btn-lg dealer-update-button">
                Save
              </button>
              <button className="btn btn-outline-light btn-lg dealer-update-button">
                Delete Profile
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Dealer Update Component</div> */}
    </>
  );
};
