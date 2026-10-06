import {
  CheckCircle,
  Package,
  CreditCard,
  Truck,
  Navigation,
  Home,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* HEADER */}
      <header className="confirmation-header">

        <div className="success-icon">
          <CheckCircle size={52} />
        </div>

        <h1>Booking Confirmed!</h1>

        <p>
          Your parcel delivery has been successfully booked.
        </p>

      </header>

      <main className="confirmation-page">

        {/* BOOKING ID */}
        <section className="booking-id-card">

          <span>Booking ID</span>

          <strong>PDMS-10246</strong>

          <small>
            Keep this ID for tracking your delivery
          </small>

        </section>

        {/* DELIVERY SUMMARY */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Truck size={21} />
            </div>

            <div>
              <h2>Delivery Summary</h2>
              <p>Your parcel is ready for pickup</p>
            </div>

          </div>

          <div className="confirmation-route">

            <div className="confirmation-point">

              <span className="location-dot pickup-dot"></span>

              <div>
                <small>Pickup Location</small>
                <strong>Parvathipuram</strong>
              </div>

            </div>

            <div className="confirmation-line"></div>

            <div className="confirmation-point">

              <span className="location-dot destination-dot"></span>

              <div>
                <small>Destination</small>
                <strong>Nagercoil</strong>
              </div>

            </div>

          </div>

        </section>

        {/* PACKAGE */}
        <section className="confirmation-info-card">

          <div className="confirmation-info-icon">
            <Package size={22} />
          </div>

          <div>
            <span>Package</span>
            <strong>Small Parcel • 1 KG</strong>
          </div>

        </section>

        {/* PAYMENT */}
        <section className="confirmation-info-card">

          <div className="confirmation-info-icon">
            <CreditCard size={22} />
          </div>

          <div>
            <span>Payment</span>
            <strong>UPI • ₹160</strong>
          </div>

        </section>

        {/* DRIVER STATUS */}
        <section className="driver-status-card">

          <div className="driver-status-icon">
            <Navigation size={24} />
          </div>

          <div>
            <strong>Finding a delivery partner</strong>
            <span>
              We are assigning the nearest available partner.
            </span>
          </div>

        </section>

        {/* TRACK */}
        <button
          className="continue-btn"
          onClick={() => navigate("/customer/track")}
        >
          Track Delivery
          <ArrowRight size={20} />
        </button>

        {/* HOME */}
        <button
          className="home-outline-btn"
          onClick={() => navigate("/customer")}
        >
          <Home size={18} />
          Back to Home
        </button>

        {/* ORDERS */}
        <button
          className="orders-link-btn"
          onClick={() => navigate("/customer/orders")}
        >
          <ClipboardList size={17} />
          View My Orders
        </button>

      </main>

    </div>
  );
}

export default BookingConfirmation;