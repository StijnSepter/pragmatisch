import "./style/contact.css";
import Janwillem from "../assets/Janwillem.png";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div id="contact_container">
        <form className="contact-form">
          <label>
            Uw naam *
            <input type="text" required />
          </label>

          <label>
            Uw email *
            <input type="email" required />
          </label>

          <label>
            Onderwerp
            <input type="text" />
          </label>

          <label>
            Uw bericht
            <textarea rows={6} />
          </label>

          <button type="submit">Verzenden</button>
        </form>
      </div>

      <div className="contact-info">
        <img
          src={Janwillem}
          alt="Jan Willem Septer"
          className="contact-photo"
        />

        <ul>
          <li>
            <a href="mailto:info@pragmatisch.nl">info@pragmatisch.nl</a>
          </li>
          <li>+31 6 22249023</li>
          <li>73912956</li>
          <li>
            <a href="https://linkedin.com/in/janwillemsepter" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
