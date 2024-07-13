import MainB from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";
import { ImageProvider } from "./contexts/imagesCtx";

export default function App() {
  return (
    <ImageProvider>
      <Header />
      <MainB />
      <Footer />
    </ImageProvider>
  );
}
