import { useState } from "react";
import headerContext from './headerContext';

const HeaderState = (props) => {
    const s = {
        "userType": "none",
        "displayAttribute": "none",
        "logoutDisplayAttribute": "none",
        "jwtToken": "none"
    }

    const [state, setState] = useState(s)

    const updateUserType = (un) => {
        setState((prev) => ({
            "userType": un,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": prev.jwtToken
        }))
    }

    const updateDisplayAttribute = (da) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": da,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": prev.jwtToken
        }))
    }

    const updateJwtToken = (jt) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": jt
        }))
    }

    const updateLogin = (lda) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": lda,
            "jwtToken": prev.jwtToken
        }))
    }

    return (
        <headerContext.Provider value={{state, updateUserType, updateDisplayAttribute, updateJwtToken, updateLogin }}>
            {props.children}
        </headerContext.Provider>
    )
}

export default HeaderState