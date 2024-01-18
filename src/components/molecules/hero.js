import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg2 from "../../assets/images/jacopo-maia--gOUx23DNks-unsplash.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img
          className="d-block w-100"
          src={bg2}
          alt="First slide"
          style={{ height: "650px" }}
        />
      </div>
    </section>
  );
}

export default Hero;
