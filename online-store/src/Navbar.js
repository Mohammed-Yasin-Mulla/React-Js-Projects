import React from 'react'
import {  FaAccusoft,FaSearch,FaMoneyBillWaveAlt ,FaHandHoldingHeart} from "react-icons/fa";


export default function Navbar(){
    return(
        <nav className='navbar'>
          <div className="navbar--logo navbar-box">
            < FaAccusoft  className='navbar--logo-img navbar-img'/>
            <h2 className='navbar--logo-text' >Logo company</h2>
          </div>
          <div className="navbar--search navbar-box">
            <FaSearch className='navbar--search-img navbar-img'/>
            <h2 className='navbar--search-text'>Search</h2>
          </div>
          <div className="navbar--offer navbar-box">
            <FaMoneyBillWaveAlt className='navbar--offer-img navbar-img'/>
            <h2 className='navbar--offer-text'>Offers</h2>
          </div>
          <div className="navbar--help navbar-box">
            <FaHandHoldingHeart className='navbar--help-img navbar-img'/>
            <h2 className='navbar--help-text'>Coustomer Care</h2>
          </div>
        </nav>
    )
}