import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import DealerService from "../../Services/DealerService";

export const UpdateDealerComponent = () => {

  const userC = useContext(userContext)
  const headerC = useContext(headerContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")
  },[])

  async function startUpdate(event) {
    event.preventDefault()

    const newDealer = {
      "dealerId": userC.state.userId,
      "firstName": document.getElementById("dealer-update-firstname").value,
      "lastName": document.getElementById("dealer-update-lastname").value,
      "dob": document.getElementById("dealer-update-dob").value,
      "balance": document.getElementById("dealer-update-balance").value,
      "username": userC.state.username,
      "password": userC.state.password
    }

    // console.log("start update dealer --> ", newDealer);

    if (newDealer.password != document.getElementById("dealer-update-password").value) {
      alert("Wrong Password!")
      document.getElementById("dealer-update-password").value=""
      return
    }

    var response = await DealerService.updateDealer(newDealer, headerC.state.jwtToken)
    // console.log("update response --> ", response);

    if (response != "") {
      alert("Account updated successfully")
      userC.updateUser(
        newDealer.dealerId,
        newDealer.firstName,
        newDealer.lastName,
        newDealer.dob,
        newDealer.username,
        newDealer.password,
        newDealer.balance
      )
      document.getElementById("dealer-update-password").value=""
    }
    else {
      alert("Failed to update dealer")
    }
  }

  async function startDelete(event) {
    event.preventDefault()
    
    var username = userC.state.username

    if (userC.state.password != document.getElementById("dealer-update-password").value) {
      alert("Wrong Password!")
      document.getElementById("dealer-update-password").value=""
      return
    }

    var response = await DealerService.deleteDealer(username, headerC.state.jwtToken)
    // console.log("update response --> ", response);

    if (response != "") {
      alert("Account deleted successfully")
      headerC.updateLogin("none")
      headerC.updateDisplayAttribute("none")
      headerC.updateUserType("none")
      userC.logoutUser()
      navigate("/")
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
            <span className="dealer-login-span-header">Edit Profile</span>

            <div className='dealer-registration-input-row'>
              <div className="reg-form">
                <span className="dealer-update-span-input">First Name</span>
                <input
                  type="text"
                  id="dealer-update-firstname"
                  className="dealer-login-input-field"
                  placeholder="Enter firstname"
                  defaultValue={userC.state.firstName}
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-update-span-input">Last Name</span>
                <input
                  type="text"
                  id="dealer-update-lastname"
                  className="dealer-login-input-field"
                  placeholder="Enter lastname"
                  defaultValue={userC.state.lastName}
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-update-span-input">Balance</span>
                <input
                  type="number"
                  id="dealer-update-balance"
                  className="dealer-login-input-field"
                  placeholder="Amount"
                  min={userC.state.balance}
                  defaultValue={userC.state.balance}
                ></input>
              </div>
            </div>

            <div className='dealer-registration-input-row'>
              <div className="reg-form">
                <span className="dealer-update-span-input">Date of Birth</span>
                <input
                  type="date"
                  id="dealer-update-dob"
                  className="dealer-login-input-field"
                  placeholder="Enter DOB"
                  defaultValue={userC.state.dob}
                  style={{ paddingRight: "1vw" }}
                ></input>
              </div>

              <div>
                <span className="dealer-update-span-input">Password</span>
                <input
                  type="password"
                  id="dealer-update-password"
                  className="dealer-login-input-field"
                  placeholder="Enter password"
                  style={{ paddingRight: "1vw" }}
                  required
                ></input>
              </div>
            </div>

            <div className="dealer-update-input">
              <button className="btn btn-outline-light btn-lg dealer-login-button">
                Save
              </button>
              <button className="btn btn-outline-light btn-lg dealer-login-button" onClick={startDelete}>
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
