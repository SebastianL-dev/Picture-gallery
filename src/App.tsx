import MainB from "./components/Body";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import "./styles/index.css";
import { ImageProvider } from "./contexts/imagesCtx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Download from "./components/global/Download";

export default function App() {
  const location = useLocation();
  const [headerProps, setHeaderProps] = useState({
    A1: false,
    A2: false,
    A3: false,
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderProps({ A1: true, A2: false, A3: false });
        break;
      case "/liked":
        setHeaderProps({ A1: false, A2: true, A3: false });
        break;
      case "/collections":
        setHeaderProps({ A1: false, A2: false, A3: true });
        break;
      default:
        setHeaderProps({ A1: false, A2: false, A3: false });
        break;
    }
  }, [location.pathname]);

  return (
    <ImageProvider>
      <Header A1={headerProps.A1} A2={headerProps.A2} A3={headerProps.A3} />
      <Routes>
        <Route path="/" element={<MainB />} />
      </Routes>
      <Footer />
    </ImageProvider>
  );
}
