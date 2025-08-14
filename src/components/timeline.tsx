// import "./css/testimonials.css";
import React from "react";

type timelineProps = {
  data: Array<any>;
  name: string;
  text: string;
  avatar: string;
};

const TestimonialCard: React.FC<timelineProps> = ({ name, text, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <span className="quote-mark">❝</span>
        <h3 className="testimonial-name">{name}</h3>
        <img src={avatar} alt={name} className="testimonial-avatar" />
      </div>
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default TestimonialCard;
