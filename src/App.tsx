import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./componens/footer.tsx";
import Header from "./componens/header.tsx";
import HomePage from "./pages/home.tsx";
import ContactPage from "./pages/contact.tsx";
import Experions from "./pages/Experions.tsx";
import ProductPage from "./pages/products.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pragmatisch/home" />} />
        <Route
          path="/pragmatisch"
          element={<Navigate to="/pragmatisch/home" />}
        />
        <Route
          path="/pragmatisch/Homepage"
          element={<Navigate to="/pragmatisch/home" />}
        />
        <Route path="/pragmatisch/home" element={<HomePage />} />
        <Route path="/pragmatisch/contact" element={<ContactPage />} />
        <Route path="/pragmatisch/ervaring" element={<Experions />} />
        <Route path="/pragmatisch/producten" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
