import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Support.css";

const Support = () => {
    return (
        <>
            <Header />

            <div className="page-container">
                <h1>Help & Support</h1>

                <p>
                    Need help? We're here to assist you.
                </p>

                <h3>Contact Us</h3>
                <p>Phone: +91 98719-46191</p>
                <p>Email: support@premtrading.com</p>

                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>

            </div>
            <Footer />
        </>
    );
};

export default Support;