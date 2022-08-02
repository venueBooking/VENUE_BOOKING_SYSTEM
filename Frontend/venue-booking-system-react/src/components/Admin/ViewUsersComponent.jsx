// US_12
import React, { useEffect, useState } from "react";
import Design from "../../Design";
import AdminService from "../../Services/AdminService";

function ViewUsersComponent() {
  const [dealers, setDealers] = useState([]);
  const [isdealers, setIsDealers] = useState([]);
  const [isCustomer, setIsCustomer] = useState([]);

  function dealerButtonClicked() {
    setIsDealers(true);
    setIsCustomer(false);
  }
  function userButtonClicked() {
    console.log("user button clicked");
    setIsDealers(false);
    setIsCustomer(true);
  }

  useEffect(() => {
    getDealers();
  }, []);
  const getDealers = () => {
    AdminService.getDealers().then((response) => {
      setDealers(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <div id="title-admin-div">
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          View Users/Dealers
        </h2>
      </div>
      {/* <CustomButton text="Add"/> */}
      <button
        type="button"
        className="btn btn-outline-secondary"
        id="button-user-admin-div"
        onClick={userButtonClicked}
      >
        Users
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        id="button-div"
        onClick={dealerButtonClicked}
      >
        Dealers
      </button>
      {isCustomer ? (
        <table
          className="table table-bordered text-center "
          id="view-user-admin-table"
        >
          <thead>
            <tr style={{ color: "black", fontWeight: "bold" }}>
              <th scope="col">Dealer ID</th>
              <th scope="col">User Name</th>
              <th scope="col">DOB</th>

              <th scope="col">Venues Booked</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealers) => (
              <tr key={dealers.dealerId}>
                <td> {dealers.dealerId}</td>
                <td> {dealers.firstName + " " + dealers.lastName}</td>
                <td> {dealers.dob}</td>
                <td> {1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table
          className="table table-bordered text-center "
          id="view-user-admin-table"
        >
          <thead>
            <tr style={{ color: "black", fontWeight: "bold" }}>
              <th scope="col">Dealer ID</th>
              <th scope="col">User Name</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealers) => (
              <tr key={dealers.dealerId}>
                <td> {dealers.dealerId}</td>
                <td> {dealers.firstName + " " + dealers.lastName}</td>
                <td> {dealers.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Design />
    </>
  );
}

export default ViewUsersComponent;
