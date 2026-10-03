import {
  ArrowLeft,
  CreditCard,
  Smartphone,
  Wallet,
  Banknote,
  Check,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("upi");

  return (
    <div className="app">

      {/* HEADER */}
      <header className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/fare")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Payment</h1>
          <p>Choose your payment method</p>
        </div>

      </header>

      <main className="form-page">

        {/* AMOUNT */}
        <section className="payment-amount-card">

          <span>Total Amount</span>

          <strong>₹160</strong>

          <small>Including all delivery charges</small>

        </section>

        {/* PAYMENT METHODS */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <CreditCard size={21} />
            </div>

            <div>
              <h2>Payment Method</h2>
              <p>Select how you want to pay</p>
            </div>

          </div>

          {/* UPI */}
          <div
            className={`payment-option ${
              method === "upi" ? "selected" : ""
            }`}
            onClick={() => setMethod("upi")}
          >

            <div className="payment-option-icon">
              <Smartphone size={22} />
            </div>

            <div className="payment-option-info">
              <strong>UPI</strong>
              <span>Google Pay, PhonePe, Paytm</span>
            </div>

            {method === "upi" && (
              <div className="payment-check">
                <Check size={16} />
              </div>
            )}

          </div>

          {/* CARD */}
          <div
            className={`payment-option ${
              method === "card" ? "selected" : ""
            }`}
            onClick={() => setMethod("card")}
          >

            <div className="payment-option-icon">
              <CreditCard size={22} />
            </div>

            <div className="payment-option-info">
              <strong>Credit / Debit Card</strong>
              <span>Visa, Mastercard, RuPay</span>
            </div>

            {method === "card" && (
              <div className="payment-check">
                <Check size={16} />
              </div>
            )}

          </div>

          {/* WALLET */}
          <div
            className={`payment-option ${
              method === "wallet" ? "selected" : ""
            }`}
            onClick={() => setMethod("wallet")}
          >

            <div className="payment-option-icon">
              <Wallet size={22} />
            </div>

            <div className="payment-option-info">
              <strong>Wallet</strong>
              <span>Use your PDMS wallet balance</span>
            </div>

            {method === "wallet" && (
              <div className="payment-check">
                <Check size={16} />
              </div>
            )}

          </div>

          {/* CASH */}
          <div
            className={`payment-option ${
              method === "cash" ? "selected" : ""
            }`}
            onClick={() => setMethod("cash")}
          >

            <div className="payment-option-icon">
              <Banknote size={22} />
            </div>

            <div className="payment-option-info">
              <strong>Cash on Delivery</strong>
              <span>Pay when the parcel is delivered</span>
            </div>

            {method === "cash" && (
              <div className="payment-check">
                <Check size={16} />
              </div>
            )}

          </div>

        </section>

        {/* ORDER SUMMARY */}
        <section className="form-card">

          <div className="card-heading">

            <div>
              <h2>Order Summary</h2>
            </div>

          </div>

          <div className="fare-row">
            <span>Delivery Fare</span>
            <strong>₹160</strong>
          </div>

          <div className="fare-row">
            <span>Payment Method</span>
            <strong>
              {method === "upi" && "UPI"}
              {method === "card" && "Card"}
              {method === "wallet" && "Wallet"}
              {method === "cash" && "Cash"}
            </strong>
          </div>

          <div className="fare-divider"></div>

          <div className="fare-total">
            <span>Total</span>
            <strong>₹160</strong>
          </div>

        </section>

        {/* PAY BUTTON */}
        <button
          className="continue-btn"
          onClick={() => navigate("/customer/confirmation")}
        >
          Pay ₹160
          <ChevronRight size={20} />
        </button>

        <p className="secure-payment">
          🔒 Your payment information is secure
        </p>

      </main>

    </div>
  );
}

export default Payment;