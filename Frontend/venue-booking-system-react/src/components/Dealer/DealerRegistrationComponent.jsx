import React from 'react'

export const DealerRegistrationComponent = () => {
    return (
        <>
            <div className="app-background">
                <form>
                    <div className="inner-box">
                        <span className="dealer-login-span-header">Dealer Registration</span>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">First name</span>
                                <input type="text" className="dealer-login-input-field" placeholder='Enter first name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Last name</span>
                                <input type="text" className="dealer-login-input-field" placeholder='Enter last name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Date of birth</span>
                                <input type="date" className="dealer-login-input-field" style={{paddingRight: "1vw"}} required></input>
                            </div>
                        </div>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">Username</span>
                                <input type="text" className="dealer-login-input-field" placeholder='Enter username' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Password</span>
                                <input type="password" className="dealer-login-input-field" placeholder='Enter password' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Confirm password</span>
                                <input type="password" className="dealer-login-input-field" placeholder='Re enter password' required></input>
                            </div>
                        </div>
                        <button className='btn btn-outline-light btn-lg dealer-login-button'>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
