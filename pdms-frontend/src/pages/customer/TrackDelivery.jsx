import {
  ArrowLeft,
  MapPin,
  Package,
  Truck,
  Phone,
  MessageCircle,
  Check,
  Clock3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function TrackDelivery() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* HEADER */}
      <header className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate("/customer")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Track Delivery</h1>
          <p>Follow your parcel in real time</p>
        </div>

      </header>

      <main className="tracking-page">

        {/* ORDER STATUS */}
        <section className="tracking-status-card">

          <div className="tracking-status-top">

            <div>
              <span>Booking ID</span>
              <strong>PDMS-10246</strong>
            </div>

            <span className="status-badge">
              In Transit
            </span>

          </div>

          <div className="tracking-route-text">

            <div>
              <small>From</small>
              <strong>Parvathipuram</strong>
            </div>

            <span>→</span>

            <div>
              <small>To</small>
              <strong>Nagercoil</strong>
            </div>

          </div>

        </section>

        {/* MAP */}
        <section className="tracking-map">

          <div className="map-grid"></div>

          <div className="map-route"></div>

          <div className="map-pin pickup-map-pin">
            <MapPin size={20} />
          </div>

          <div className="delivery-vehicle">
            <Truck size={25} />
          </div>

          <div className="map-pin destination-map-pin">
            <MapPin size={20} />
          </div>

          <div className="map-label pickup-label">
            Pickup
          </div>

          <div className="map-label destination-label">
            Destination
          </div>

        </section>

        {/* ETA */}
        <section className="eta-card">

          <div className="eta-icon">
            <Clock3 size={24} />
          </div>

          <div>
            <span>Estimated Arrival</span>
            <strong>18 minutes</strong>
          </div>

          <div className="eta-live">
            ● LIVE
          </div>

        </section>

        {/* DELIVERY PARTNER */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Truck size={21} />
            </div>

            <div>
              <h2>Delivery Partner</h2>
              <p>Your parcel is currently with the partner</p>
            </div>

          </div>

          <div className="partner-card">

            <div className="partner-avatar">
              RK
            </div>

            <div className="partner-details">
              <strong>Raj Kumar</strong>
              <span>PDMS Delivery Partner</span>
              <small>⭐ 4.8 • 326 deliveries</small>
            </div>

          </div>

          <div className="partner-actions">

            <button>
              <Phone size={18} />
              Call
            </button>

            <button>
              <MessageCircle size={18} />
              Message
            </button>

          </div>

        </section>

        {/* DELIVERY TIMELINE */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Package size={21} />
            </div>

            <div>
              <h2>Delivery Status</h2>
              <p>Current delivery progress</p>
            </div>

          </div>

          <div className="tracking-timeline">

            <div className="timeline-item completed">

              <div className="timeline-icon">
                <Check size={16} />
              </div>

              <div>
                <strong>Booking Confirmed</strong>
                <span>10:12 AM</span>
              </div>

            </div>

            <div className="timeline-item completed">

              <div className="timeline-icon">
                <Check size={16} />
              </div>

              <div>
                <strong>Pickup Completed</strong>
                <span>10:35 AM</span>
              </div>

            </div>

            <div className="timeline-item current">

              <div className="timeline-icon">
                <Truck size={16} />
              </div>

              <div>
                <strong>Parcel In Transit</strong>
                <span>Currently on the way</span>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-icon">
                <MapPin size={16} />
              </div>

              <div>
                <strong>Delivered</strong>
                <span>Estimated 10:53 AM</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default TrackDelivery;