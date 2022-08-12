import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../contexts/headerContext'
import userContext from '../contexts/userContext'
import DealerService from '../Services/DealerService'
import CustomerService from '../Services/CustomerService'

export const HeaderComponent = () => {

  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const navigate = useNavigate()

  function goToHome() {

    if (headerC.state.userType === "none"){
      headerC.updateDisplayAttribute("none")
      navigate("/")
    }
    else if (headerC.state.userType === "dealer"){
      navigate("/viewVenueStatus")
    }
    else if (headerC.state.userType === "customer"){
      navigate("/searchVenue")
    }
    else if (headerC.state.userType === "admin"){
      navigate("/viewUser")
    }
  }

  function goToUpdateProfile() {

    if (headerC.state.userType === "dealer"){
      navigate("/updateDealer")
    }
    else if (headerC.state.userType === "customer"){
      navigate("/updateCustomer")
    }
    
  }

  async function refreshBalance() {

    var response

    if (headerC.state.userType === "dealer"){
      response = await DealerService.getDealerData(headerC.state.jwtToken)
    }
    else if (headerC.state.userType === "customer"){
      response = await CustomerService.getCustomerData(headerC.state.jwtToken)
    }

    // console.log("when refreshing balance      ",response);

    userC.updateUser(
      userC.state.userId,
      userC.state.firstName,
      userC.state.lastName,
      userC.state.dob,
      userC.state.username,
      userC.state.password,
      response.data.balance,
    )

  }

  function commitLogout() {
    // console.log("logout status --> ",headerC.state.logoutDisplayAttribute);
    headerC.updateLogin("none")
    headerC.updateDisplayAttribute("none")
    headerC.updateUserType("none")
    userC.logoutUser()
    navigate("/")
  }

  return (
    <>
      <div className="headerContainer" style={{ display: headerC.state.displayAttribute }}>

        <nav className="navbar navbar-expand-lg navbar-dark" id="bootstrap-navbar">
          <span className="navbar-brand" onClick={goToHome}>Venue Booking System</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active" style={{ display: headerC.state.logoutDisplayAttribute }}>
                <span className="header-item" onClick={goToUpdateProfile}>{userC.state.firstName}</span>
              </li>
              <li className="nav-item active" style={{ display: headerC.state.userType != "admin"? headerC.state.logoutDisplayAttribute : "none" }}>
                <span className="header-item" onClick={refreshBalance}>Balance: {userC.state.balance}</span>
              </li>
              <li className="nav-item active" style={{ display: headerC.state.logoutDisplayAttribute }}>
                <span className="header-item" onClick={commitLogout}>Logout</span>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </>
  )
}
