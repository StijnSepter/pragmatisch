import "./css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>© {currentYear}</span>
      <span className="copyricht"> Pragmatisch® </span>
      <span>— Alle rechten voorbehouden</span>
    </footer>
  );
};

export default Footer;
