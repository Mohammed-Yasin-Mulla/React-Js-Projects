import React from 'react'
import logo from './images/logo.png'
import main from './images/main.jpg'



function Navbar() {
    return(
        <nav className='navbar--'>
            <img className='navbar--img' src={logo} alt="logo" width='40px'/>
            <h3>Tame your beast</h3>
        </nav>
    )
}

function Main() {
    return(
        <div className="main--">
            <img src={main} alt="main images" className="main--img" />
        </div>
    )
}




function App() {
    return(
        <div>
            <Navbar/>
            <Main/>
            <h1>Hello There!!!</h1>
        </div>
        
        
    )
}
export default App;