import {
  ArrowLeft,
  MapPin,
  Package,
  Truck,
  CreditCard,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function FareEstimate() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* HEADER */}
      <header className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/package")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Fare Estimate</h1>
          <p>Review your delivery cost</p>
        </div>

      </header>

      <main className="form-page">

        {/* PROGRESS */}
        <div className="booking-progress">

          <div className="progress-step completed">
            <span>✓</span>
            <p>Route</p>
          </div>

          <div className="progress-line active"></div>

          <div className="progress-step completed">
            <span>✓</span>
            <p>Package</p>
          </div>

          <div className="progress-line active"></div>

          <div className="progress-step active">
            <span>3</span>
            <p>Payment</p>
          </div>

        </div>

        {/* ROUTE SUMMARY */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <MapPin size={21} />
            </div>

            <div>
              <h2>Delivery Route</h2>
              <p>Your selected pickup and destination</p>
            </div>

          </div>

          <div className="summary-route">

            <div className="summary-point">
              <span className="location-dot pickup-dot"></span>

              <div>
                <small>Pickup</small>
                <strong>Parvathipuram</strong>
              </div>
            </div>

            <div className="summary-line"></div>

            <div className="summary-point">
              <span className="location-dot destination-dot"></span>

              <div>
                <small>Destination</small>
                <strong>Nagercoil</strong>
              </div>
            </div>

          </div>

        </section>

        {/* PACKAGE SUMMARY */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Package size={21} />
            </div>

            <div>
              <h2>Package</h2>
              <p>Delivery package information</p>
            </div>

          </div>

          <div className="fare-info-row">
            <span>Package Type</span>
            <strong>Small Parcel</strong>
          </div>

          <div className="fare-info-row">
            <span>Weight</span>
            <strong>1 KG</strong>
          </div>

          <div className="fare-info-row">
            <span>Delivery Type</span>
            <strong>Express</strong>
          </div>

        </section>

        {/* FARE BREAKDOWN */}
        <section className="fare-card">

          <div className="fare-title">
            <Truck size={22} />
            <h2>Fare Breakdown</h2>
          </div>

          <div className="fare-row">
            <span>Base Fare</span>
            <strong>₹80</strong>
          </div>

          <div className="fare-row">
            <span>Distance Charge</span>
            <strong>₹50</strong>
          </div>

          <div className="fare-row">
            <span>Express Charge</span>
            <strong>₹30</strong>
          </div>

          <div className="fare-divider"></div>

          <div className="fare-total">
            <span>Total Fare</span>
            <strong>₹160</strong>
          </div>

        </section>

        {/* PAYMENT */}
        <section className="payment-method-card">

          <div className="payment-icon">
            <CreditCard size={22} />
          </div>

          <div>
            <strong>Payment</strong>
            <span>Choose payment method on next step</span>
          </div>

          <ChevronRight size={20} />

        </section>

        {/* CONTINUE */}
        <button
          className="continue-btn"
          onClick={() => navigate("/customer/payment")}
        >
          Proceed to Payment
          <ChevronRight size={20} />
        </button>

      </main>

    </div>
  );
}

export default FareEstimate;