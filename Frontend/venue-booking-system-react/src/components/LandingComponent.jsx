import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import headerContext from '../contexts/headerContext';

export const LandingComponent = () => {

  const headerC = useContext(headerContext)
  const navigate = useNavigate();

  function goToDealerLogin() {
    headerC.updateDisplayAttribute("block")
    navigate("/dealerLogin")
    // alert(headerC.state.userType)
  }

  function goToCustomerLogin() {
    headerC.updateDisplayAttribute("block")
    navigate("/customerLogin")

    // alert(headerC.state.userType)
  }

  return (
    <>
      <div className="landing-page-background">
      <span id="landing-page-app-header">Venue Booking System</span>
      <span id="landing-page-info-1">
        Book a venue to celebrate all of your special moments. Anytime. Anywhere. Hassle Free.
      </span>
      <span id="landing-page-info-2">
      Explore a wide range of venues at your nearest location from verified distributors.
      </span>
      <button className='btn btn-outline-light' id="landing-page-dealer-login" onClick={goToDealerLogin}>For Dealers</button>
      <button className='btn btn-outline-light' id="landing-page-customer-login" onClick={goToCustomerLogin}>Get Started</button>
      </div>
    </>
  )
}
