import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_pragmatisch.png";
import "./css/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-top">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Pragmatisch Logo" className="logo" />
          <h1 className="site-title">Pragmatisch</h1>
        </div>

        {/* Flags + Hamburger */}
        <div className="right-controls">
          <div className="flags">
            <span>🇬🇧</span>
            <span>🇳🇱</span>
          </div>

          <button className="hamburger-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav className="mobile-nav">
          {[
            "Home",
            "About",
            "Services",
            "Assignments",
            "Products",
            "Contact",
          ].map((item, index) => (
            <a href="#" key={index}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
