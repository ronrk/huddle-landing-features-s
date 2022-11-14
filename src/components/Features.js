import React from "react";

const Features = ({ title, text, img, dir }) => {
  return (
    <section className={`feature ${dir}`}>
      <div className="feature__content">
        <h2 className="feature__content-title">{title}</h2>
        <p className="feature__content-text">{text}</p>
      </div>
      <img className="feature__img" src={img} alt="feature 1" />
    </section>
  );
};

export default Features;
