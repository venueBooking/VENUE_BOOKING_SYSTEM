import React from 'react'

export const DealerLoginComponent = () => {
  return (
    <>
      <div className="app-background">
        <form>
          <div className="inner-box">
            <span className="dealer-login-span-header">Dealer Login</span>
            <div>
              <span className="dealer-login-span-input">Username</span>
              <input type="text" className="dealer-login-input-field" placeholder='Enter username'></input>
            </div>
            <div>
              <span className="dealer-login-span-input">Password</span>
              <input type="password" className="dealer-login-input-field" placeholder='Enter password'></input>
            </div>
            <div className="dealer-login-input">
              <button className='btn btn-outline-light btn-lg dealer-login-button'>Login</button>
              <button className='btn btn-outline-light btn-lg dealer-login-button'>Register</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Dealer Login Component</div> */}
    </>
  )
}
