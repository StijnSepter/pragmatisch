import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./componens/footer.tsx";
import Header from "./componens/header.tsx";
import HomePage from "./pages/home.tsx";
import ContactPage from "./pages/contact.tsx";
import Experions from "./pages/Experions.tsx";
import Productpage from "./pages/products.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ervaring" element={<Experions />} />
        <Route path="/producten" element={<Productpage />} />
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
