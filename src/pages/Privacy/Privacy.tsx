import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Privacy.css";

const Privacy = () => {
    return (
        <>
            <Header />

            <div className="page-container">
                <h1>Privacy Policy</h1>

                <p>
                    At Prem Trading & Company, we respect your privacy and are committed
                    to protecting your personal data.
                </p>

                <h3>Information We Collect</h3>
                <p>
                    We may collect basic contact details such as name, phone number, and email.
                </p>

                <h3>Usage</h3>
                <p>
                    Information is used only to improve our services and communication.
                </p>

                <h3>Security</h3>
                <p>
                    We ensure your data is securely stored and not shared with third parties.
                </p>

            </div>
            <Footer />
        </>

    );
};

export default Privacy;