// US-06

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import Design from "../../Design";
import DealerService from "../../Services/DealerService";

function ViewVenueStatusComponent() {
  const [bookings, setBookings] = useState([]);
  const [venues, setVenues] = useState([]);

  let booking;
  let venue;

  useEffect(() => {
    getBookings();
    getVenues();
  }, []);
  async function getBookings() {
    console.log("getBookings ");
    booking = await DealerService.getBookings();
    // setBookings(DealerService.getBookings());
    setBookings(booking);
    console.log("bookings --> ", booking);
  }
  async function getVenues() {
    venue = await DealerService.getVenues();
    setVenues(venue.data);
    // console.log("venue --> ", venues);
  }

  function checkDates(id) {
    let book = JSON.stringify(bookings);
    let bk = JSON.parse(book);
    for (const element of bk.data) {
      if (element.venueId == id) {
        // return [bk.data[i].dateFrom, bk.data[i].dateTo];
        let currentDate = new Date().toJSON().slice(0, 10);
        const start = element.dateFrom;
        const end = element.dateTo;
        return !!(currentDate > start && currentDate < end);
      }
    }
  }

  let tableContent = venues.map((venues) => (
    <tr
      key={venues.venueId}
      onClick={goToManageVenueReq.bind(null, venues.venueId)}
    >
      <td>{venues.venuename}</td>
      <td>{venues.venuelocation}</td>
      <td align="center">
        {!checkDates(venues.venueId) ? (
          <div className="card text-white bg-success mb-3 w-50">Available</div>
        ) : (
          <div className="card text-white bg-danger mb-3 w-50">
            Not Available
          </div>
        )}
      </td>
      <td>{venues.bookingRequest}</td>
    </tr>
  ));

  const navigate = useNavigate(headerContext);
  function goToManageVenueReq(res) {
    navigate("/manageVenueRequests");
  }
  function goToAddVenue() {
    // navigate("/venueRegistration");
    console.log("BBBB --> ", booking);
  }

  return (
    <>
      {/* <div id="container-div"> */}
      <div id="title-div">
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            // marginTop: "125px",
          }}
        >
          Manage Your Venues
        </h2>
      </div>
      {/* <CustomButton text="Add"/> */}
      <button
        type="button"
        className="btn btn-outline-secondary"
        id="button-div"
        onClick={goToAddVenue}
      >
        Add Venue
      </button>
      <table className="table table-bordered text-center " id="table-div">
        <thead>
          <tr style={{ color: "black", fontWeight: "bold" }}>
            <th scope="col">Venue Name</th>
            <th scope="col">Venue Location</th>
            <th scope="col">Venue Availability</th>
            <th scope="col">Booking Request</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>

      <Design />
    </>
  );
}

export default ViewVenueStatusComponent;
