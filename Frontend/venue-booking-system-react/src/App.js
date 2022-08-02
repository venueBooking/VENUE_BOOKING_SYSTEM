import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminLoginComponent } from "./components/Admin/AdminLoginComponent";
import ViewUsersComponent from "./components/Admin/ViewUsersComponent";
import BookVenueComponent from "./components/Customer/BookVenueComponent";
import ConfirmPaymentComponent from "./components/Customer/ConfirmPaymentComponent";
import { CustomerLoginComponent } from "./components/Customer/CustomerLoginComponent";
import { CustomerRegistrationComponent } from "./components/Customer/CustomerRegistrationComponent";
import SearchVenueComponent from "./components/Customer/SearchVenueComponent";
import { DealerLoginComponent } from "./components/Dealer/DealerLoginComponent";
import { DealerRegistrationComponent } from "./components/Dealer/DealerRegistrationComponent";
import ManageVenueRequestsComponent from "./components/Dealer/ManageVenueRequestsComponent";
import RequestPaymentComponent from "./components/Dealer/RequestPaymentComponent";
import { UpdateDealerComponent } from "./components/Dealer/UpdateDealerComponent";
import ViewVenueStatusComponent from "./components/Dealer/ViewVenueStatusComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { LandingComponent } from "./components/LandingComponent";
import UpdateVenueComponent from "./components/Venue/UpdateVenueComponent";
import { VenueRegistrationComponent } from "./components/Venue/VenueRegistrationComponent";
import HeaderState from "./contexts/HeaderState";
import UserState from "./contexts/UserState";
import VenueState from "./contexts/VenueState";
function App() {
  return (
    <HeaderState>
      <VenueState>
        <UserState>
          <Router>
            <div id="main-flex">
              {/* Header Component */}
              <HeaderComponent />

              <Routes>
                {/* Landing Component */}
                <Route path="/" element={<LandingComponent />} />

                {/* Dealer components */}
                <Route path="/dealerLogin" element={<DealerLoginComponent />} />
                <Route
                  path="/dealerRegistration"
                  element={<DealerRegistrationComponent />}
                />
                {/* <Route path="/updateDealer" element={<UpdateDealerComponent />} /> */}
                <Route
                  path="/viewVenueStatus"
                  element={<ViewVenueStatusComponent />}
                />
                <Route
                  path="/manageVenueRequests"
                  element={<ManageVenueRequestsComponent />}
                />
                <Route
                  path="/requestPayment"
                  element={<RequestPaymentComponent />}
                />
                <Route
                  path="/manageVenueRequests"
                  element={<ManageVenueRequestsComponent />}
                />
                <Route
                  path="/requestPayment"
                  element={<RequestPaymentComponent />}
                />
                <Route
                  path="/updateDealer"
                  element={<UpdateDealerComponent />}
                />
                <Route
                  path="/viewVenueStatus"
                  element={<ViewVenueStatusComponent />}
                />

                {/* Venue components */}
                <Route
                  path="/venueRegistration"
                  element={<VenueRegistrationComponent />}
                />
                <Route path="/updateVenue" element={<UpdateVenueComponent />} />

                {/* Customer components */}
                <Route
                  path="/customerLogin"
                  element={<CustomerLoginComponent />}
                />
                <Route
                  path="/customerRegistration"
                  element={<CustomerRegistrationComponent />}
                />
                <Route path="/searchVenue" element={<SearchVenueComponent />} />
                <Route path="/bookVenue" element={<BookVenueComponent />} />
                {/*<Route path="/updateCustomer" element={<UpdateCustomerComponent />} /> */}
                <Route
                  path="/confirmPayment"
                  element={<ConfirmPaymentComponent />}
                />
                {/* Admin components */}

                <Route path="/viewUser" element={<ViewUsersComponent />} />

                <Route path="/adminLogin" element={<AdminLoginComponent />} />
              </Routes>
            </div>
          </Router>
        </UserState>
      </VenueState>
    </HeaderState>
  );
}

export default App;
