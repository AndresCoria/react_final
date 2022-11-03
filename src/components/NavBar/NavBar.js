import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <div className='contenedor'>
      <NavLink to='/' className='Logo'><img src='/images/logo-blanco.png' alt='LOGO' /></NavLink>

      <input type="checkbox" id="menu-bar"></input>
      <label htmlFor="menu-bar">menu</label>

      <nav className='navbar'>
        <ul>
          <li><NavLink to='/'>Inicio</NavLink></li>
          <li><NavLink to='/categoria/cs1.6'>Counter-Strike 1.6</NavLink></li>
          <li><NavLink to='/categoria/csgo'>Counter-Strike GO</NavLink></li>
          <li><NavLink to='/categoria/css'>Counter-Strike Source</NavLink></li>
          <li><NavLink to='/categoria/hl'>Half-Life</NavLink></li>
          <li><NavLink to='/cart'>
            <CardWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar