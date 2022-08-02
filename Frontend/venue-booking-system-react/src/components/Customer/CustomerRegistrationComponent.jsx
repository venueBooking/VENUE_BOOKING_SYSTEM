import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../../Services/CustomerService'

export const CustomerRegistrationComponent = () => {

    const navigate = useNavigate()

    async function startCustomerRegistration(event){
        event.preventDefault()

        const newCustomer = {
            "firstName": document.getElementById("customer-registration-firstname").value,
            "lastName": document.getElementById("customer-registration-lastname").value,
            "dob": document.getElementById("customer-registration-dob").value,
            "username": document.getElementById("customer-registration-username").value,
            "password": document.getElementById("customer-registration-password").value
        }

        if (newCustomer.password != document.getElementById("customer-registration-confirm-password").value){
            alert("Passwords didn't match!")
            return
        }

        console.log(newCustomer)

        var response = await CustomerService.registerCustomer(newCustomer)
        
        if (response!=""){
            // console.log("start reg POST response --> ", response);
            alert("Account created successfully, login to continue")
            navigate("/customerLogin")
        }
        else{
            alert("Failed to create account")
        }
    }

    return (
        <>
            <div className="app-background">
                <form onSubmit={startCustomerRegistration}>
                    <div className="inner-box">
                        <span className="dealer-login-span-header">Customer Registration</span>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">First name</span>
                                <input type="text" id="customer-registration-firstname" className="dealer-login-input-field" placeholder='Enter first name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Last name</span>
                                <input type="text" id="customer-registration-lastname" className="dealer-login-input-field" placeholder='Enter last name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Date of birth</span>
                                <input type="date"id="customer-registration-dob" className="dealer-login-input-field" style={{paddingRight: "1vw"}} required></input>
                            </div>
                        </div>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">Username</span>
                                <input type="text" id="customer-registration-username" className="dealer-login-input-field" placeholder='Enter username' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Password</span>
                                <input type="password" id="customer-registration-password" className="dealer-login-input-field" placeholder='Enter password' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Confirm password</span>
                                <input type="password" id="customer-registration-confirm-password" className="dealer-login-input-field" placeholder='Re enter password' required></input>
                            </div>
                        </div>
                        <button className='btn btn-outline-light btn-lg dealer-login-button'>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
