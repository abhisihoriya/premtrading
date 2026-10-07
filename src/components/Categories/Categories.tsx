import { Link } from "react-router-dom";
import "./Categories.css";

// IMAGE IMPORTS (use your exact names)
import switchgear from "../../assets/categories/switch-gear-control.webp";
import sensor from "../../assets/categories/omron-proximity.jpg";
import bearings from "../../assets/categories/ball-bearings.jpg";
import pneumatic from "../../assets/categories/pneumatic-valve.webp";
import accessories from "../../assets/categories/accesories.jpg";
import wires from "../../assets/categories/cable-wires.jpg";
import belts from "../../assets/categories/grinder-machine.jpg";
import cutting from "../../assets/categories/cutting-tools.jpg";
import grinders from "../../assets/categories/grinder-machine.jpg";
import wheels from "../../assets/categories/cutting-tools.jpg";
import plastic from "../../assets/categories/accesories2.jpg";
import domestic from "../../assets/categories/ledbulbs.jpg";

// DATA
const categories = [
  {
    title: "Switchgear",
    image: switchgear,
    items: ["Siemens", "L&T", "Schneider", "ABB"],
    path: undefined as string | undefined,
  },
  {
    title: "Proximity Sensor",
    image: sensor,
    items: ["Omron", "Turck", "Balluff", "Autonics"],
    path: "/categories/proximity-sensor",
  },
  {
    title: "Bearings",
    image: bearings,
    items: ["Ball Bearings", "Deep Groove", "Angular Contact"],
    path: undefined,
  },
  {
    title: "Pneumatic Valve",
    image: pneumatic,
    items: ["Festo", "SMC", "Janatics", "Emerson"],
    path: undefined,
  },
  {
    title: "Panel Accessories",
    image: accessories,
    items: ["Bus Bars", "Cable Ties", "LED Indicators"],
    path: undefined,
  },
  {
    title: "Wire / Cables",
    image: wires,
    items: ["Polycab", "Havells", "KEI"],
    path: undefined,
  },
  {
    title: "Belts",
    image: belts,
    items: ["Flat", "V-Belts", "Timing"],
    path: undefined,
  },
  {
    title: "Cutting Tools",
    image: cutting,
    items: ["Drills", "Reamers", "Carbide"],
    path: undefined,
  },
  {
    title: "Grinders",
    image: grinders,
    items: ["Surface", "Angle", "Bench"],
    path: undefined,
  },
  {
    title: "Grinding Wheels",
    image: wheels,
    items: ["Cup", "Dish", "Cut Off"],
    path: undefined,
  },
  {
    title: "Plastic Tarpaulins",
    image: plastic,
    items: ["SRF", "Nobletex"],
    path: undefined,
  },
  {
    title: "Domestic Electrical",
    image: domestic,
    items: ["LED Lights", "Fans", "Boards"],
    path: undefined,
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      
      <h2 className="categories-title">Our Products</h2>
      <p className="categories-subtitle">
        Genuine industrial and electrical components from trusted brands — browse by category.
      </p>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            
            {/* IMAGE */}
            {cat.path ? (
              <Link to={cat.path} className="card-image card-image-link">
                <img src={cat.image} alt={cat.title} />
                <div className="overlay"></div>
                <h3 className="image-title">{cat.title}</h3>
              </Link>
            ) : (
              <div className="card-image">
                <img src={cat.image} alt={cat.title} />
                <div className="overlay"></div>
                <h3 className="image-title">{cat.title}</h3>
              </div>
            )}

            {/* CONTENT */}
            <div className="card-content">
              <ul>
                {cat.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {cat.path ? (
                <Link to={cat.path} className="explore-btn explore-link">
                  Explore →
                </Link>
              ) : (
                <button type="button" className="explore-btn" disabled>
                  Coming soon
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;