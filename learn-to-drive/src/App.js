import React from "react";
import data from './data.js'
import Navbar from './NavBar.js'
import Main from './Main.js'
import Card from './Card.js'






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
