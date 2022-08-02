import { useState } from "react";
import venueContext from "./venueContext";

const VenueState = (props) => {
  const venue = [];

  const [state, setState] = useState(venue);

  const updateVenue = (venueArray) => {
    setState(venueArray);
  };

  // const logoutUser = () => {
  //     setState({
  //         "firstName": "none",
  //         "lastName": "none",
  //         "username": "none",
  //         "dealerId": -1,
  //         "password": "none",
  //         "dob": "none",
  //         "balance": -1
  //     })
  // }

  return (
    <venueContext.Provider value={{ state, updateVenue }}>
      {props.children}
    </venueContext.Provider>
  );
};

export default VenueState;
