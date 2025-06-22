import "./css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="divider"></div>
      <span className="copyricht">
        Pragmatisch B.V. © {currentYear} — Alle rechten voorbehouden
      </span>
      <div className="divider"></div>
    </footer>
  );
};

export default Footer;
