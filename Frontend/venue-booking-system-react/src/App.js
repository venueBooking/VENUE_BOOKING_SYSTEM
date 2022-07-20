import { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookVenueComponent from "./components/Customer/BookVenueComponent";
import SearchVenueComponent from "./components/Customer/SearchVenueComponent";
import ViewVenueStatusComponent from "./components/Dealer/ViewVenueStatusComponent";
import { DealerLoginComponent } from './components/Dealer/DealerLoginComponent';
import { HeaderComponent } from "./components/HeaderComponent";
import { LandingComponent } from "./components/LandingComponent";
import UpdateVenueComponent from "./components/Venue/UpdateVenueComponent";
import HeaderState from "./contexts/HeaderState";

function App() {
  return (
    <HeaderState>
      <Router>
        <div id="main-flex">
          {/* Header Component */}
          <HeaderComponent />

          <Routes>
            {/* Landing Component */}
            <Route path="/" element={<LandingComponent />} />

            {/* Dealer components */}
            <Route path="/dealerLogin" element={<DealerLoginComponent />} />
            {/* <Route path="/dealerRegistration" element={<DealerRegistrationComponent />} />
            <Route path="/manageVenueRequests" element={<ManageVenueRequestsComponent />} />
            <Route path="/requestPayment" element={<RequestPaymentComponent />} />
            <Route path="/updateDealer" element={<UpdateDealerComponent />} /> */}
            <Route path="/viewVenueStatus" element={<ViewVenueStatusComponent />} />

            {/* Venue components */}
            {/* <Route path="/venueRegistration" element={<VenueRegistrationComponent />} /> */}
            <Route path="/updateVenue" element={<UpdateVenueComponent />} />

            {/* Customer components */}
            {/* <Route path="/customerLogin" element={<CustomerLoginComponent />} />
            <Route path="/customerRegistration" element={<CustomerRegistrationComponent />} /> */}
            <Route path="/searchVenue" element={<SearchVenueComponent />} />
            <Route path="/bookVenue" element={<BookVenueComponent />} />
            {/* <Route path="/confirmPayment" element={<ConfirmPaymentComponent />} />
            <Route path="/updateCustomer" element={<UpdateCustomerComponent />} /> */}

            {/* Admin components */}
            {/* <Route path="/adminLogin" element={<AdminLoginComponent />} />
            <Route path="/viewUser" element={<ViewUsersComponent />} /> */}
          </Routes>
        </div>
      </Router>
    </HeaderState >
  );
}

export default App;
