import axios from "axios";

const venueAuthenticate = "http://localhost:9001/dealer/authenticate";
const GET_ALL_VENUE_URL = "http://localhost:9004/venue/venues";
class VenueService {
  async getToken(credentials) {
    try {
      var token = await axios
        .post(venueAuthenticate, credentials)
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

  // for venue data context
  async getVenueData(token) {
    var venue = await axios
      .get(GET_ALL_VENUE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response;
      });
    return venue;
  }
}

export default new VenueService();
