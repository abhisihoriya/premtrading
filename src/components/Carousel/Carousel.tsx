import { useEffect, useState } from "react";
import "./Carousel.css";

import img1 from "../../assets/carousel/carousel1.png";
import img2 from "../../assets/carousel/carousel2.jpeg";
import img3 from "../../assets/carousel/carousel3.jpeg";
import img4 from "../../assets/carousel/carousel4.png";
import img5 from "../../assets/carousel/carousel5.jpeg";
import img6 from "../../assets/carousel/carousel6.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}>‹</button>
      <button className="arrow right" onClick={() => setCurrent((prev) => (prev + 1) % images.length)}>›</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={current === i ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;