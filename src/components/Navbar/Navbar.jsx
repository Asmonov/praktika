import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav' >
      <div className='nav-otstup'>
        <div className='nav-glav-card'>
          <ul>
            <li>
              <a className='card-nav-card-a-teg' href="">About</a>
            </li>
            <li>
              <a className='card-nav-card-a-teg' href="">Home</a>
            </li>
            <li>
              <a className='card-nav-card-a-teg' href="">My intresting</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
