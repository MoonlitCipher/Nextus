import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CustomerHome from "./pages/customer/CustomerHome";
import CustomerLogin from "./pages/auth/CustomerLogin";
import CustomerRegister from "./pages/auth/CustomerRegister";
import BookDelivery from "./pages/customer/BookDelivery";
import PackageDetails from "./pages/customer/PackageDetails";
import FareEstimate from "./pages/customer/FareEstimate";
import Payment from "./pages/customer/Payment";
import BookingConfirmation from "./pages/customer/BookingConfirmation";
import TrackDelivery from "./pages/customer/TrackDelivery";
import Orders from "./pages/customer/Orders";
import OrderDetails from "./pages/customer/OrderDetails";
import Profile from "./pages/customer/Profile";
import Notifications from "./pages/customer/Notifications";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/customer/login" replace />}
        />

        <Route
          path="/customer/login"
          element={<CustomerLogin />}
        />

        <Route
          path="/customer/register"
          element={<CustomerRegister />}
        />

        <Route
          path="/customer"
          element={<CustomerHome />}
        />

        <Route
          path="/customer/book"
          element={<BookDelivery />}
        />

        <Route
          path="/customer/package"
          element={<PackageDetails />}
        />

        <Route
          path="/customer/fare"
          element={<FareEstimate />}
        />

        <Route
          path="/customer/payment"
          element={<Payment />}
        />

        <Route
          path="/customer/confirmation"
          element={<BookingConfirmation />}
        />

        <Route
          path="/customer/confirmation"
          element={<BookingConfirmation />}
        />

        <Route
          path="/customer/track"
          element={<TrackDelivery />}
        />

        <Route
          path="/customer/orders"
          element={<Orders />}
        />

        <Route path="/customer/order/:id" element={<OrderDetails />} />

        <Route
          path="/customer/profile"
          element={<Profile />}
        />

        <Route
          path="/customer/notifications"
          element={<Notifications />}
        />
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;