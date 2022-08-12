import axios from 'axios';

const adminAuthenticate = "http://localhost:9004/admin/authenticate"
const getAllDealers = "http://localhost:9004/admin/getAllDealers"
const getAllCustomers = "http://localhost:9004/admin/getAllCustomers"

class AdminService {
    //For admin authorization
    async getToken(credentials) {
        try {
            var token = await axios.post(adminAuthenticate, credentials)
                .then(response => {
                    // console.log("POST response --> ", response);
                    return response;
                });
        } catch (error) {
            token = ""
        } finally {
            return token;
        }
    }

    //for fetching dealer's data
    async getDealerData() {
        var dealer = await axios.get(getAllDealers)
            .then(response => {
                return response
            })
        return dealer;
    }
    
    //for fetching dealer's data
    async getCustomerData() {
        var customer = await axios.get(getAllCustomers)
            .then(response => {
                return response
            })
        return customer;
    }
}

export default new AdminService