import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Terms.css";

const Terms = () => {
  return (
    <>
    <Header/>
    <div className="page-container">
      <h1>Terms & Conditions</h1>

      <p>
        Welcome to Prem Trading & Company. By accessing our website, you agree
        to comply with and be bound by the following terms and conditions.
      </p>

      <h3>1. Products</h3>
      <p>
        All products listed are subject to availability and may change without notice.
      </p>

      <h3>2. Pricing</h3>
      <p>
        Prices are subject to change based on market conditions.
      </p>

      <h3>3. Liability</h3>
      <p>
        We are not responsible for any indirect damages arising from product use.
      </p>

    </div>
    <Footer/>
    </>
  );
};

export default Terms;