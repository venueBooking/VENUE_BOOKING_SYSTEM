// US_13
import React from "react";
import Design from "../../Design";
import CustomTextField from "../../Supporting_Components/CustomTextField";

function ConfirmPaymentComponent() {
  return (
    <>
      <div id="title-div">
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "125px",
            marginLeft: "20px",
          }}
        >
          Magnolia
          <h6
            style={{
              marginTop: "-1rem",
              marginLeft: "200px",
            }}
          >
            Indira Nagar{" "}
          </h6>
        </h1>
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "-3rem",
            marginLeft: "480px",
          }}
        >
          Confirm Payment
        </h2>
      </div>

      <div className="row">
        <div className="col">
          <CustomTextField label="Request ID" />
        </div>
        <div className="col">
          <CustomTextField label="Payment Method" />
        </div>
        <div className="col">
          <CustomTextField label="Requested Features" />
        </div>
      </div>
      <div className="row-request-payment">
        <div className="col">
          <CustomTextField label="Request Amount" />
        </div>
        <div className="col-request-payment">
          <CustomTextField label="Booking Date" />
        </div>
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="confirm-button-div"
          style={{ marginLeft: "34rem" }}
        >
          Confirm and send
        </button>
      </div>
      <Design />
    </>
  );
}

export default ConfirmPaymentComponent;
