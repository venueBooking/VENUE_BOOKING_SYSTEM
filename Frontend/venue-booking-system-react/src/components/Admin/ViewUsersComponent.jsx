// US_12
import React from "react";
import Design from "../../Design";

function ViewUsersComponent() {
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
      >
        Users
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        id="button-div"
      >
        Dealers
      </button>
      <table
        className="table table-bordered text-center "
        id="view-user-admin-table"
      >
        <thead>
          <tr style={{ color: "black", fontWeight: "bold" }}>
            <th scope="col">Profile ID</th>
            <th scope="col">User Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Venues Booked</th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          <tr>
            <th scope="row">123456</th>
            <td>Dummy Name #1</td>
            <td>02/07/1999/</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">123457</th>
            <td>Dummy Name #2</td>
            <td>02/07/1998</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <Design />
    </>
  );
}

export default ViewUsersComponent;


