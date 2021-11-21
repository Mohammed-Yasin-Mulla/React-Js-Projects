import React from 'react'
import memesdata from './memesData'

console.log(memesdata)




export default function Meme(){
    const [url, setValue] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    function getMemeImage(){
        const arraymeme = memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * arraymeme.length)
        setValue(() =>arraymeme[randomNumber].url )
    
    }
    
    return(
        <div className="main">
            <div className="main--input">
                <input type="text" placeholder='top text' />
                <input type="text" placeholder='bottom text' />
            </div>
            <button onClick={getMemeImage} className='main--button'>Get The Meme  image here</button>
            <img className='main--img' src={url} alt="" />
        </div>
    )
}