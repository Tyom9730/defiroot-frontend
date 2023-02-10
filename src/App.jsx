import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./containers/LandingPage/LandingPage";
import ReactGA from "react-ga";
import { useEffect } from "react";
import NftPage from "./containers/NftPage/NftPage";

const App = () => {
  const MEASURMENT_ID = "G-GN3PS3GFTM"; // MEASURMENT_ID
  // ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.initialize(MEASURMENT_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nft" element={<NftPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
