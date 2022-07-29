import axios from 'axios';

const dealerAuthenticate = "http://localhost:9001/dealer/authenticate"
const getDealer = "http://localhost:9001/dealer/getDealer"
const addDealer = "http://localhost:9001/dealer/addDealer"
const updateDealer = "http://localhost:9001/dealer/updateDealer"
var deleteDealer = "http://localhost:9001/dealer/deleteDealer/"

class DealerService {
    //For dealer authorization
    async getToken(credentials) {
        try {
            var token = await axios.post(dealerAuthenticate, credentials)
                .then(response => {
                    console.log("POST response --> ", response);
                    return response;
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

    // for dealer registration
    async registerDealer(dealer) {
        try {
            var dealer = await axios.post(addDealer, dealer)
                .then(response => {
                    console.log("register POST response --> ", response);
                    return response;
                });
        } catch (error) {
            dealer = ""
        } finally {
            return dealer;
        }
    }

    // for dealer update
    async updateDealer(dealer,token) {
        try {
            var dealer = await axios.post(updateDealer, dealer, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log("update POST response --> ", response);
                    return response;
                });
        } catch (error) {
            dealer = ""
        } finally {
            return dealer;
        }
    }

    // for dealer delete
    async deleteDealer(username,token) {
        console.log("deletePOST  -->  ",deleteDealer);
        try {
            var dealer = await axios.delete(deleteDealer+username, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log("delete POST response --> ", response);
                    return response;
                });
        } catch (error) {
            dealer = ""
        } finally {
            return dealer;
        }
    }
}

export default new DealerService