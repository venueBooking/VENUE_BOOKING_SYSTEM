// US-08

import { Autocomplete } from "@mui/material";
import React from "react";
import Design from "../../Design";

function SearchVenueComponent() {
  let cities = ["Banglore", "Pune", "Nashik", "Mumbai"];

  return (
    <>
      <div className="rowC">
        <div id="title-div">
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Search venues by location
          </h2>
        </div>
        {/* <CustomButton text="Add"/> */}
        <div id="search" style={{ marginLeft: "550px", marginTop: "70px" }}>
          <div id="search-input-div">
            <Autocomplete
              id="autocomplete-div"
              options={cities}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    placeholder="Enter City"
                    autoFocus="true"
                    style={{ width: "30vw" }}
                  />
                </div>
              )}
            ></Autocomplete>
          </div>
        </div>
        <div class="test rounded-circle ">
          <h2 id="notification-text">2</h2>
        </div>
      </div>

      <table className="table table-bordered text-center " id="table-div">
        <thead>
          <tr style={{ color: "black", fontWeight: "bold" }}>
            <th scope="col">#</th>
            <th scope="col">Venue Name</th>
            <th scope="col">Venue Location</th>
            <th scope="col">Venue Availability</th>
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
          </tr>
        </tbody>
      </table>

      <Design />
    </>
  );
}

export default SearchVenueComponent;
