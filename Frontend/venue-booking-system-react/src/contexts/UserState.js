import { useState } from "react";
import userContext from './userContext';

const UserState = (props) => {
    const s = {
        "firstName": "none",
        "lastName": "none",
        "username": "none",
        "dealerId": -1,
        "password": "none",
        "dob": "none"
    }

    const [state, setState] = useState(s)

    const updateUser = (di, fn, ln, db, un, pw) => {
        setState({
            "firstName": fn,
            "lastName": ln,
            "username": un,
            "dealerId": di,
            "password": pw,
            "dob": db
        })
    }

    const logoutUser = () => {
        setState({
            "firstName": "none",
            "lastName": "none",
            "username": "none",
            "dealerId": -1,
            "password": "none",
            "dob": "none"
        })
    }

    return (
        <userContext.Provider value={{ state, updateUser, logoutUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState