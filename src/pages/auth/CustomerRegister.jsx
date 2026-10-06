import {
  Truck,
  User,
  Phone,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

function CustomerRegister() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Truck size={38} />
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start sending parcels with PDMS
        </p>

        <div className="auth-form">

          <label>Full Name</label>

          <div className="auth-input">
            <User size={20} />
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <label>Mobile Number</label>

          <div className="auth-input">
            <Phone size={20} />
            <input
              type="tel"
              placeholder="Enter mobile number"
            />
          </div>

          <label>Email</label>

          <div className="auth-input">
            <Mail size={20} />
            <input
              type="email"
              placeholder="Enter email address"
            />
          </div>

          <label>Password</label>

          <div className="auth-input">
            <Lock size={20} />
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <button className="auth-btn">
            Create Account
            <ArrowRight size={20} />
          </button>

        </div>

        <p className="register-text">
          Already have an account?
          <button> Login</button>
        </p>

      </div>

    </div>
  );
}

export default CustomerRegister;