// US-08

import { Autocomplete } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import Design from "../../Design";
import VenueService from "../../Services/VenueService";

function SearchVenueComponent() {
  const navigate = useNavigate();
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const [paymentRequest,setPaymentRequest] = useState({})

  const [tableData, updateTableData] = useState([])

  var i = 1
  const tableItems = tableData.length != 0? tableData.map((item) =>
    <tr key={i++} onClick={goToBookVenue.bind(null, i)}>
      <td>{item.venueId}</td>
      <td>{item.venueName}</td>
      <td>{item.venueLocation}</td>
    </tr>
  ) : <tr style={{ height: "50vh" }}><td colSpan={3}>No Venues Found</td></tr>

  useEffect(()=>{
    if (headerC.state.userType !== "customer")
    navigate("/customerLogin")

    loadRequests().then((res)=>{
      if (res != ""){
        // console.log("found acceped requests     ",res);
        setPaymentRequest(res)
      }
      // else
      // console.log("acceped requests not found");
    })
  },[])

  const loadRequests = async () => {
    var response = await VenueService.getPaymentRequest(headerC.state.jwtToken, userC.state.userId)
    // console.log(response.data)
    return response.data
  }

  const loadVenues = async (jwt, customerId, location) => {
    var response = await VenueService.getVenuesByLocation(jwt, customerId, location)
    // console.log(response.data)
    return response.data
  }

  function goToBookVenue(res) {
    // alert(res)
    if (Object.keys(paymentRequest).length === 0)
    navigate("/bookVenue",{ state: tableData[res-1] });
    else
    alert("You have a pending payment request! Please address it by clicking the round red button")
  }

  function getVenues(event) {
    event.preventDefault()
    var location = document.getElementById("search-venue-location").value
    // alert(location)
    // axios request to fetch venues based on location and store the response json array
    // inside tableData
    // console.log("Before feching  ", headerC.state.jwtToken, userC.state.userId, location);
    loadVenues(headerC.state.jwtToken, userC.state.userId, location).then((res) => {
      // console.log("res ", res);
      updateTableData(res)
    })
    // var response = [
    //   {
    //     "venueId": 4,
    //     "venueName": "venue1",
    //     "venueLocation": location,
    //     "capacity": 1000,
    //     "banquet": false,
    //     "dining": true,
    //     "parking": true,
    //     "dealerId": 1
    //   },
    //   {
    //     "venueId": 7,
    //     "venueName": "venue2",
    //     "venueLocation": location,
    //     "capacity": 1000,
    //     "banquet": false,
    //     "dining": true,
    //     "parking": true,
    //     "dealerId": 1
    //   },
    //   {
    //     "venueId": 8,
    //     "venueName": "venue3",
    //     "venueLocation": location,
    //     "capacity": 1000,
    //     "banquet": false,
    //     "dining": true,
    //     "parking": true,
    //     "dealerId": 1
    //   }
    // ]
    // updateTableData(response)
  }

  function goToConfirmPayment() {
    // console.log("sending this to confirm     ",paymentRequest);
    navigate("/confirmPayment",{ state: paymentRequest })
  }

  return (
    <>
      <div className="app-background">
        <div className="top-down-inner-box">
          <div className="above-content-input-row">
            <div>
              <input style={{ visibility: "hidden" }} type="text" className="search-venue-input-field"></input>
              <button style={{ visibility: "hidden" }} className="search-venue-submit">➔</button>
              <div className="notification-button" style={{ visibility: Object.keys(paymentRequest).length === 0? "hidden": "visible"}} onClick={goToConfirmPayment}>1</div>
            </div>
            <span className="dealer-login-span-header">Search Venues</span>
            <div>
              <form onSubmit={getVenues}>
                <input type="text" className="search-venue-input-field" id="search-venue-location" placeholder='Enter a city name' required></input>
                <button className="search-venue-submit">➔</button>
              </form>
            </div>
          </div>

          <div className="scrollable-table-div">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Venue ID</th>
                  <th>Venue Name</th>
                  <th>Venue Location</th>
                </tr>
              </thead>
              <tbody>
                {tableItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchVenueComponent;
