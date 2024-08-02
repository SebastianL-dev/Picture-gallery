import MainB from "./components/Body";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import "./styles/index.css";
import { ImageProvider } from "./contexts/imagesCtx";
import { PhotoProvider } from "./contexts/singleImageCtx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePhoto from "./components/global/Photo";
import SavedSection from "./components/Saved";

export default function App() {
  const location = useLocation();
  const [headerProps, setHeaderProps] = useState({
    A1: false,
    A2: false,
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderProps({ A1: true, A2: false });
        break;
      case "/liked":
        setHeaderProps({ A1: false, A2: true });
        break;
      default:
        setHeaderProps({ A1: false, A2: false });
        break;
    }
  }, [location.pathname]);

  return (
    <PhotoProvider>
      <ImageProvider>
        <Header A1={headerProps.A1} A2={headerProps.A2} />
        <Routes>
          <Route path="/" element={<MainB />} />
          <Route path="/liked" element={<SavedSection />} />
          <Route path="/photo/:id" element={<SinglePhoto />} />
        </Routes>
        <Footer />
      </ImageProvider>
    </PhotoProvider>
  );
}
