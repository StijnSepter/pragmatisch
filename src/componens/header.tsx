import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_pragmatisch.png";
import { useNavigate } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // close the mobile menu
  };

  return (
    <header className="header">
      <div className="header-top">
        {/* Logo */}
        <div className="logo-container" onClick={() => handleNavigation("/")}>
          <img src={logo} alt="Pragmatisch Logo" className="logo" />
          <h1 className="site-title">Pragmatisch</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="desktop-nav-list">
            <li onClick={() => handleNavigation("/pragmatisch/")}>Home</li>
            <li onClick={() => handleNavigation("/pragmatisch/contact")}>
              Contact
            </li>
            <li onClick={() => handleNavigation("/pragmatisch/ervaring")}>
              Ervaring
            </li>
            <li onClick={() => handleNavigation("/pragmatisch/producten")}>
              Producten
            </li>
          </ul>
        </nav>

        {/* Flags + Hamburger */}
        <div className="right-controls">
          <div className="flags">
            <span>🇬🇧</span>
            <span>🇳🇱</span>
          </div>

          {/* Only show hamburger on mobile */}
          <button className="hamburger-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/contact")}>Contact</li>
            <li onClick={() => handleNavigation("/ervaring")}>Ervaring</li>
            <li onClick={() => handleNavigation("/producten")}>Producten</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
