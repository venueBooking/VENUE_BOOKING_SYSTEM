// US-06

import React, { useContext } from "react";
import headerContext from "../../contexts/headerContext";
import Design from "../../Design";

function ViewVenueStatusComponent() {
  const headerC = useContext(headerContext);

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
      >
        Add Venue
      </button>
      <table className="table table-bordered text-center " id="table-div">
        <thead>
          <tr style={{ color: "black", fontWeight: "bold" }}>
            <th scope="col">#</th>
            <th scope="col">Venue Name</th>
            <th scope="col">Venue Location</th>
            <th scope="col">Venue Availability</th>
            <th scope="col">Booking Request</th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          <tr>
            <th scope="row">1</th>
            <td>Magnolia</td>
            <td>Cannaught Place, Delhi</td>
            <td align="center">
              <div className="card text-white bg-success mb-3 w-50">
                Success
              </div>
            </td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Magnolia</td>
            <td>Cannaught Place, Delhi</td>
            <td align="center">
              <div
                className="card text-white bg-danger mb-3 w-50"
                // align="center"
              >
                Not Available
              </div>
            </td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}

      <Design />
    </>
  );
}

export default ViewVenueStatusComponent;
