import { useState } from "react";
import userContext from './userContext';

const UserState = (props) => {
    const s = {
        "firstName": "none",
        "lastName": "none",
        "username": "none",
        "userId": -1,
        "password": "none",
        "dob": "none",
        "balance": -1
    }

    const [state, setState] = useState(s)

    const updateUser = (ui, fn, ln, db, un, pw, ba) => {
        setState({
            "firstName": fn,
            "lastName": ln,
            "username": un,
            "userId": ui,
            "password": pw,
            "dob": db,
            "balance": ba
        })
    }

    const logoutUser = () => {
        setState({
            "firstName": "none",
            "lastName": "none",
            "username": "none",
            "dealerId": -1,
            "password": "none",
            "dob": "none",
            "balance": -1
        })
    }

    return (
        <userContext.Provider value={{ state, updateUser, logoutUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState