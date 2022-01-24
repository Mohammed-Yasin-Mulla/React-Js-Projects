import React from 'react'
import Header from './Header'
import Main from './Main.js'
import memesdata from './memesData'


export default function App()
{
    const [InputText, SetInputText] = React.useState({
            TopText : "",
            bottomText : ""
    })
    const [url, setValue] = React.useState("https://i.imgflip.com/22bdq6.jpg")
    function getMemeImage(){
        const arraymeme = memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * arraymeme.length)
        setValue(() =>arraymeme[randomNumber].url )
    
    }
    function onchange(event){
        const{name , value} = event.target
        SetInputText(prevValue => {
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    return(
        <>
       <Header/>
       <Main getMemeImage={getMemeImage} url={url} topText={InputText.TopText} bottomText={InputText.bottomText} onchange={onchange}  />
     
      </>
    )
}