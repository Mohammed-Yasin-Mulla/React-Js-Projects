import React from 'react'
import github from "./icons/github.svg";
import envelope from "./icons/envelope.svg";
import facebook from "./icons/facebook.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";

export default function Footer() {
    return (
      <div className="Footer--">
        <a target='_blank' href="https://github.com/"><img src={github}/></a>
        <a target='_blank' href="https://twitter.com/"><img src={twitter}/></a>
        <a target='_blank' href="https://www.facebook.com/"><img src={facebook}/></a>
        <a target='_blank' href="https://www.linkedin.com/"><img src={linkedin}/></a>
        <a target='_blank' href="#"><img src={envelope}/></a>
      </div>
    );
  }
