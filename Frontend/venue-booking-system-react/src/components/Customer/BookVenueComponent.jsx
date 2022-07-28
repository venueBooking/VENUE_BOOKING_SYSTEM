// US-09

import { Autocomplete, FormGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../contexts/headerContext";
import headerContext from "../../contexts/headerContext";
import Design from "../../Design";
import CustomCheckBox from "../../Supporting_Components/CustomCheckBox";
import CustomDatePicker from "../../Supporting_Components/CustomDatePicker";
import CustomTextField from "../../Supporting_Components/CustomTextField";

function BookVenueComponent() {
  let cities = ["Banglore", "Pune", "Nashik", "Mumbai"];
  const navigate = useNavigate(headerContext);
  function goToRequestPayment() {
    navigate("/requestPayment");
  }
  return (
    <>
      <div id="title-div">
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "125px",
          }}
        >
          Book Venue
        </h2>
      </div>

      <div class="wrapper">
        <div class="box a">
          <CustomTextField label="Requet ID" />
        </div>
        <div class="box b">
          <CustomTextField label="Venue Name" />
        </div>
        <div class="box c">
          <p style={{ fontWeight: "bold" }}>Venue Location</p>
          <div id="search" style={{ marginTop: "-10px" }}>
            <div id="search-input-div">
              <Autocomplete
                id="autocomplete-div"
                options={cities}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      style={{ width: "20vw" }}
                    />
                  </div>
                )}
              ></Autocomplete>
            </div>
          </div>
        </div>
        <div class="box d">
          <label style={{ fontWeight: "bold" }}>Select Date</label>
          <br />
          <CustomDatePicker />
        </div>
        <div class="box e" style={{ marginLeft: "50px" }}>
          <label style={{ fontWeight: "bold" }}>Select features to avail</label>
          <FormGroup>
            <CustomCheckBox
              label1="Banquet Area"
              label2="Dining Area"
              label3="Parking Area"
            />
          </FormGroup>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="update-button-div"
          style={{
            position: "absolute",
            marginTop: "30rem",
          }}
          onClick={goToRequestPayment}
        >
          Book Venue
        </button>
      </div>
      <Design />
    </>
  );
}

export default BookVenueComponent;
