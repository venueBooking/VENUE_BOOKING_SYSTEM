import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../../contexts/headerContext'
import userContext from '../../contexts/userContext'
import CustomerService from '../../Services/CustomerService'

export const CustomerLoginComponent = () => {

  const navigate = useNavigate()
  const userC = useContext(userContext)
  const headerC = useContext(headerContext)

  useEffect(()=>{
    if (headerC.state.userType === "admin")
    navigate("/viewUser")
    else if (headerC.state.userType === "customer")
    navigate("/searchVenue")
    else if (headerC.state.userType === "dealer")
    navigate("/viewVenueStatus")
    headerC.updateDisplayAttribute("block")
  },[])

  function goToCustomerRegistration() {
    navigate("/customerRegistration")
  }

  async function startCustomerLogin(event) {
    event.preventDefault();
    var response
    var customer

    const credentials = {
      "username": document.getElementById("customer-login-username").value,
      "password": document.getElementById("customer-login-password").value
    }

   
    response = await CustomerService.getToken(credentials)
    // console.log("JWT token --> ", response);
    headerC.updateJwtToken(response.data)

    // console.log("header context jwtToken --> ", headerC.state.jwtToken);
    if (response != "") {
      customer = await CustomerService.getCustomerData(response.data)
      // console.log("customer --> ", customer.data);

      userC.updateUser(
        customer.data.customerId,
        customer.data.firstName,
        customer.data.lastName,
        customer.data.dob,
        customer.data.username,
        credentials.password,
        customer.data.balance
      )

      headerC.updateLogin("block")
      headerC.updateUserType("customer")
      navigate("/searchVenue")
    }
    else {
      alert("Bad Credentials")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={startCustomerLogin}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Welcome Back! Login to continue</span>
            <div>
              <span className="dealer-login-span-input">Username</span>
              <input type="text" className="dealer-login-input-field" id="customer-login-username" placeholder='Enter username' required></input>
            </div>
            <div>
              <span className="dealer-login-span-input">Password</span>
              <input type="password" className="dealer-login-input-field" id="customer-login-password" placeholder='Enter password' required></input>
            </div>
            <div className="dealer-login-input">
              <button className='btn btn-outline-light btn-lg dealer-login-button'>Login</button>
              <button className='btn btn-outline-light btn-lg dealer-login-button' onClick={goToCustomerRegistration}>Register</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Customer Login Component</div> */}
    </>
  )
}
