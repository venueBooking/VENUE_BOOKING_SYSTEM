// US_??
import React, { useContext, useEffect, useState } from "react";
import Design from "../../Design";
import { useLocation, useNavigate } from 'react-router-dom';
import VenueService from "../../Services/VenueService";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";

function ManageVenueRequestsComponent() {
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingData,setBooking] = useState([])
  const [requestData,setRequest] = useState([])

  const [tableData, updateTableData] = useState(requestData)
  const [tableState, updateTableState] = useState("Requested")

  var i=1
  const tableItems = tableData.length != 0? tableData.map((item) =>
    <tr key={i++} onClick={goToRequestPayment.bind(null, i)}>
      <td>{item.bookingId}</td>
      <td>{item.customerFirstName+" "+item.customerLastName}</td>
      <td>{item.bookingStatus}</td>
      <td>{item.bookedFrom}</td>
      <td>{item.bookedTo}</td>
    </tr>
  ) : <tr style={{ height: "50vh" }}><td colSpan={5}>No Requests Found</td></tr>

  useEffect(()=>{
    if (headerC.state.userType !== "dealer")
    navigate("/dealerLogin")

    loadBookings().then((res) => {
      // console.log("res in manage venue     ",res);

      var bd = []
      var rd = []

      res.map((item) => {
        if (item.bookingStatus == "Booked" )
          bd.push(item)
        else{
          // if (item.bookingStatus == "Raised" )
          // item.bookingStatus = "Venue Requested"
          // else if (item.bookingStatus == "Accepted" )
          // item.bookingStatus = "Payment Requested" 
          rd.push(item)
        }
      })
      // console.log("useEffect: Data Inside bd    ",bookingData);
      // console.log("useEffect: Data Inside rd    ",requestData);
      setBooking(bd)
      setRequest(rd)
      // console.log("useEffect: Data Inside bookingData    ",bookingData);
      // console.log("useEffect: Data Inside requestData    ",requestData);
    })
  },[])

  useEffect(() => {
    updateTableData(requestData)
  },[requestData])

  const loadBookings = async () => {
    var response = await VenueService.getBookingByVenueId(headerC.state.jwtToken, userC.state.userId, location && location.state && location.state.venueId)
    // console.log(response.data)
    return response.data
  }

  function goToUpdateVenue() {
    // console.log("Venue to be updated   ",location.state);
    navigate("/updateVenue",{ state: location.state })
  }

  function goToRequestPayment(res) {
    // console.log("Going to request payment     ",tableData[res-1]);

    if (tableData[res-1].bookingStatus == "Booked")
    alert("This request has already been paid by the customer")
    else if (tableData[res-1].bookingStatus == "Accepted")
    alert("This request has already been accepted and requested payment for")
    else
    navigate("/requestPayment",{ state: { booking: tableData[res-1], venue: location.state }})

  }

  function toggleTable() {
    if (tableState == "Requested"){       //This changes table to venue bookings data
      document.getElementById("toggle-table-button").innerHTML="See Requests"
      updateTableState("Booked")
      updateTableData(bookingData)
      // alert("toggled table to bookings")
    }
    else if (tableState == "Booked"){       //This changes table to venue requests data
      document.getElementById("toggle-table-button").innerHTML="See Bookings"
      updateTableState("Requested")
      updateTableData(requestData)
      // alert("toggled table to requests")
    }
  }

  return (
    <>
      <div className="app-background">
        <div className="top-down-inner-box">
          <div className="above-content-input-row">
            <div>
              <span className="dealer-login-span-header">{ location && location.state && location.state.venueName }</span>
              <span className="venue-registration-input-checkbox-label" style={{ marginLeft: "2vw" }}>{ location && location.state && location.state.venueLocation }</span>
            </div>
            <div style={{ display: "flex", gap: "1vw"}}>
              <button id="toggle-table-button" className='btn btn-outline-light btn-lg dealer-login-button' onClick={toggleTable}>See Bookings</button>
              <button className='btn btn-outline-light btn-lg dealer-login-button' onClick={goToUpdateVenue}>Update Venue</button>
            </div>
          </div>

          <div className="scrollable-table-div">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer Name</th>
                  <th>Booking Status</th>
                  <th>{tableState + " From"}</th>
                  <th>{tableState + " To"}</th>
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

export default ManageVenueRequestsComponent;