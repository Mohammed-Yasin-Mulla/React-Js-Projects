import React from "react";
import logo from "./images/logo.png";
import main from "./images/main1.jpg";
import drift from "./images/racing.jpg";
import offroading from './images/offRoading.jpg'
import raceing from './images/racing.jpg'
import data from './data.js'

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--img" src={logo} alt="logo" width="40px" />
      <h3>SUPER SPEED</h3>
    </nav>
  );
}

function Main() {
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

function Card(props) {
  return (
      <div className="card">
       
          <img src={raceing}className="card--img" />
          <div className="card--stats">
             
              <span className='card--rating'>Rating {props.rating}</span>
              <span className="gray card--review">({props.review}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <div className="card--info">
            <h4 className="card--title">{props.title}</h4>
            <p className='card--description'>{props.description} </p>
            <p className="card--price"><span className="bold"><i>From </i>${props.price}</span> / person</p>
          </div>
      </div>)
}


// console.log(data)
const cardsList = data.map(item => {
  return <Card key={item.id} title={item.title} img={item.img} price={item.price} rating={item.rating} review={item.review
  } location={item.location}  description={item.description}/>
})

console.log(cardsList)
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      
      <div className="cards">
          {cardsList}
      </div>
     
    </div>
  );
}
export default App;
