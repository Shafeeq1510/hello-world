import React from 'react'
import './Headers.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Headers() {
  return (
    <nav className='header'>
      {/*logo on th left*/}
      <Link to="/">
       <img className='header-logo' src='data:image/png;base64,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' />
      </Link>
      <div className="header-search">
      <input type="text" className="header-searchInput" />
      <svg className='header-searchIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"color='white'  class="bi bi-search" viewBox="0  19 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <FontAwesomeIcon className='icon' icon="fa-solid fa-magnifying-glass" />

      </div>
     
     
      {/*search box*/}
      {/*3 links*/}
      {/*Basket icon with number*/}


        
    </nav>
  )
}

export default Headers