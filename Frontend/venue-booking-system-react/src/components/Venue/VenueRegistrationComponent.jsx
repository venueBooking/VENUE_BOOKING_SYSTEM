import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import headerContext from "../../contexts/headerContext";

export const VenueRegistrationComponent = () => {
const navigate = useNavigate(headerContext);
  function goToViewVenueStatus() {
    navigate("/viewVenueStatus");
  }
    useEffect(()=>{
        document.title="Venue Registration"
      },[]);
    const [venue,setVenue]=useState({});
 

    const handleForm=(e)=>{
        console.log(venue);
        e.preventDefault();
        
       postDatatoServer(venue);
       
    };

    const postDatatoServer=(data)=>{

        axios.post(`http://localhost:9004/venue/venues`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");

            },(error)=>{
                console.log(error);
                console.log("error");
            }
        );
    };
    return (
        <>
            <div className="app-background">
                <form onSubmit={ handleForm }>
                    <div className="inner-box">
                        <span className="dealer-login-span-header">Venue Registration</span>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">Venue name</span>
                                <input type="text" className="dealer-login-input-field" placeholder='Enter venue name' 
                                onChange={(e)=> setVenue({...venue,venuename:e.target.value })
                                
                                } required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Venue location</span>
                                <input type="text" className="dealer-login-input-field" placeholder='Enter venue location' 
                                onChange={(e)=> setVenue({...venue,venuelocation:e.target.value })}
                                required></input>
                            </div>
                            <div>
                                <span className="dealer-login-span-input">Capacity</span>
                                <input type="number" className="dealer-login-input-field" placeholder='Enter capacity in numbers'
                                onChange={(e)=> setVenue({...venue,capacity:e.target.value })}
                                required></input>
                            </div>
                        </div>
                        <div className='dealer-registration-input-row'>
                            <div>
                                <span className="dealer-login-span-input">Amenities Available </span>
                                {/* <input type="text" className="dealer-login-input-field" placeholder='Enter username' required></input> */}
                                <div>
                                    <div className='venue-registration-input-checkbox'>
                                        <input type="checkbox" name="banquet" value="Banquet" onChange={(e)=> setVenue({...venue,banquetAmenity:e.target.checked })} ></input> 
                                        <span className='venue-registration-input-checkbox-label'>Banquet</span>
                                    </div>
                                    <div className='venue-registration-input-checkbox'>
                                        <input type="checkbox" name="dining" value="Dining" onChange={(e)=> setVenue({...venue,diningAmenity:e.target.checked })}></input> 
                                        <span className='venue-registration-input-checkbox-label'>Dining</span>
                                    </div>
                                    <div className='venue-registration-input-checkbox'>
                                        <input type="checkbox" value="Parking" onChange={(e)=>
                                             setVenue({...venue,parkingAmenity:e.target.checked })} ></input> 
                                        <span className='venue-registration-input-checkbox-label'>Parking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-outline-light btn-lg dealer-login-button'  onClick={goToViewVenueStatus}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
