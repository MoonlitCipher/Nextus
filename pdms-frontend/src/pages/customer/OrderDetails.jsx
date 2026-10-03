import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  CheckCircle,
  Truck,
  Clock3,
  Headphones,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import "./OrderDetails.css";
function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const orderId = id || "PDMS-10246";

  return (
    <div className="app">

      {/* HEADER */}
      <header className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/orders")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Order Details</h1>
          <p>{orderId}</p>
        </div>

      </header>

      <main className="order-details-page">

        {/* STATUS */}
        <div className="details-status-card">

          <div className="details-status-icon">
            <Truck size={26} />
          </div>

          <div className="details-status-content">
            <strong>In Transit</strong>
            <span>Your parcel is on the way</span>
          </div>

          <span className="details-live-badge">
            LIVE
          </span>

        </div>

        {/* DELIVERY ROUTE */}
        <section className="details-card">

          <div className="details-card-heading">
            <div className="details-heading-icon">
              <MapPin size={18} />
            </div>

            <h2>Delivery Route</h2>
          </div>

          <div className="order-route">

            {/* PICKUP */}
            <div className="order-route-item">

              <div className="order-route-marker pickup-marker">
                <MapPin size={17} />
              </div>

              <div className="order-route-content">
                <small>Pickup Location</small>
                <strong>Parvathipuram</strong>
              </div>

            </div>

            <div className="order-route-line"></div>

            {/* DESTINATION */}
            <div className="order-route-item">

              <div className="order-route-marker destination-marker">
                <MapPin size={17} />
              </div>

              <div className="order-route-content">
                <small>Delivery Location</small>
                <strong>Nagercoil</strong>
              </div>

            </div>

          </div>

        </section>

        {/* PACKAGE DETAILS */}
        <section className="details-card">

          <div className="details-card-heading">

            <div className="details-heading-icon">
              <Package size={18} />
            </div>

            <h2>Package Details</h2>

          </div>

          <div className="detail-row">
            <span>Package Type</span>
            <strong>Documents</strong>
          </div>

          <div className="detail-row">
            <span>Weight</span>
            <strong>1 kg</strong>
          </div>

          <div className="detail-row last-row">
            <span>Description</span>
            <strong>Important documents</strong>
          </div>

        </section>

        {/* PAYMENT DETAILS */}
        <section className="details-card">

          <div className="details-card-heading">

            <div className="details-heading-icon">
              <CreditCard size={18} />
            </div>

            <h2>Payment Details</h2>

          </div>

          <div className="detail-row">
            <span>Base Fare</span>
            <strong>₹80</strong>
          </div>

          <div className="detail-row">
            <span>Distance Charge</span>
            <strong>₹50</strong>
          </div>

          <div className="detail-row">
            <span>Express Delivery</span>
            <strong>₹30</strong>
          </div>

          <div className="detail-divider"></div>

          <div className="detail-row total-row">

            <span>Total Amount</span>

            <strong>₹160</strong>

          </div>

          <div className="payment-method">

            <CreditCard size={17} />

            <span>Paid using UPI</span>

          </div>

        </section>

        {/* DELIVERY TIMELINE */}
        <section className="details-card">

          <div className="details-card-heading">

            <div className="details-heading-icon">
              <Clock3 size={18} />
            </div>

            <h2>Delivery Timeline</h2>

          </div>

          <div className="order-timeline">

            {/* STEP 1 */}
            <div className="timeline-item completed">

              <div className="timeline-icon">
                <CheckCircle size={17} />
              </div>

              <div className="timeline-content">
                <strong>Booking Confirmed</strong>
                <span>2:10 PM</span>
              </div>

            </div>

            {/* STEP 2 */}
            <div className="timeline-item completed">

              <div className="timeline-icon">
                <CheckCircle size={17} />
              </div>

              <div className="timeline-content">
                <strong>Pickup Completed</strong>
                <span>2:35 PM</span>
              </div>

            </div>

            {/* STEP 3 */}
            <div className="timeline-item current">

              <div className="timeline-icon">
                <Truck size={17} />
              </div>

              <div className="timeline-content">
                <strong>In Transit</strong>
                <span>Expected delivery in 18 minutes</span>
              </div>

            </div>

            {/* STEP 4 */}
            <div className="timeline-item pending">

              <div className="timeline-icon">
                <Clock3 size={17} />
              </div>

              <div className="timeline-content">
                <strong>Delivered</strong>
                <span>Waiting for delivery</span>
              </div>

            </div>

          </div>

        </section>

        {/* ACTIONS */}
        <div className="details-actions">

          <button
            className="details-track-btn"
            onClick={() => navigate("/customer/track")}
          >
            <Truck size={19} />
            Track Delivery
          </button>

          <button className="details-support-btn">
            <Headphones size={18} />
            Contact Support
          </button>

        </div>

      </main>

    </div>
  );
}

export default OrderDetails;