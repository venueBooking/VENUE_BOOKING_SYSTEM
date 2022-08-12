import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../../contexts/headerContext'
import DealerService from '../../Services/DealerService'

export const DealerRegistrationComponent = () => {

    const navigate = useNavigate()
    const headerC = useContext(headerContext)

    useEffect(()=>{
        var date = new Date();
        date.setFullYear( date.getFullYear() - 18 );
        document.getElementById("dealer-registration-dob").max = date.toISOString().split("T")[0]
        headerC.updateDisplayAttribute("block")
    },[])

    async function startDealerRegistration(event){
        event.preventDefault()

        const newDealer = {
            "firstName": document.getElementById("dealer-registration-firstname").value,
            "lastName": document.getElementById("dealer-registration-lastname").value,
            "dob": document.getElementById("dealer-registration-dob").value,
            "username": document.getElementById("dealer-registration-username").value,
            "password": document.getElementById("dealer-registration-password").value
        }

        if (newDealer.password != document.getElementById("dealer-registration-confirm-password").value){
            alert("Passwords didn't match!")
            return
        }

        console.log(newDealer)

        var response = await DealerService.registerDealer(newDealer)
        
        if (response!=""){
            // console.log("start reg POST response --> ", response);
            alert("Account created successfully, login to continue")
            navigate("/dealerLogin")
        }
        else{
            alert("Failed to create account")
        }
    }

    return (
        <>
            <div className="app-background">
                <form onSubmit={startDealerRegistration}>
                    <div className="inner-box">
                        <span className="dealer-login-span-header">Dealer Registration</span>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">First name</span>
                                <input type="text" id="dealer-registration-firstname" className="dealer-login-input-field" placeholder='Enter first name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Last name</span>
                                <input type="text" id="dealer-registration-lastname" className="dealer-login-input-field" placeholder='Enter last name' required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Date of birth</span>
                                <input type="date"id="dealer-registration-dob" className="dealer-login-input-field" style={{paddingRight: "1vw"}} required></input>
                            </div>
                        </div>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">Username</span>
                                <input type="text" id="dealer-registration-username" className="dealer-login-input-field" placeholder='Enter username' pattern=".{5,}" title="Username should contain at least 5 characters" required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Password</span>
                                <input type="password" id="dealer-registration-password" className="dealer-login-input-field" placeholder='Enter password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,}$" title="Password must contain at least: 1 upper case alphabet, 1 lower case alphabet, 1 number between 0-9, 1 special character from [!,@,#,$,%,^,&,*,_,=,+,-]" required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Confirm password</span>
                                <input type="password" id="dealer-registration-confirm-password" className="dealer-login-input-field" placeholder='Re enter password' required></input>
                            </div>
                        </div>
                        <button className='btn btn-outline-light btn-lg dealer-login-button'>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
