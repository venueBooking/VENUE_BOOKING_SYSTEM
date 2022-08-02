import axios from "axios";

const dealerAuthenticate = "http://localhost:9001/dealer/authenticate";
const getDealer = "http://localhost:9001/dealer/getDealer";
const addDealer = "http://localhost:9001/dealer/addDealer";
const updateDealer = "http://localhost:9001/dealer/updateDealer";
const GET_ALL_BOOKINGS_URL = "http://localhost:9001/dealer/getAllBookings";
const GET_ALL_VENUES_URL = "http://localhost:9001/dealer/getAllVenues";

var deleteDealer = "http://localhost:9001/dealer/deleteDealer/";

class DealerService {
  //For dealer authorization
  async getToken(credentials) {
    try {
      var token = await axios
        .post(dealerAuthenticate, credentials)
        .then((response) => {
          if (response.data != null) {
            return response;
          } else {
            alert("Bad Credentials");
          }
        });
    } catch (error) {
      token = "";
    } finally {
      return token;
    }
  }

  // for dealer data context
  async getDealerData(token) {
    var dealer = await axios
      .get(getDealer, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response;
      });
    return dealer;
  }

  // for dealer registration
  async registerDealer(dealer) {
    try {
      var dealer = await axios.post(addDealer, dealer).then((response) => {
        console.log("register POST response --> ", response);
        return response;
      });
    } catch (error) {
      dealer = "";
    } finally {
      return dealer;
    }
  }

  // for dealer update
  async updateDealer(dealer, token) {
    try {
      var dealer = await axios
        .post(updateDealer, dealer, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("update POST response --> ", response);
          return response;
        });
    } catch (error) {
      dealer = "";
    } finally {
      return dealer;
    }
  }

  // for dealer delete
  async deleteDealer(username, token) {
    console.log("deletePOST  -->  ", deleteDealer);
    try {
      var dealer = await axios
        .delete(deleteDealer + username, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("delete POST response --> ", response);
          return response;
        });
    } catch (error) {
      dealer = "";
    } finally {
      return dealer;
    }
  }
  async getBookings() {
    var booking = await axios.get(GET_ALL_BOOKINGS_URL).then((response) => {
      return response;
    });
    return booking;
    // return axios.get(GET_ALL_BOOKINGS_URL);
  }
  async getVenues() {
    var venues = await axios.get(GET_ALL_VENUES_URL).then((response) => {
      return response;
    });
    return venues;
    // return axios.get(GET_ALL_VENUES_URL);
  }
}

export default new DealerService();
