import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerContext from '../contexts/headerContext'

export const HeaderComponent = () => {

  const headerC = useContext(headerContext)
  const navigate = useNavigate()
  const [alt, setAlt] = useState(0)

  function goToHome() {
    const userType = headerC.state.userType

    if (userType === "none"){
      headerC.updateDisplayAttribute("none")
      navigate("/")
    }
  }

  function changeUserType() {
    if (alt % 4 === 0){
      headerC.updateUserType("dealer")
      setAlt(alt+1)
    }
    else if (alt % 4 === 1){
      headerC.updateUserType("customer")
      setAlt(alt+1)
    }
    else if (alt % 4 === 2){
      headerC.updateUserType("admin")
      setAlt(alt+1)
    }
    else if (alt % 4 === 3){
      headerC.updateUserType("none")
      setAlt(alt+1)
    }
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
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
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={changeUserType}>{headerC.state.userType}</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </>
  )
}
