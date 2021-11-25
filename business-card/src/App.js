import React from "react";
import About from './About.js'
import Info from './Info.js'
import Interests from './Interests.js'
import Footer from './Footer'

export default function App() {
  return (
    <div className='cointainer'>
    
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
