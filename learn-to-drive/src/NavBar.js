import React from 'react'
import logo from "./images/logo.png";

export default function Navbar() {
    return (
      <nav className="navbar">
        <img className="navbar--img" src={logo} alt="logo" width="40px" />
        <h3>SUPER SPEED</h3>
      </nav>
    );
  }