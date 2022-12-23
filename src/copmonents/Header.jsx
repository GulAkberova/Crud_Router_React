import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { wishlistContext } from './WishlistContext'

function Header() {
  let {favorites,setFavorites}=useContext(wishlistContext)
  return (
    <>
    <header>
        <h1> <NavLink to={'/'}>Crud </NavLink></h1>
       
        <div>
            <ul>
                <li><NavLink to={'/'}>Home </NavLink></li>
                <li><NavLink to={'/product'}>Products </NavLink></li>
                <li><NavLink to={'/wishlist'}>Wishlist&nbsp;{favorites.length} </NavLink></li>

            </ul>
        </div>
    </header>
    </>
  )
}

export default Header