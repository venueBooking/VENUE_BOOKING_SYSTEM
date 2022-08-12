// US_12
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";
import userContext from "../../contexts/userContext";
import AdminService from "../../Services/AdminService";

function ViewUsersComponent() {
  const headerC = useContext(headerContext)
  const userC = useContext(userContext)
  const navigate = useNavigate();
  const location = useLocation();

  const [dealersData, setDealersData] = useState([])
  const [customersData, setCustomersData] = useState([])

  const [tableData, updateTableData] = useState(dealersData)
  const [tableState, updateTableState] = useState("Dealer")

  var i=1
  const tableItems = tableData.length != 0? tableData.map((item) =>
    <tr key={i++}>
      <td>{item.userId}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.dob}</td>
      <td>{item.username}</td>
      <td>{item.balance}</td>
    </tr>
  ) : <tr style={{ height: "50vh" }}><td colSpan={6}>No {tableState}s Exist</td></tr>

  useEffect(()=>{
    if (headerC.state.userType != "admin") {
      alert("Only admin can access this page")
      navigate("/adminLogin")
    }

    loadDealers().then((res)=>{
      setDealersData(res)
    })
  },[])

  useEffect(() => {
    updateTableData(dealersData)
  },[dealersData])

  useEffect(() => {
    updateTableData(customersData)
  },[customersData])

  const loadDealers = async () => {
    var response = await AdminService.getDealerData()
    response.data.map((item) => {
      item.userId = item.dealerId
      delete item.dealerId
    })
    // console.log("Dealer's response       ",response.data)
    return response.data
  }

  const loadCustomers = async () => {
    var response = await AdminService.getCustomerData()
    response.data.map((item) => {
      item.userId = item.customerId
      delete item.customerId
    })
    // console.log("Customer's response       ",response.data)
    return response.data
  }

  function toggleTable() {
    if (tableState == "Dealer"){       //This changes table to customers data
      document.getElementById("toggle-table-button").innerHTML="See All Dealers"
      updateTableState("Customer")
      loadCustomers().then((res)=>{
        setCustomersData(res)
      })
    }
    else if (tableState == "Customer"){       //This changes table to dealers data
      document.getElementById("toggle-table-button").innerHTML="See All Customers"
      updateTableState("Dealer")
      loadDealers().then((res)=>{
        setDealersData(res)
      })
    }
  }

  return (
    <>
      <div className="app-background">
        <div className="top-down-inner-box">
          <div className="above-content-input-row">
            <span className="dealer-login-span-header">{tableState}s</span>
            <div style={{ display: "flex", gap: "1vw"}}>
              <button id="toggle-table-button" className='btn btn-outline-light btn-lg dealer-login-button' onClick={toggleTable}>See All Customers</button>
            </div>
          </div>

          <div className="scrollable-table-div">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Username</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {tableItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUsersComponent;


