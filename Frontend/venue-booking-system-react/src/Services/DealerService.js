import axios from 'axios';

const dealerAuthenticate = "http://localhost:9001/dealer/authenticate"
const getDealer = "http://localhost:9001/dealer/getDealer"

class DealerService {
    //For dealer authorization
    async getToken(credentials) {
        try {
            var token = await axios.post(dealerAuthenticate, credentials)
                .then(response => {
                    if (response.data != null) {
                        return response;
                    }
                    else {
                        alert("Bad Credentials")
                    }
                });
        } catch (error) {
            token = ""
        } finally {
            return token;
        }
    }

    // for dealer data context
    async getDealerData(token) {
        var dealer = await axios.get(getDealer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
        return dealer;
    }
}

export default new DealerService