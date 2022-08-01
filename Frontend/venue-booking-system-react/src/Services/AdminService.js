import axios from "axios";

const GET_ALL_DEALER_URL = "http://localhost:9002/admin/getAllDealers";

class AdminService {
  getDealers() {
    return axios.get(GET_ALL_DEALER_URL);
  }
}

export default new AdminService();
