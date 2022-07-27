import { useState } from "react";
import userContext from './userContext';

const UserState = (props) => {
    const s = {
        "firstName": "none",
        "lastName": "none",
        "username": "none",
        "isActive": false
    }

    const [state, setState] = useState(s)

    const updateUser = (fn,ln,un) => {
        setState({
            "firstName": fn,
            "lastName": ln,
            "username": un,
            "isActive": true
        })
    }

    return (
        <userContext.Provider value={{state, updateUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState