// US_07
import React from "react";
import Design from "../../Design";
import CustomCheckBox from "../../Supporting_Components/CustomCheckBox";
import CustomTextField from "../../Supporting_Components/CustomTextField";
import { useNavigate } from 'react-router-dom';

function RequestPaymentComponent() {
  const navigate = useNavigate();

  function goToConfirmPayment() {
    navigate("/confirmPayment")
    // alert(headerC.state.userType)
  }
  return (
    <>
      <div id="title-div">
        <h1
        style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "125px",
            marginLeft:"20px",
        }}>
        Magnolia
        <h6 style={{
            marginTop:"-1rem",
            marginLeft:"200px",
        }} >Indira Nagar </h6>
        </h1>
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "-3rem",
            marginLeft:"480px",
          }}
        >
          Request Payment
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
          onClick={goToConfirmPayment}
          style={{ marginLeft: "34rem" }}
        >
          Confirm and send
        </button>
      </div>
      <Design />
    </>
  );
}

export default RequestPaymentComponent;
