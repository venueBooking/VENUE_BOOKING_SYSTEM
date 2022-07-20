import { FormGroup } from "@mui/material";
import React from "react";
import Design from "../../Design";
import CustomCheckBox from "../../Supporting_Components/CustomCheckBox";
import CustomTextField from "../../Supporting_Components/CustomTextField";

function UpdateVenueComponent() {
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
          Edit Venue Details
        </h2>
      </div>

      <div className="row">
        <div className="col">
          <CustomTextField label="Venue Name" />
        </div>
        <div className="col">
          <CustomTextField label="Venue Location" />
        </div>
        <div className="col">
          <CustomTextField label="Capacity" />
        </div>
      </div>
      <div id="update-form-cb">
        <label style={{ fontWeight: "bold" }}>Amenities Available</label>
        <FormGroup row>
          <CustomCheckBox
            label1="Banquet Area"
            label2="Dining Area"
            label3="Parking Area"
          />
        </FormGroup>
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="update-button-div"
          style={{ marginLeft: "20rem" }}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="update-button-div"
          style={{ marginLeft: "10rem" }}
        >
          Delete Venue
        </button>
      </div>
      <Design />
    </>
  );
}

export default UpdateVenueComponent;
