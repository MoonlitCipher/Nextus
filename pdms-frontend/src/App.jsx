import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";

import Landing from "./pages/landing/Landing";
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


/* Bright particle backdrop on every page except the landing hero (which has its own video) */
function Backdrop() {
  const { pathname } = useLocation();
  const show = pathname !== "/";

  useEffect(() => {
    document.body.classList.toggle("has-particles", show);
    return () => document.body.classList.remove("has-particles");
  }, [show]);

  return show ? <ParticleBackground /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <Backdrop />

      <Routes>

        <Route
          path="/"
          element={<Landing />}
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