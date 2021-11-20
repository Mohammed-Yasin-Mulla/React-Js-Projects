import React from 'react'
import logo from './images/logo.jpg'

export default function Header(){
    return(
        <div className="header">
            <div className="header--logo-container">
                <img src={logo} alt="logo image" srcset="" className='header--logo' />
                <h3 className='header--logo-text'>Meme Generator</h3>
            </div>
            <h4 className='header--project-text'>React Project 3</h4>
        </div>
    )
}