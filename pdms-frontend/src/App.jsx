import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Landing from "./pages/landing/Landing";
import { CustomerProvider, useCustomer } from "./customer/CustomerContext";
import { LoginPage, RegisterPage } from "./pages/auth/AuthPages";
import {
  AddressesPage, BookingPage, ConfirmationPage, DashboardPage, InvoicePage,
  NotificationsPage, OrderDetailsPage, OrdersPage, ProfilePage, ReviewPage,
  SupportPage, TrackingPage,
} from "./pages/customer/CustomerPages";

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

function Protected({ children }) {
  const { user } = useCustomer();
  return user ? children : <Navigate to="/customer/login" replace />;
}

export default function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Backdrop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customer/login" element={<LoginPage />} />
          <Route path="/customer/register" element={<RegisterPage />} />
          <Route path="/customer" element={<Protected><DashboardPage /></Protected>} />
          <Route path="/customer/book" element={<Protected><BookingPage /></Protected>} />
          <Route path="/customer/package" element={<Protected><BookingPage initialStep={2} /></Protected>} />
          <Route path="/customer/fare" element={<Protected><BookingPage initialStep={3} /></Protected>} />
          <Route path="/customer/payment" element={<Protected><BookingPage initialStep={3} /></Protected>} />
          <Route path="/customer/confirmation" element={<Protected><ConfirmationPage /></Protected>} />
          <Route path="/customer/track" element={<Protected><TrackingPage /></Protected>} />
          <Route path="/customer/orders" element={<Protected><OrdersPage /></Protected>} />
          <Route path="/customer/order/:id" element={<Protected><OrderDetailsPage /></Protected>} />
          <Route path="/customer/profile" element={<Protected><ProfilePage /></Protected>} />
          <Route path="/customer/notifications" element={<Protected><NotificationsPage /></Protected>} />
          <Route path="/customer/addresses" element={<Protected><AddressesPage /></Protected>} />
          <Route path="/customer/support" element={<Protected><SupportPage /></Protected>} />
          <Route path="/customer/review/:id" element={<Protected><ReviewPage /></Protected>} />
          <Route path="/customer/invoice/:id" element={<Protected><InvoicePage /></Protected>} />
          <Route path="*" element={<Navigate to="/customer" replace />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}
