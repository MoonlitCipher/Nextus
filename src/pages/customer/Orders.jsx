import {
  ArrowLeft,
  Package,
  ChevronRight,
  Truck,
  CheckCircle,
  Clock3,
  XCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Orders() {
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
          <h1>My Orders</h1>
          <p>View and manage your deliveries</p>
        </div>

      </header>

      <main className="orders-page">

        {/* FILTERS */}
        <div className="order-filters">

          <button className="filter-btn active">
            All
          </button>

          <button className="filter-btn">
            Active
          </button>

          <button className="filter-btn">
            Delivered
          </button>

          <button className="filter-btn">
            Cancelled
          </button>

        </div>

        {/* ACTIVE ORDER */}
        <section className="order-section">

          <h2>Active Delivery</h2>

          <div
            className="order-card active-order"
            onClick={() =>
              navigate("/customer/order/PDMS-10246")
            }
          >

            <div className="order-card-top">

              <div className="order-icon">
                <Truck size={22} />
              </div>

              <div className="order-main-info">

                <strong>PDMS-10246</strong>

                <span>
                  Parvathipuram → Nagercoil
                </span>

              </div>

              <ChevronRight size={20} />

            </div>

            <div className="order-status-row">

              <span className="order-status transit">
                In Transit
              </span>

              <strong>₹160</strong>

            </div>

            <div className="order-progress">

              <div className="order-progress-line">
                <span className="progress-filled"></span>
              </div>

              <div className="progress-labels">
                <span>Picked Up</span>
                <span>In Transit</span>
                <span>Delivery</span>
              </div>

            </div>

          </div>

        </section>

        {/* RECENT ORDERS */}
        <section className="order-section">

          <h2>Recent Orders</h2>

          {/* ORDER 1 */}
          <div
            className="order-card"
            onClick={() =>
              navigate("/customer/order/PDMS-10231")
            }
          >

            <div className="order-card-top">

              <div className="order-icon">
                <Package size={22} />
              </div>

              <div className="order-main-info">

                <strong>PDMS-10231</strong>

                <span>
                  Nagercoil → Kanyakumari
                </span>

                <small>
                  Yesterday
                </small>

              </div>

              <ChevronRight size={20} />

            </div>

            <div className="order-bottom">

              <span className="order-status delivered-status">
                <CheckCircle size={14} />
                Delivered
              </span>

              <strong>₹120</strong>

            </div>

          </div>

          {/* ORDER 2 */}
          <div
            className="order-card"
            onClick={() =>
              navigate("/customer/order/PDMS-10218")
            }
          >

            <div className="order-card-top">

              <div className="order-icon">
                <Package size={22} />
              </div>

              <div className="order-main-info">

                <strong>PDMS-10218</strong>

                <span>
                  Colachel → Nagercoil
                </span>

                <small>
                  28 Sep 2026
                </small>

              </div>

              <ChevronRight size={20} />

            </div>

            <div className="order-bottom">

              <span className="order-status delivered-status">
                <CheckCircle size={14} />
                Delivered
              </span>

              <strong>₹180</strong>

            </div>

          </div>

          {/* ORDER 3 */}
          <div
            className="order-card"
            onClick={() =>
              navigate("/customer/order/PDMS-10197")
            }
          >

            <div className="order-card-top">

              <div className="order-icon">
                <Package size={22} />
              </div>

              <div className="order-main-info">

                <strong>PDMS-10197</strong>

                <span>
                  Suchindram → Nagercoil
                </span>

                <small>
                  26 Sep 2026
                </small>

              </div>

              <ChevronRight size={20} />

            </div>

            <div className="order-bottom">

              <span className="order-status delivered-status">
                <CheckCircle size={14} />
                Delivered
              </span>

              <strong>₹150</strong>

            </div>

          </div>

          {/* ORDER 4 */}
          <div
            className="order-card"
            onClick={() =>
              navigate("/customer/order/PDMS-10182")
            }
          >

            <div className="order-card-top">

              <div className="order-icon">
                <XCircle size={22} />
              </div>

              <div className="order-main-info">

                <strong>PDMS-10182</strong>

                <span>
                  Nagercoil → Marthandam
                </span>

                <small>
                  24 Sep 2026
                </small>

              </div>

              <ChevronRight size={20} />

            </div>

            <div className="order-bottom">

              <span className="order-status cancelled-status">
                <XCircle size={14} />
                Cancelled
              </span>

              <strong>₹0</strong>

            </div>

          </div>

        </section>

        {/* INFO */}
        <div className="orders-info">

          <Clock3 size={18} />

          <span>
            Your recent delivery history will appear here.
          </span>

        </div>

      </main>

    </div>
  );
}

export default Orders;