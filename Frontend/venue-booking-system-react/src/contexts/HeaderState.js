import { useState } from "react";
import headerContext from './headerContext';

const HeaderState = (props) => {
    const s = {
        "userType": "none",
        "displayAttribute": "block",    // <-- Set this to none, for testing purposes 
        "logoutDisplayAttribute": "none",
        "jwtToken": "none",
        "displayName": "Login"
    }

    const [state, setState] = useState(s)

    const updateUserType = (un, dn) => {
        setState((prev) => ({
            "userType": un,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": prev.jwtToken,
            "displayName": dn
        }))
    }

    const updateDisplayAttribute = (da) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": da,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": prev.jwtToken,
            "displayName": prev.displayName
        }))
    }

    const updateJwtToken = (jt) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": prev.logoutDisplayAttribute,
            "jwtToken": jt,
            "displayName": prev.displayName
        }))
    }

    const updateLogin = (lda) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": prev.displayAttribute,
            "logoutDisplayAttribute": lda,
            "jwtToken": prev.jwtToken,
            "displayName": prev.displayName
        }))
    }

    return (
        <headerContext.Provider value={{state, updateUserType, updateDisplayAttribute, updateJwtToken, updateLogin }}>
            {props.children}
        </headerContext.Provider>
    )
}

export default HeaderState