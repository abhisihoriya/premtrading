import "./Footer.css";

import logo from "../../assets/logo/ptc.png";
import locationIcon from "../../assets/icons/location.png";
import callIcon from "../../assets/icons/call.png";
import mailIcon from "../../assets/icons/mail.png";
import flagIcon from "../../assets/icons/flag.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-section company">
          <img src={logo} alt="Prem Trading" className="footer-logo" />

          <p className="tagline">
            Industrial & Electrical Solutions You Can Trust.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <div className="footer-item">
            <img src={locationIcon} alt="location" />
            <p>
              Yaad Ram Colony, Sarurpur 25 Feet Road,<br />
              Gali No. 2, Near Adarsh School,<br />
              Sector 53, Faridabad
            </p>
          </div>

          <div className="footer-item">
            <img src={flagIcon} alt="India" className="flag-icon" />
            <a href="tel:+918448771460" className="link">
              <img src={callIcon} alt="call" />
              +91 8448-771460
            </a>
          </div>

          <div className="footer-item">
            <img src={mailIcon} alt="mail" />
            <a href="mailto:support@premtrading.com" className="link">
              support@premtrading.com
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/support">Help & Support</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Prem Trading & Company. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;