import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import {
  proximitySensorCategory,
  proximitySensorProducts,
  type ProximitySensorProduct,
} from "../../../data/proximitySensors";
import "./ProximitySensor.css";

type HousingFilter = "all" | ProximitySensorProduct["housingSize"];

const ProximitySensorListing = () => {
  const [filter, setFilter] = useState<HousingFilter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return proximitySensorProducts;
    return proximitySensorProducts.filter((p) => p.housingSize === filter);
  }, [filter]);

  return (
    <>
      <Header />
      <div className="ps-page">
        <section className="ps-hero">
          <div className="ps-hero-inner">
            <nav className="ps-breadcrumb" aria-label="Breadcrumb">
              <Link to="/home">Home</Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span>{proximitySensorCategory.title}</span>
            </nav>
            <h1>{proximitySensorCategory.title}</h1>
            <p className="ps-hero-desc">{proximitySensorCategory.description}</p>
            <div className="ps-hero-stats">
              <span className="ps-stat-pill">
                {proximitySensorProducts.length} models listed
              </span>
              <span className="ps-stat-pill">M8 · M12 · M18 housings</span>
              <span className="ps-stat-pill">100% genuine BALLUFF</span>
            </div>
          </div>
        </section>

        <div className="ps-body">
          <div className="ps-toolbar">
            <div className="ps-toolbar-row">
              <label htmlFor="housing-filter">Filter by size</label>
              <div className="ps-filters" id="housing-filter">
                {(["all", "M8", "M12", "M18"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`ps-filter-btn ${filter === size ? "active" : ""}`}
                    onClick={() => setFilter(size)}
                  >
                    {size === "all" ? "All" : size}
                  </button>
                ))}
              </div>
            </div>
            <p className="ps-count">
              Showing {filtered.length} of {proximitySensorProducts.length} products
            </p>
          </div>

          <div className="ps-grid">
            {filtered.map((product) => (
              <article className="ps-card" key={product.id}>
                <div className="ps-card-image">
                  <span className="ps-card-badge">{product.orderCode}</span>
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="ps-card-body">
                  <p className="ps-card-manufacturer">{product.manufacturer}</p>
                  <h2 className="ps-card-title">{product.name}</h2>
                  <p className="ps-card-part">Part: {product.partNumber}</p>
                  <div className="ps-tags">
                    <span className="ps-tag">Sn {product.sensingDistance}</span>
                    <span className="ps-tag">{product.housingSize}</span>
                    <span className="ps-tag">{product.mounting}</span>
                    <span className="ps-tag">{product.ipRating}</span>
                  </div>
                  <Link
                    to={`/categories/proximity-sensor/${product.id}`}
                    className="ps-card-link"
                  >
                    View specifications →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProximitySensorListing;
