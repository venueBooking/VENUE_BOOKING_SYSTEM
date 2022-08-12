// US-06

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import VenueService from "../../Services/VenueService";
import userContext from "../../contexts/userContext";

function ViewVenueStatusComponent() {
  const navigate = useNavigate();
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)

  const [tableData, updateTableData] = useState(
    [
      // {
      //   "venueId": 4,
      //   "venueName": "venue1",
      //   "venueLocation": "location1",
      //   "capacity": 1000,
      //   "banquet": false,
      //   "dining": true,
      //   "parking": true,
      //   "dealerId": 1
      // },
      // {
      //   "venueId": 7,
      //   "venueName": "venue2",
      //   "venueLocation": "location1",
      //   "capacity": 1000,
      //   "banquet": false,
      //   "dining": true,
      //   "parking": true,
      //   "dealerId": 1
      // },
      // {
      //   "venueId": 8,
      //   "venueName": "venue3",
      //   "venueLocation": "location2",
      //   "capacity": 1000,
      //   "banquet": false,
      //   "dining": true,
      //   "parking": true,
      //   "dealerId": 1
      // }
    ]
  )

  var i = 1
  const tableItems = tableData.length != 0? tableData.map((item) =>
    <tr key={i++} onClick={goToManageVenue.bind(null, i)}>
      <td>{item.venueId}</td>
      <td>{item.venueName}</td>
      <td>{item.venueLocation}</td>
    </tr>
  ) : <tr style={{ height: "50vh" }}><td colSpan={3}>No Venues Found</td></tr>

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")

    const loadVenues = async () => {
      var response = await VenueService.getVenues(headerC.state.jwtToken, userC.state.userId)
      // console.log(response.data)
      return response.data
    }
    loadVenues().then((res) => {
      // console.log("res ",res);
      updateTableData(res)
    })
  },[])

  function goToAddVenue() {
    navigate("/venueRegistration");
  }

  function goToManageVenue(res) {
    // console.log("Venue that will be managed  ",tableData[res-1]);
    navigate("/manageVenueRequests",{ state: tableData[res-1] });
  }

  return (
    <>
      <div className="app-background">
        <div className="top-down-inner-box">
          <div className="above-content-input-row">
            <button style={{ visibility: "hidden" }} className='btn btn-outline-light btn-lg dealer-login-button'>Add Venue</button>
            <span className="dealer-login-span-header">Manage Your Venues</span>
            <button className='btn btn-outline-light btn-lg dealer-login-button' onClick={goToAddVenue}>Add Venue</button>
          </div>

          <div className="scrollable-table-div">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Venue ID</th>
                  <th>Venue Name</th>
                  <th>Venue Location</th>
                  {/* <th>Booking Request</th> */}
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

export default ViewVenueStatusComponent;