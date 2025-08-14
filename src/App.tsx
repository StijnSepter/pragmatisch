import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import HomePage from "./pages/home.tsx";
import ContactPage from "./pages/contact.tsx";
import Experience from "./pages/Experience.tsx";
import ProductPage from "./pages/products.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ervaring" element={<Experience />} />
        <Route path="/producten" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
