import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/cocktail.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to="/">
          <div className='logo-div'>
            <img src={logo} alt="cocktail db logo " className='logo'></img>
            <div>COCKTAILS</div>
          </div>


        </Link>
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar
