import React from 'react'
import logo from "../image/logo.png"
import "../components/navbar.css"
export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <div className="logo">
        <a href="/"><img id="logo" src={logo} alt="Icon" /></a><b> SunnyLands</b>
        

        </div>
        
        <ul className="links">
            <li>
            <a href="/" >
            
            Home
          </a>
            </li>
            <li className='dropdown'>
            
            
            <a href="/">Gallery</a>
            
            <ul className="dropdown-menu">
              <li><a href="/">Gallery 1</a></li>
              <li><a href="/">Gallery 2</a></li>
              <li><a href="/">Gallery 3</a></li>
            </ul>
          
            </li>
            <li className="dropdown">
            <a href="/">Agents</a>
            <ul className="dropdown-menu">
              <li><a href="/">Agents 1</a></li>
              <li><a href="/">Agents 2</a></li>
              <li><a href="/">Agents 3</a></li>
            </ul>
            </li>
            <li>
            <a href="/">
            
            About Us
          </a>
            </li>
            
        </ul>
        <ul class="links2">
        <li>
            <a href="/" >
            
           <u>Contact</u>
            </a>
            </li>
            <li>
            <a href="/" >
            
            <button>Book Now</button>
            </a>
            </li>

        </ul>
      </nav> 
    
    
    </>
  )
}
