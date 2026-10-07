import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import HomeScreen from "../Homescreen/HomeScreen";
import Privacy from "../../pages/Privacy/Privacy";
import Terms from "../../pages/Terms/Terms";
import Support from "../../pages/Support/Support";
import ProximitySensorListing from "../../pages/categories/ProximitySensor/ProximitySensorListing";
import ProximitySensorDetail from "../../pages/categories/ProximitySensor/ProximitySensorDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/categories/proximity-sensor" element={<ProximitySensorListing />} />
        <Route
          path="/categories/proximity-sensor/:productId"
          element={<ProximitySensorDetail />}
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;