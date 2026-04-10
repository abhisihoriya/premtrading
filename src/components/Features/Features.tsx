import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">

      {/* FEATURES */}
      <div className="features-grid">

        <div className="feature-card">
          <div className="icon">✔</div>
          <div>
            <p className="title">100% GENUINE</p>
            <p className="subtitle">Products</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon">💳</div>
          <div>
            <p className="title">SECURE SSL</p>
            <p className="subtitle">Payments</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon">👍</div>
          <div>
            <p className="title">BRAND NEW</p>
            <p className="subtitle">Products</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon">🛡</div>
          <div>
            <p className="title">MANUFACTURER</p>
            <p className="subtitle">Warranty</p>
          </div>
        </div>

      </div>

      {/* BANNERS */}
      <div className="banner-grid">

        <div className="banner-card">
          <h2>GST</h2>
          <p>GOODS AND SERVICES TAX</p>
          <div className="line"></div>
          <h3>CREDIT INPUT AVAILABLE</h3>
        </div>

        <div className="banner-card">
          <h2>PRICE LIST 2026</h2>
          <div className="line"></div>
          <h3>MAJOR BRANDS</h3>
        </div>

      </div>

    </div>
  );
};

export default Features;