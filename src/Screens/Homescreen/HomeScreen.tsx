import "./HomeScreen.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Features from "../../components/Features/Features";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <div className="home-container">

      <Header />

      <Carousel />

      <Features />

      <Categories />
   
    <Footer />
    </div>
  );
};

export default HomeScreen;