import { useState } from "react";
import headerContext from './headerContext';

const HeaderState = (props) => {
    const s = {
        "userType": "none",
        "displayAttribute": "none"

    }

    const [state, setState] = useState(s)

    const updateUserType = (un) => {
        setState((prev) => ({
            "userType": un,
            "displayAttribute": prev.displayAttribute
        }))
    }

    const updateDisplayAttribute = (da) => {
        setState((prev) => ({
            "userType": prev.userType,
            "displayAttribute": da
        }))
    }

    return (
        <headerContext.Provider value={{state, updateUserType, updateDisplayAttribute}}>
            {props.children}
        </headerContext.Provider>
    )
}

export default HeaderState