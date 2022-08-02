import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../contexts/headerContext'
import customerContext from '../contexts/customerContext'
import userContext from '../contexts/userContext'

export const HeaderComponent = () => {

  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const customerC = useContext(customerContext)
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
      navigate("/viewUsers")
    }
  }

  function goToUpdateProfile() {
    if (headerC.state.userType === "dealer"){
      navigate("/updateDealer")
    }
    else if (headerC.state.userType === "customer"){
      console.log(customerC.state);
      navigate("/updateCustomer")
    }
    
  }

  function commitLogout() {
    // console.log("logout status --> ",headerC.state.logoutDisplayAttribute);
    if (headerC.state.userType === "dealer"){
      userC.logoutUser()
    }
    else if (headerC.state.userType === "customer"){
      customerC.logoutCustomer()
    }
    headerC.updateLogin("none")
    headerC.updateDisplayAttribute("none")
    headerC.updateUserType("none")
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
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
              <li className="nav-item active" style={{ display: headerC.state.logoutDisplayAttribute }}>
                <span className="header-item" onClick={commitLogout}>Logout</span>
              </li>
              <li className="nav-item active" style={{ display: headerC.state.logoutDisplayAttribute }}>
                <span className="header-item" onClick={goToUpdateProfile}>{headerC.state.displayName}</span>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </>
  )
}
