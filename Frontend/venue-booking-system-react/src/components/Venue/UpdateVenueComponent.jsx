import { FormGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import Design from "../../Design";
import CustomCheckBox from "../../Supporting_Components/CustomCheckBox";
import CustomTextField from "../../Supporting_Components/CustomTextField";

function UpdateVenueComponent() {
  const navigate = useNavigate(headerContext);
  function goToManageVenueReq() {
    navigate("/manageVenueRequests");
  }
  function goToViewVenueStatus() {
    navigate("/viewVenueStatus");
  }
  return (
    <>
      <div id="title-div">
        <h2
          style={{
            color: "white",
            fontWeight: "bold"
            // marginTop: "125px",
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
          onClick={goToManageVenueReq}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="update-button-div"
          style={{ marginLeft: "10rem" }}
          onClick={goToViewVenueStatus}
        >
          Delete Venue
        </button>
      </div>
      <Design />
    </>
  );
}

export default UpdateVenueComponent;
