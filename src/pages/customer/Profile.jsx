import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Package,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Profile() {
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
          <h1>My Account</h1>
          <p>Manage your profile and settings</p>
        </div>

      </header>

      <main className="profile-page">

        {/* PROFILE CARD */}
        <section className="profile-card">

          <div className="profile-avatar">
            <User size={32} />
          </div>

          <div className="profile-info">
            <h2>Devi Kumar</h2>
            <p>Customer</p>
          </div>

          <button className="edit-profile-btn">
            Edit
          </button>

        </section>

        {/* CONTACT INFORMATION */}
        <section className="profile-section">

          <h2>Personal Information</h2>

          <div className="profile-info-row">
            <div className="profile-row-icon">
              <Phone size={18} />
            </div>

            <div>
              <small>Mobile Number</small>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-row-icon">
              <Mail size={18} />
            </div>

            <div>
              <small>Email Address</small>
              <strong>customer@example.com</strong>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-row-icon">
              <MapPin size={18} />
            </div>

            <div>
              <small>Default Address</small>
              <strong>Nagercoil, Tamil Nadu</strong>
            </div>
          </div>

        </section>

        {/* QUICK MENU */}
        <section className="profile-section">

          <h2>My Activity</h2>

          <div
            className="profile-menu"
            onClick={() => navigate("/customer/orders")}
          >
            <div className="profile-menu-icon">
              <Package size={19} />
            </div>

            <div className="profile-menu-text">
              <strong>My Orders</strong>
              <span>View your delivery history</span>
            </div>

            <ChevronRight size={19} />
          </div>

          <div className="profile-menu">
            <div className="profile-menu-icon">
              <MapPin size={19} />
            </div>

            <div className="profile-menu-text">
              <strong>Saved Addresses</strong>
              <span>Manage pickup and delivery addresses</span>
            </div>

            <ChevronRight size={19} />
          </div>

        </section>

        {/* SETTINGS */}
        <section className="profile-section">

          <h2>Settings & Support</h2>

          <div className="profile-menu">

            <div className="profile-menu-icon">
              <Bell size={19} />
            </div>

            <div className="profile-menu-text">
              <strong>Notifications</strong>
              <span>Manage notification preferences</span>
            </div>

            <ChevronRight size={19} />

          </div>

          <div className="profile-menu">

            <div className="profile-menu-icon">
              <HelpCircle size={19} />
            </div>

            <div className="profile-menu-text">
              <strong>Help & Support</strong>
              <span>Get help with your deliveries</span>
            </div>

            <ChevronRight size={19} />

          </div>

        </section>

        {/* LOGOUT */}
        <button className="profile-logout">

          <LogOut size={19} />

          <span>Logout</span>

        </button>

        <p className="profile-version">
          PDMS Customer App · Version 1.0
        </p>

      </main>

    </div>
  );
}

export default Profile;