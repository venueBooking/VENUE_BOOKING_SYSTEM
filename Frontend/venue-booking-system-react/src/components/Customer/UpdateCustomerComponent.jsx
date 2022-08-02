import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import customerContext from "../../contexts/customerContext";
import CustomerService from "../../Services/CustomerService";

export const UpdateCustomerComponent = () => {

  const customerC = useContext(customerContext)
  const headerC = useContext(headerContext)
  const navigate = useNavigate()

  async function startUpdate(event) {
    event.preventDefault()

    const newCustomer = {
      "customerId": customerC.state.customerId,
      "firstName": document.getElementById("customer-update-firstname").value,
      "lastName": document.getElementById("customer-update-lastname").value,
      "dob": document.getElementById("customer-update-dob").value,
      "balance": customerC.state.balance,
      "username": customerC.state.username,
      "password": customerC.state.password
    }

    console.log("start update customer --> ", newCustomer);

    if (newCustomer.password != document.getElementById("customer-update-password").value) {
      alert("Wrong Password!")
      return
    }

    var response = await CustomerService.updateCustomer(newCustomer, headerC.state.jwtToken)
    console.log("update response --> ", response);

    if (response != "") {
      alert("Account updated successfully")
      customerC.updateCustomer(
        newCustomer.customerId,
        newCustomer.firstName,
        newCustomer.lastName,
        newCustomer.dob,
        newCustomer.username,
        newCustomer.password,
        newCustomer.balance
      )
      headerC.updateUserType("customer",newCustomer.firstName)
    }
    else {
      alert("Failed to create account")
    }
  }

  async function startDelete(event) {
    event.preventDefault()
    
    var username = customerC.state.username

    if (customerC.state.password != document.getElementById("customer-update-password").value) {
      alert("Wrong Password!")
      return
    }

    var response = await CustomerService.deleteCustomer(username, headerC.state.jwtToken)
    console.log("update response --> ", response);

    if (response != "") {
      alert("Account deleted successfully")
      headerC.updateLogin("none")
      headerC.updateDisplayAttribute("none")
      headerC.updateUserType("none","Login")
      customerC.logoutCustomer()
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
            <span className="dealer-update-span-header">Edit Profile</span>

            <div className='dealer-registration-input-row'>
              <div className="reg-form">
                <span className="dealer-update-span-input">First Name</span>
                <input
                  type="text"
                  id="customer-update-firstname"
                  className="dealer-update-input-field"
                  placeholder="Enter firstname"
                  defaultValue={customerC.state.firstName}
                ></input>
              </div>
              <div className="reg-form">
                <span className="dealer-update-span-input">Last Name</span>
                <input
                  type="text"
                  id="customer-update-lastname"
                  className="dealer-update-input-field"
                  placeholder="Enter lastname"
                  defaultValue={customerC.state.lastName}
                ></input>
              </div>
            </div>

            <div className='dealer-registration-input-row'>
              <div className="reg-form">
                <span className="dealer-update-span-input">Date of Birth</span>
                <input
                  type="date"
                  id="customer-update-dob"
                  className="dealer-update-input-field"
                  placeholder="Enter DOB"
                  defaultValue={customerC.state.dob}
                  style={{ paddingRight: "1vw" }}
                ></input>
              </div>

              <div>
                <span className="dealer-update-span-input">Password</span>
                <input
                  type="password"
                  id="customer-update-password"
                  className="dealer-update-input-field"
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
      {/* <div>Customer Update Component</div> */}
    </>
  );
};
