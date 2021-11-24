import React from 'react'



export default function Meme(props){
   
    
    return(
        <div className="main">
            <div className="main--input">
                <input onChange={props.onchange} type="text" placeholder='top text' value={props.topText} name="TopText" />
                <input onChange={props.onchange} type="text" placeholder='bottom text' value={props.bottomText} name="bottomText" />
            </div>
            <button onClick={props.getMemeImage} className='main--button'>Get The Meme  image here</button>
            <div className="meme">
                <img className='meme--image' src={props.url} alt="" />
                <h2 className="meme--text top">{props.topText}</h2>
                <h2 className="meme--text bottom">{props.bottomText}</h2>
            </div>
        </div>
    )
}