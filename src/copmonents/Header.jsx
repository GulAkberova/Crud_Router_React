import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <h1>Crud</h1>
        <div>
            <ul>
                <li><NavLink to={'/'}>Home Page</NavLink></li>
                <li><NavLink to={'/product'}>Products Page</NavLink></li>

            </ul>
        </div>
    </header>
    </>
  )
}

export default Header