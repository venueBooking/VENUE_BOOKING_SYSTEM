import { useState } from "react";
import customerContext from './customerContext';

const CustomerState = (props) => {
    const s = {
        "firstName": "none",
        "lastName": "none",
        "username": "none",
        "customerId": -1,
        "password": "none",
        "dob": "none",
        "balance": -1
    }

    const [state, setState] = useState(s)

    const updateCustomer = (ci, fn, ln, db, un, pw, ba) => {
        setState({
            "firstName": fn,
            "lastName": ln,
            "username": un,
            "customerId": ci,
            "password": pw,
            "dob": db,
            "balance": ba
        })
    }

    const logoutCustomer = () => {
        setState({
            "firstName": "none",
            "lastName": "none",
            "username": "none",
            "customerId": -1,
            "password": "none",
            "dob": "none",
            "balance": -1
        })
    }

    return (
        <customerContext.Provider value={{ state, updateCustomer, logoutCustomer }}>
            {props.children}
        </customerContext.Provider>
    )
}

export default CustomerState