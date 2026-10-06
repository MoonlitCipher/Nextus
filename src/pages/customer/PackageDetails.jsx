import {
  ArrowLeft,
  Package,
  Scale,
  FileText,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function PackageDetails() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* HEADER */}
      <header className="page-header">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/book")}
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1>Package Details</h1>
          <p>Tell us about your parcel</p>
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

          <div className="progress-step active">
            <span>2</span>
            <p>Package</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            <p>Payment</p>
          </div>

        </div>

        {/* PACKAGE TYPE */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Package size={21} />
            </div>

            <div>
              <h2>Package Information</h2>
              <p>Enter basic details about your parcel</p>
            </div>

          </div>

          <label className="field-label">
            Package Type
          </label>

          <select className="form-select">
            <option>Select package type</option>
            <option>Document</option>
            <option>Small Parcel</option>
            <option>Medium Parcel</option>
            <option>Large Parcel</option>
            <option>Fragile Item</option>
          </select>

          <label className="field-label">
            Package Description
          </label>

          <div className="textarea-box">

            <FileText size={20} />

            <textarea
              placeholder="Example: Books, clothes, electronics..."
              rows="4"
            ></textarea>

          </div>

        </section>

        {/* WEIGHT */}
        <section className="form-card">

          <div className="card-heading">

            <div className="card-heading-icon">
              <Scale size={21} />
            </div>

            <div>
              <h2>Package Weight</h2>
              <p>Approximate weight of your parcel</p>
            </div>

          </div>

          <div className="weight-input">

            <input
              type="number"
              placeholder="Enter weight"
            />

            <span>KG</span>

          </div>

          <div className="weight-options">

            <button>0.5 KG</button>
            <button>1 KG</button>
            <button>2 KG</button>
            <button>5 KG</button>

          </div>

        </section>

        {/* SPECIAL INSTRUCTIONS */}
        <section className="form-card">

          <label className="field-label">
            Special Instructions
          </label>

          <textarea
            className="large-textarea"
            placeholder="Any special handling instructions?"
            rows="4"
          ></textarea>

        </section>

        {/* CONTINUE */}
        <button
          className="continue-btn"
          onClick={() => navigate("/customer/fare")}
        >
          Continue to Fare
          <ChevronRight size={20} />
        </button>

      </main>

    </div>
  );
}

export default PackageDetails;