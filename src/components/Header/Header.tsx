import "./Header.css";

import logo from "../../assets/logo/ptc.png";
import callIcon from "../../assets/icons/call.png";
import flagIcon from "../../assets/icons/flag.png";

const Header = () => {
  return (
    <>
      <header className="header">

        <div className="header-container">

          {/* LOGO */}
          <div className="logo-box">
            <img src={logo} alt="Prem Trading" />
          </div>

          {/* CONTACT */}
          <div className="contact-wrapper">

            <div className="contact-card">
              <div className="owner-name">
                <img src={flagIcon} />
                Prem Singh Chauhan
              </div>
              <a href="tel:+918448771460">
                <img src={callIcon} />
                +91 8448-771460
              </a>
            </div>

            <div className="contact-card">
              <div className="owner-name">
                <img src={flagIcon} />
                Anirudh Chauhan
              </div>
              <a href="tel:+919871946191">
                <img src={callIcon} />
                +91 98719-46191
              </a>
            </div>

          </div>

        </div>

      </header>

      {/* SLIM ALERT BAR */}
      <div className="alert-bar">
        🚀 Trade Smart. Grow Fast.
      </div>
    </>
  );
};

export default Header;