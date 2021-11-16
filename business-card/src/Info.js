import React from "react";
import profileImg from './profilePic.jpg'

export default function Info() {
    return (
      <div className="Info--">
        
        <img
          src={profileImg}
          alt="this is react logo"
          className="Info--profilepic"
        />
        <h3 className="Info--name">Pepper</h3>
        <h5 className="Info--designation">Robot</h5>
        {/* <div className="Info--buttons">
          <button className="Info--email"><img src={envelope} /> Email</button>
          <button className="Info--linkdin"><img src={linkedin} />Linkdin</button>
        </div> */}
      </div>
    );
  }