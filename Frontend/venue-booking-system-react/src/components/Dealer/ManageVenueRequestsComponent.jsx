// US_??
import React from "react";
import Design from "../../Design";
import { useNavigate } from 'react-router-dom';

function ManageVenueRequestsComponent() {
  const navigate = useNavigate();

  function goToUpdateVenue() {
    navigate("/updateVenue")
  }
  return (
    <>
      <div id="title-div">
        <h2
        style={{
            color: "white",
            fontWeight: "bold",
            marginLeft:"20px",
        }}>
        Magnolia
        <h6 style={{
            marginTop:"-1rem",
            marginLeft:"200px",
        }} >Indira Nagar </h6>
        </h2>
        
      </div>
      {/* <CustomButton text="Add"/> */}
      <button
        type="button"
        className="btn btn-outline-secondary"
        id="button-div"
        onClick={goToUpdateVenue}
      >
        Edit Venue
      </button>
      <table
        className="table table-bordered text-center "
        id="view-user-admin-table"
      >
        <thead>
          <tr style={{ color: "black", fontWeight: "bold" }}>
            
            <th scope="col">Request ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">features Requested</th>
            <th scope="col">Booking date</th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          <tr>
            <th scope="row">123456</th>
            <td>Dummy Name</td>
            <td>Banquet,Dining</td>
            <td>19-10-2022-21-10-2022</td>
          </tr>
        </tbody>
      </table>

      <Design />
    </>
  );
}

export default ManageVenueRequestsComponent;