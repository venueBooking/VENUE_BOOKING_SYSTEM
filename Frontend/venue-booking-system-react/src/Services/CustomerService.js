import axios from 'axios';

const customerAuthenticate = "http://localhost:9002/customer/authenticate"
const getCustomer = "http://localhost:9002/customer/getCustomer"
const addCustomer = "http://localhost:9002/customer/addCustomer"
const updateCustomer = "http://localhost:9002/customer/updateCustomer"
var deleteCustomer = "http://localhost:9002/customer/deleteCustomer/"

class CustomerService {
    //For customer authorization
    async getToken(credentials) {
        try {
            var token = await axios.post(customerAuthenticate, credentials)
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

    // for customer data context
    async getCustomerData(token) {
        var customer = await axios.get(getCustomer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
        return customer;
    }

    // for customer registration
    async registerCustomer(customer) {
        try {
            var customer = await axios.post(addCustomer, customer)
                .then(response => {
                    console.log("register POST response --> ", response);
                    return response;
                });
        } catch (error) {
            customer = ""
        } finally {
            return customer;
        }
    }

    // for customer update
    async updateCustomer(customer,token) {
        try {
            var customer = await axios.post(updateCustomer, customer, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log("update POST response --> ", response);
                    return response;
                });
        } catch (error) {
            customer = ""
        } finally {
            return customer;
        }
    }

    // for customer delete
    async deleteCustomer(username,token) {
        console.log("deletePOST  -->  ",deleteCustomer);
        try {
            var customer = await axios.delete(deleteCustomer+username, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log("delete POST response --> ", response);
                    return response;
                });
        } catch (error) {
            customer = ""
        } finally {
            return customer;
        }
    }
}

export default new CustomerService