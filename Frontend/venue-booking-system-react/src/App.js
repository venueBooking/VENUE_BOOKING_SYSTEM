import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookVenueComponent from "./components/Customer/BookVenueComponent";
import SearchVenueComponent from "./components/Customer/SearchVenueComponent";
import ViewVenueStatusComponent from "./components/Dealer/ViewVenueStatusComponent";
import { DealerLoginComponent } from "./components/Dealer/DealerLoginComponent";
import { UpdateDealerComponent } from "./components/Dealer/UpdateDealerComponent";
import { CustomerLoginComponent } from "./components/Customer/CustomerLoginComponent";
import { CustomerRegistrationComponent } from "./components/Customer/CustomerRegistrationComponent";
import { DealerRegistrationComponent } from "./components/Dealer/DealerRegistrationComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { AdminLoginComponent } from "./components/Admin/AdminLoginComponent";
import { LandingComponent } from "./components/LandingComponent";
import UpdateVenueComponent from "./components/Venue/UpdateVenueComponent";
import HeaderState from "./contexts/HeaderState";
import ViewUsersComponent from "./components/Admin/ViewUsersComponent";
import ManageVenueRequestsComponent from "./components/Dealer/ManageVenueRequestsComponent";
import RequestPaymentComponent from "./components/Dealer/RequestPaymentComponent";
import ConfirmPaymentComponent from "./components/Customer/ConfirmPaymentComponent";
import UserState from "./contexts/UserState";
import { VenueRegistrationComponent } from "./components/Venue/VenueRegistrationComponent";
import { UpdateCustomerComponent } from "./components/Customer/UpdateCustomerComponent";
import headerContext from "./contexts/headerContext";


function App() {
  return (
    <HeaderState>
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
            <Route path="/dealerRegistration" element={<DealerRegistrationComponent />} />
            <Route path="/updateDealer" element={<UpdateDealerComponent />} />
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
            <Route path="/updateDealer" element={<UpdateDealerComponent />} />
            <Route
              path="/viewVenueStatus"
              element={<ViewVenueStatusComponent />}
            />

            {/* Venue components */}
            <Route path="/venueRegistration" element={<VenueRegistrationComponent />} />
            <Route path="/updateVenue" element={<UpdateVenueComponent />} />

            {/* Customer components */}
            <Route path="/customerLogin" element={<CustomerLoginComponent />} />
            <Route
              path="/customerRegistration"
              element={<CustomerRegistrationComponent />}
            />
            <Route path="/searchVenue" element={<SearchVenueComponent />} />
            <Route path="/bookVenue" element={<BookVenueComponent />} />
            <Route path="/updateCustomer" element={<UpdateCustomerComponent />} />
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
    </HeaderState>
  );
}

export default App;
