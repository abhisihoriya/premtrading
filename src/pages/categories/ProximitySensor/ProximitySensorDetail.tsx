import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { getProximityProduct } from "../../../data/proximitySensors";
import "./ProximitySensor.css";

const ENQUIRY_PHONE = "+919871946191";

const ProximitySensorDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProximityProduct(productId) : undefined;

  if (!product) {
    return (
      <>
        <Header />
        <div className="ps-not-found">
          <h1>Product not found</h1>
          <p>
            <Link to="/categories/proximity-sensor">← Back to proximity sensors</Link>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hi, I need a quote for ${product.orderCode} — ${product.name} (${product.partNumber}).`,
  );

  return (
    <>
      <Header />
      <div className="ps-detail-wrap">
        <div className="ps-detail-hero">
          <div className="ps-detail-hero-inner">
            <nav className="ps-breadcrumb" aria-label="Breadcrumb">
              <Link to="/home">Home</Link>
              <span>/</span>
              <Link to="/categories/proximity-sensor">Proximity Sensors</Link>
              <span>/</span>
              <span>{product.orderCode}</span>
            </nav>
            <Link to="/categories/proximity-sensor" className="ps-back">
              ← All proximity sensors
            </Link>
          </div>
        </div>

        <div className="ps-detail-layout">
          <aside className="ps-gallery">
            <img src={product.image} alt={product.name} />
          </aside>

          <main className="ps-detail-main">
            <p className="ps-card-manufacturer">{product.manufacturer}</p>
            <h1>{product.name}</h1>
            <p className="ps-detail-summary">{product.summary}</p>

            <div className="ps-detail-meta">
              <div className="ps-meta-item">
                <span>PTC order code</span>
                <strong>{product.orderCode}</strong>
              </div>
              <div className="ps-meta-item">
                <span>Part number</span>
                <strong>{product.partNumber}</strong>
              </div>
              <div className="ps-meta-item">
                <span>Sensing distance</span>
                <strong>{product.sensingDistance}</strong>
              </div>
              <div className="ps-meta-item">
                <span>Mounting</span>
                <strong>{product.mounting}</strong>
              </div>
              <div className="ps-meta-item">
                <span>Connection</span>
                <strong>{product.connection}</strong>
              </div>
              <div className="ps-meta-item">
                <span>IP rating</span>
                <strong>{product.ipRating}</strong>
              </div>
            </div>

            <div className="ps-actions">
              <a className="ps-btn ps-btn-primary" href={`tel:${ENQUIRY_PHONE}`}>
                Call for quote
              </a>
              <a
                className="ps-btn ps-btn-secondary"
                href={`https://wa.me/919871946191?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp enquiry
              </a>
              {product.datasheetUrl ? (
                <a
                  className="ps-btn ps-btn-outline"
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download datasheet
                </a>
              ) : (
                <a className="ps-btn ps-btn-outline" href={`mailto:premtradingcompany20@gmail.com?subject=Datasheet%20request%20${product.orderCode}`}>
                  Request datasheet
                </a>
              )}
            </div>

            {product.sections.map((section) => (
              <section className="ps-spec-section" key={section.title}>
                <h2>{section.title}</h2>
                <table className="ps-spec-table">
                  <tbody>
                    {section.specs.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProximitySensorDetail;
