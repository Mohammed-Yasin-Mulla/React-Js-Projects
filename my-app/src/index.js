import React from "react";
import ReactDOM from "react-dom";
import Reactlogo from "./reactLogo.png"
import './index.css'

function NavBar() {
    return(
        <nav className='nav--'>
           <div className="nav--container">
               <a href="https://reactjs.org/"><img className='nav--img' src={Reactlogo} alt="Flowers in Chania" target='_blank'/></a>
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target='_blank'>
                    <h2 className='nav--h2'>ReactFacts</h2>
                </a>
           </div>
            <h3 className='nav--h3'>React-project 1</h3>
        </nav>
    )
}
function Main() {
    return(
        <div className="main--">
            <h2 className='main--title'>
               FunFacts About React
            </h2>
            <ul className='main--unorderedList'>
                <li>Was first released in 2013</li>
                <li>Was originally created by jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprice applications including mobile apps</li>
            </ul>
        </div>
    )
}

function App() {
  return <div>
      <NavBar/>
      <Main/>
  </div>
}

ReactDOM.render(<App />, document.getElementById("root"));
