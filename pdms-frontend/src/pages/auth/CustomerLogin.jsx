import {
  Truck,
  Phone,
  Lock,
  ArrowRight,
} from "lucide-react";

function CustomerLogin() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Truck size={38} />
        </div>

        <h1>Welcome to PDMS</h1>

        <p className="auth-subtitle">
          Parcel Delivery Management System
        </p>

        <div className="auth-form">

          <label>Mobile Number</label>

          <div className="auth-input">
            <Phone size={20} />
            <input
              type="tel"
              placeholder="9876543210"
            />
          </div>

          <label>Password</label>

          <div className="auth-input">
            <Lock size={20} />
            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="forgot-row">
            <button>Forgot Password?</button>
          </div>

          <button className="auth-btn">
            Login
            <ArrowRight size={20} />
          </button>

        </div>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="register-text">
          Don't have an account?
          <button> Create Account</button>
        </p>

      </div>

    </div>
  );
}

export default CustomerLogin;