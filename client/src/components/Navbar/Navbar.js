import React from 'react'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import './Navbar.scss'
export default function Navbar() {
  return (
    <div className='nav'>
        <ul>
          <li> <NavLink to="/" >Home</NavLink> </li>  
          <li> <NavLink to="/orders" >Orders</NavLink> </li>  
        </ul>  
      </div>
  )
}
