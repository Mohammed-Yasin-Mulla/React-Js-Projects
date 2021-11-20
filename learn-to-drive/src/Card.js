import React from 'react'
import drift from "./images/racing.jpg";
import offroading from './images/offRoading.jpg'
import raceing from './images/racing.jpg'

export default function Card(props) {
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