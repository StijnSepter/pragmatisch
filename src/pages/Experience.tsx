import TestimonialCard from "../components/testimonials";
import logo from "../assets/logo.png";
import jw from "../assets/Janwillem.png";
import "./style/experience.css";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <main>
      <h1>{t("experience_title")}</h1>
      <div>
        <p>
          <span>{t("experience_intro")}</span>
        </p>
      </div>
      <h3 id="testimonial_title">{t("testimonial_title")}</h3>
      <p id="testimonial_text">{t("testimonial_text")}</p>
      <div id="testimonial_container">
        <TestimonialCard name={"jan"} text={"hallo"} avatar={logo} />
        <TestimonialCard name={"bob"} text={"lorem"} avatar={logo} />
        <TestimonialCard name={"Jan willem"} text={"hallo giel"} avatar={jw} />
      </div>
    </main>
  );
};

export default Experience;
