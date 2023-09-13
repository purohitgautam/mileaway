import "./App.css";
import Competition from "./pages/competition/Competition";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Other from "./pages/other/Other";
import Products from "./pages/products/Products";
import SkyProducts from "./pages/skyProducts/SkyProducts";
import LandProducts from "./pages//LandProducts/LandProducts";
import WaterProducts from "./pages/waterProducts/WaterProducts";
import TrendingVideos from "./pages/trendingVideos/TrendingVideos";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route strict exact path="/" element={<Home />} />
          <Route strict exact path="/other" element={<Other />} />
          <Route strict exact path="/competition" element={<Competition />} />
          <Route
            strict
            exact
            path="/trendingvideos"
            element={<TrendingVideos />}
          />
          <Route strict exact path="/product" element={<Products />} />
          <Route strict exact path="/skyproducts" element={<SkyProducts />} />
          <Route
            strict
            exact
            path="/waterproducts"
            element={<WaterProducts />}
          />
          <Route strict exact path="/landproducts" element={<LandProducts />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
