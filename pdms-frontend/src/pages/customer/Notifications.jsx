import {
  ArrowLeft,
  Bell,
  Truck,
  CheckCircle,
  CreditCard,
  Gift,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="app">

      <header className="page-header">
        <button
          className="back-btn"
          onClick={() => navigate("/customer")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Notifications</h1>
          <p>Your latest delivery updates</p>
        </div>
      </header>

      <main className="notifications-page">

        {/* TOP SUMMARY */}
        <div className="notification-summary">
          <div className="notification-summary-icon">
            <Bell size={24} />
          </div>

          <div>
            <strong>Notifications</strong>
            <span>You have 2 new updates</span>
          </div>

          <button className="clear-btn">
            Clear
          </button>
        </div>

        {/* TODAY */}
        <section className="notification-group">

          <h2>Today</h2>

          <div
            className="notification-item unread"
            onClick={() => navigate("/customer/track")}
          >
            <div className="notification-item-icon delivery">
              <Truck size={21} />
            </div>

            <div className="notification-item-content">
              <div className="notification-item-title">
                <strong>Delivery is on the way</strong>
                <span className="new-dot"></span>
              </div>

              <p>
                Your parcel <b>PDMS-10245</b> is currently in transit.
              </p>

              <small>10 minutes ago</small>
            </div>

            <ChevronRight size={18} />
          </div>

          <div className="notification-item unread">

            <div className="notification-item-icon payment">
              <CreditCard size={21} />
            </div>

            <div className="notification-item-content">
              <div className="notification-item-title">
                <strong>Payment successful</strong>
                <span className="new-dot"></span>
              </div>

              <p>
                Your payment of <b>₹160</b> for PDMS-10245 was successful.
              </p>

              <small>35 minutes ago</small>
            </div>

            <ChevronRight size={18} />

          </div>

        </section>

        {/* YESTERDAY */}
        <section className="notification-group">

          <h2>Yesterday</h2>

          <div className="notification-item">

            <div className="notification-item-icon delivered">
              <CheckCircle size={21} />
            </div>

            <div className="notification-item-content">

              <strong>Delivery completed</strong>

              <p>
                Your parcel <b>PDMS-10231</b> was successfully delivered.
              </p>

              <small>Yesterday, 5:42 PM</small>

            </div>

            <ChevronRight size={18} />

          </div>

          <div className="notification-item">

            <div className="notification-item-icon offer">
              <Gift size={21} />
            </div>

            <div className="notification-item-content">

              <strong>Special offer</strong>

              <p>
                Get <b>₹50 OFF</b> on your first delivery.
              </p>

              <small>Yesterday, 11:20 AM</small>

            </div>

            <ChevronRight size={18} />

          </div>

        </section>

        {/* EARLIER */}
        <section className="notification-group">

          <h2>Earlier</h2>

          <div className="notification-item">

            <div className="notification-item-icon welcome">
              <Bell size={21} />
            </div>

            <div className="notification-item-content">

              <strong>Welcome to PDMS</strong>

              <p>
                Your customer account has been successfully created.
              </p>

              <small>28 Sep 2026</small>

            </div>

            <ChevronRight size={18} />

          </div>

        </section>

        {/* END MESSAGE */}
        <div className="notification-end">
          <CheckCircle size={18} />
          <span>You're all caught up</span>
        </div>

      </main>

    </div>
  );
}

export default Notifications;
