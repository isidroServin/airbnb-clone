import React from "react";
import image1 from "./../../images/home--image.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={image1} alt="houses image" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
