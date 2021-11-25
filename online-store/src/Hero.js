import React from "react";
import logoImg from "./images/comanyLogoSqurare.jpeg";
import ReviwBox from "./ReviewBox.js";
import data from "./reviewdata";

export default function Hero() {
  const reviewdatas = data.data.map((data) => {
    return <ReviwBox name={data.name} review={data.review} />;
  });

  return (
    <div className="hero">
      <div className="hero--container">
        <img src={logoImg} />
        <h3 className="hero--logo-text">Comany Name</h3>
      </div>
      <div className="hero--container">
        <h3 className="hero--heading">About company</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          incidunt enim neque reiciendis blanditiis voluptate deleniti soluta
          ipsa vitae? Hic sequi officiis reiciendis porro qui odit sapiente quae
          ipsam unde numquam, voluptate necessitatibus corporis, ratione
          dignissimos.
        </p>
      </div>
      <div className="hero--container">
        <h3 className="hero--heading">Review</h3>
        <div className="hero--reviews">{reviewdatas}</div>
      </div>
    </div>
  );
}
