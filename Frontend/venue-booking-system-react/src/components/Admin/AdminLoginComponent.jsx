import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import AdminService from "../../Services/AdminService";

export const AdminLoginComponent = () => {
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    if (headerC.state.userType === "admin")
    navigate("/viewUser")
    else if (headerC.state.userType === "customer")
    navigate("/searchVenue")
    else if (headerC.state.userType === "dealer")
    navigate("/viewVenueStatus")
    headerC.updateDisplayAttribute("block")
  },[])

  function goToManageVenueReq() {
    navigate("/manageVenueRequests");
  }

  async function startAdminLogin(event) {
    event.preventDefault()

    const credentials = {
      "username": document.getElementById("admin-login-username").value,
      "password": document.getElementById("admin-login-password").value
    }

    var response = await AdminService.getToken(credentials)

    if (response !== ""){
      userC.updateUser(
        -1,
        "admin",
        "none",
        "none",
        "none",
        "none",
        0
      )
      headerC.updateUserType("admin")
      headerC.updateLogin("block")
      navigate("/viewUser")
    }
    else{
      alert("Bad Credentials")
    }
  }

  return (
    <>
      <div className="app-background">
        <form onSubmit={startAdminLogin}>
          <div className="inner-box">
            <span className="dealer-login-span-header">Admin Login</span>
            <div>
              <span className="dealer-login-span-input">Username</span>
              <input type="text" className="dealer-login-input-field" id="admin-login-username" placeholder='Enter username' required></input>
            </div>
            <div>
              <span className="dealer-login-span-input">Password</span>
              <input type="password" className="dealer-login-input-field" id="admin-login-password" placeholder='Enter password' required></input>
            </div>
            <button className='btn btn-outline-light btn-lg dealer-login-button'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
