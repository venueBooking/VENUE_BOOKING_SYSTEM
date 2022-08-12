import axios from 'axios';

const addVenue = "http://localhost:9003/venue/updateVenue"
const updateVenue = "http://localhost:9003/venue/updateVenue"
const deleteVenue = "http://localhost:9003/venue/deleteVenueByVenueId"
const getVenuesByDealerId = "http://localhost:9003/venue/getAllVenues/"
const getVenuesByLocation = "http://localhost:9003/venue/getVenueByLocation/"
const getBookingByVenueId = "http://localhost:9003/venue/getBookingByVenueId/"
const saveBooking = "http://localhost:9003/venue/saveBooking"
const deleteBooking = "http://localhost:9003/venue/deleteBookingByBookingId"
const savePaymentRequest = "http://localhost:9003/venue/savePaymentRequest"
const getPaymentRequestByBookingStatus = "http://localhost:9003/venue/getPaymentRequestByBookingStatus"
const savePaymentResponse = "http://localhost:9003/venue/savePaymentResponse"
const deletePaymentRequest = "http://localhost:9003/venue/deletePaymentByRequestId"

class VenueService {
    //For venue authorization
    async addVenue(token, venue) {
        try {
            var venue = await axios.post(addVenue, venue, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("update POST response --> ", response);
                    return response;
                });
        } catch (error) {
            venue = ""
        } finally {
            return venue;
        }
    }

    // for venue data context
    async getVenues(token,dealerId) {
        var venue = await axios.get(getVenuesByDealerId+dealerId, {
            headers: {
                'jwt': `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
        return venue;
    }

    // for venue search by location
    async getVenuesByLocation(token,customerId,location) {
        var venue = await axios.get(getVenuesByLocation+customerId+"/"+location, {
            headers: {
                'jwt': `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
        return venue;
    }

    // for venue update
    async updateVenue(token,venue) {
        try {
            var venue = await axios.post(updateVenue, venue, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("update POST response --> ", response);
                    return response;
                });
        } catch (error) {
            venue = ""
        } finally {
            return venue;
        }
    }

    // for venue delete
    async deleteVenue(token,dealerId,venueId) {
        // console.log("deletePOST  -->  ",deleteVenue);
        try {
            var venue = await axios.delete(deleteVenue+"/"+dealerId+"/"+venueId, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("delete POST response --> ", response);
                    return response;
                });
        } catch (error) {
            venue = ""
        } finally {
            return venue;
        }
    }

    // for booking requests by venueId
    async getBookingByVenueId(token,dealerId,venueId) {
        var booking = await axios.get(getBookingByVenueId+dealerId+"/"+venueId, {
            headers: {
                'jwt': `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
        return booking;
    }

    //For raising a booking request
    async saveBooking(token, booking) {
        try {
            var booking = await axios.post(saveBooking, booking, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("book venue POST response --> ", response);
                    return response;
                });
        } catch (error) {
            booking = ""
        } finally {
            return booking;
        }
    }

    // for deleting a booking request
    async deleteBooking(token,dealerId,requestId) {
        // console.log("deletePOST  -->  ",deleteVenue);
        try {
            var venue = await axios.delete(deleteBooking+"/"+dealerId+"/"+requestId, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("delete booking POST response --> ", response);
                    return response;
                });
        } catch (error) {
            venue = ""
        } finally {
            return venue;
        }
    }
    
    //For accepting the booking request and for requesting payment from customer
    async savePaymentRequest(token, dealerId, paymentRequest) {
        // console.log("Inside save payment which is an axios post req");
        try {
            var paymentRequest = await axios.post(savePaymentRequest+"/"+dealerId, paymentRequest, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("book venue POST response --> ", response);
                    return response;
                });
        } catch (error) {
            paymentRequest = ""
        } finally {
            return paymentRequest;
        }
    }

    //For getting the number of accepted booking requests for a specific customer
    async getPaymentRequest(token, customerId) {
        // console.log("Inside save payment which is an axios post req");
        try {
            var paymentRequest = await axios.get(getPaymentRequestByBookingStatus+"/"+customerId+"/Accepted", {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("get payment POST response --> ", response);
                    return response;
                });
        } catch (error) {
            paymentRequest = ""
        } finally {
            return paymentRequest;
        }
    }

    //For accepting the payment request
    async savePaymentResponse(token, customerId, paymentResponse) {
        // console.log("Inside save payment which is an axios post req");
        try {
            var paymentResponse = await axios.post(savePaymentResponse+"/"+customerId, paymentResponse, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("book venue POST response --> ", response);
                    return response;
                });
        } catch (error) {
            paymentResponse = ""
        } finally {
            return paymentResponse;
        }
    }

    // for deleting a payment request
    async deletePaymentRequest(token,customerId,requestId) {
        // console.log("deletePOST  -->  ",deleteVenue);
        try {
            var venue = await axios.delete(deletePaymentRequest+"/"+customerId+"/"+requestId, {
                headers: {
                    'jwt': `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("delete booking POST response --> ", response);
                    return response;
                });
        } catch (error) {
            venue = ""
        } finally {
            return venue;
        }
    }
}

export default new VenueService