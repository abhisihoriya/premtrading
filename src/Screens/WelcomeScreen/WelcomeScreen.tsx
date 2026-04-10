import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";
import logo from "../../assets/logo/ptc.png";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const fullText = "Welcome to ";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 70);

    const timer = setTimeout(() => {
      navigate("/home");
    }, 3200);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="welcome-container">

      {/* LOGO */}
      <div className="logo-wrapper">
        <img src={logo} alt="PTC Logo" />
      </div>

      {/* TEXT */}
      <h1 className="welcome-text">
        {text}
        <span className="brand">Prem Trading</span>
        <span className="cursor">|</span>
      </h1>

      {/* SUBTEXT */}
      <p className="subtitle">
        Industrial & Electrical Solutions
      </p>

    </div>
  );
};

export default WelcomeScreen;