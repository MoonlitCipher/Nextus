import {
  Bell,
  ChevronRight,
  Home,
  MapPin,
  Package,
  Search,
  User,
  ClipboardList,
  Truck,
  Navigation,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function CustomerHome() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* HEADER */}
      <header className="top-header">

        <div className="brand-row">

          <div className="brand-logo">
            <Truck size={30} />
          </div>

          <div>
            <h1>PDMS</h1>
            <p>Parcel • Delivery • Management</p>
          </div>

        </div>

        <div className="location">
          <MapPin size={20} />
          <span>Nagercoil</span>
          <ChevronRight size={18} />
        </div>

        <button
          className="notification-btn"
          onClick={() => navigate("/customer/notifications")}
        >
          <Bell size={23} />
          <span></span>
        </button>

      </header>

      {/* SEARCH */}
      <div className="search-box">

        <Search size={23} />

        <input
          type="text"
          placeholder="Where are you sending today?"
        />

      </div>

      <main>

        {/* HERO BANNER */}
        <section className="hero-banner">

          <div className="hero-content">

            <p className="hero-small">
              FAST & SAFE
            </p>

            <h2>
              Parcel Delivery
              <br />
              <span>At Your Door</span>
            </h2>

            <p className="hero-description">
              Quick pickup • Safe delivery • Live tracking
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/customer/book")}
            >
              Book Delivery
              <ChevronRight size={20} />
            </button>

          </div>

          <div className="hero-graphic">

            <div className="parcel-box">
              <Package size={78} />
            </div>

            <div className="route-line"></div>

            <div className="delivery-pin">
              <Navigation size={28} />
            </div>

          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="section">

          <div className="section-title">
            <h3>Quick Actions</h3>
          </div>

          <div className="quick-actions">

            {/* BOOK PARCEL */}
            <div
              className="quick-item"
              onClick={() => navigate("/customer/book")}
            >
              <div className="quick-icon">
                <Package />
              </div>

              <span>Book Parcel</span>
            </div>

            {/* TRACK PARCEL */}
            <div
              className="quick-item"
              onClick={() => navigate("/customer/track")}
            >
              <div className="quick-icon">
                <Navigation />
              </div>

              <span>Track Parcel</span>
            </div>

            {/* MY ORDERS */}
            <div
              className="quick-item"
              onClick={() => navigate("/customer/orders")}
            >
              <div className="quick-icon">
                <ClipboardList />
              </div>

              <span>My Orders</span>
            </div>

            {/* ADDRESSES */}
            <div
              className="quick-item"
              onClick={() => navigate("/customer/addresses")}
            >
              <div className="quick-icon">
                <MapPin />
              </div>

              <span>Addresses</span>
            </div>

          </div>

        </section>

        {/* ACTIVE DELIVERY */}
        <section className="section">

          <div className="section-heading">

            <h3>Active Delivery</h3>

            <span className="live-status">
              ● LIVE
            </span>

          </div>

          <div
            className="active-card"
            onClick={() =>
              navigate("/customer/order/PDMS-10246")
            }
          >

            <div className="active-top">

              <div className="delivery-id">

                <div className="small-icon">
                  <Truck size={20} />
                </div>

                <div>
                  <strong>PDMS-10246</strong>
                  <span>Express Delivery</span>
                </div>

              </div>

              <span className="status-badge">
                In Transit
              </span>

            </div>

            <div className="delivery-route">

              <div className="route-point">

                <span className="route-dot pickup"></span>

                <div>
                  <small>Pickup</small>
                  <strong>Parvathipuram</strong>
                </div>

              </div>

              <div className="route-connector"></div>

              <div className="route-point">

                <span className="route-dot destination"></span>

                <div>
                  <small>Destination</small>
                  <strong>Nagercoil</strong>
                </div>

              </div>

            </div>

            <div className="active-footer">

              <div className="arrival">

                <Clock3 size={18} />

                <span>
                  Arriving in <strong>18 min</strong>
                </span>

              </div>

              <button
                className="outline-btn"
                onClick={(event) => {
                  event.stopPropagation();
                  navigate("/customer/track");
                }}
              >
                Track
                <ArrowUpRight size={17} />
              </button>

            </div>

          </div>

        </section>

        {/* RECENT DELIVERIES */}
        <section className="section">

          <div className="section-heading">

            <h3>Recent Deliveries</h3>

            <button
              className="see-all"
              onClick={() => navigate("/customer/orders")}
            >
              See All
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="delivery-list">

            {/* ORDER 1 */}
            <div
              className="delivery-card"
              onClick={() =>
                navigate("/customer/order/PDMS-10231")
              }
            >

              <div className="delivery-card-icon">
                <Package />
              </div>

              <div className="delivery-info">

                <strong>PDMS-10231</strong>

                <span>
                  Nagercoil → Kanyakumari
                </span>

                <small>
                  Yesterday
                </small>

              </div>

              <div className="delivery-price">

                <strong>₹120</strong>

                <span className="delivered">
                  Delivered
                </span>

              </div>

            </div>

            {/* ORDER 2 */}
            <div
              className="delivery-card"
              onClick={() =>
                navigate("/customer/order/PDMS-10218")
              }
            >

              <div className="delivery-card-icon">
                <Package />
              </div>

              <div className="delivery-info">

                <strong>PDMS-10218</strong>

                <span>
                  Colachel → Nagercoil
                </span>

                <small>
                  28 Sep 2026
                </small>

              </div>

              <div className="delivery-price">

                <strong>₹180</strong>

                <span className="delivered">
                  Delivered
                </span>

              </div>

            </div>

            {/* ORDER 3 */}
            <div
              className="delivery-card"
              onClick={() =>
                navigate("/customer/order/PDMS-10197")
              }
            >

              <div className="delivery-card-icon">
                <Package />
              </div>

              <div className="delivery-info">

                <strong>PDMS-10197</strong>

                <span>
                  Suchindram → Nagercoil
                </span>

                <small>
                  26 Sep 2026
                </small>

              </div>

              <div className="delivery-price">

                <strong>₹150</strong>

                <span className="delivered">
                  Delivered
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* OFFER */}
        <section className="offer-banner">

          <div>

            <span>
              🎁 SPECIAL OFFER
            </span>

            <h3>
              Get ₹50 OFF
              <br />
              your first delivery
            </h3>

            <button
              onClick={() => navigate("/customer/book")}
            >
              Book Now
              <ChevronRight size={18} />
            </button>

          </div>

          <Package size={95} />

        </section>

      </main>

      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">

        {/* HOME */}
        <div
          className="nav-item active"
          onClick={() => navigate("/customer")}
        >
          <Home />
          <span>Home</span>
        </div>

        {/* DELIVER */}
        <div
          className="nav-item"
          onClick={() => navigate("/customer/book")}
        >
          <Package />
          <span>Deliver</span>
        </div>

        {/* ORDERS */}
        <div
          className="nav-item"
          onClick={() => navigate("/customer/orders")}
        >
          <ClipboardList />
          <span>Orders</span>
        </div>

        {/* ACCOUNT */}
        <div
          className="nav-item"
          onClick={() => navigate("/customer/profile")}
        >
          <User />
          <span>Account</span>
        </div>

      </nav>

    </div>
  );
}

export default CustomerHome;