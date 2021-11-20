import React from 'react'
import main from "./images/main1.jpg";


 export  default function Main() {
  return (
    <div className="main">
      <img src={main} alt="main images" className="main--img" />
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        voluptatem eaque ipsum labore magni, nihil laudantium minus architecto
        tempore odit, excepturi veritatis sequi.
      </h3>
    </div>
  );
}