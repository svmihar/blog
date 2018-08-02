import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import instagram from '../img/instagram-icon.svg'
import medium from '../img/medium-icon.svg'
import info from '../img/info-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    
   
    
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="svmihar" style={{ width: '88px' }} />
          </figure>
          
        </Link>
      </div>

      <div className="navbar-start">
      <Link className="navbar-item" to="/about">
          <span className="icon">
            <img  style={{ width: '86%' }} src={info} alt="info" />
          </span>
        </Link>
      </div>
      
    
      <div className="navbar-end navbar-menu" id="burgerMenu">
        <a
          className="navbar-item"
          href="https://github.com/svmihar/"
          target="_blank"
        > 
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://instagram.com/tian.rar/"
          target="_blank"
        > 
          <span className="icon">
            <img src={instagram} alt="instagram" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://medium.com/@svmihar/"
          target="_blank"
        > 
          <span className="icon">
            <img src={medium} alt="medium" />
          </span>
        </a>
       
        
      </div>
    </div>
  </nav>
)

export default Navbar
