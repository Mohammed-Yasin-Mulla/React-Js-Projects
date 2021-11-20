import React from 'react'

export default function Meme(){
    return(
        <div className="main">
            <div className="main--input">
                <input type="text" placeholder='top text' />
                <input type="text" placeholder='bottom text' />
            </div>
            <button className='main--button'>Get The Meme  image here</button>
        </div>
    )
}