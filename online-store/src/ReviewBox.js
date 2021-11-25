import React from 'react'
import { FaUserAlt } from "react-icons/fa";
export default function ReviewBox(props){
    return(
        <div className='review'>
            <div className="review--coustomer">
                <FaUserAlt />
                <h3>{props.name}</h3>
            </div>
            <p>{props.review}</p>
            <hr />
        </div>
    )

}