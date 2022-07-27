import React from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../../contexts/headerContext'


export const DealerLoginComponent = () => {

  const navigate = useNavigate(headerContext)

  function goToDealerRegistration(){
      navigate("/dealerRegistration")
  }
  
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="dealer-login-span-header">Dealer Login</span>
            <div>
              <span className="dealer-login-span-input">Username</span>
              <input type="text" className="dealer-login-input-field" placeholder='Enter username' required></input>
            </div>
            <div>
              <span className="dealer-login-span-input">Password</span>
              <input type="password" className="dealer-login-input-field" placeholder='Enter password' required></input>
            </div>
            <div className="dealer-login-input">
              <button className='btn btn-outline-light btn-lg dealer-login-button'>Login</button>
              <button className='btn btn-outline-light btn-lg dealer-login-button' onClick={goToDealerRegistration}>Register</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Dealer Login Component</div> */}
    </>
  )
}
