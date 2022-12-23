import React, { useContext } from 'react'
import {wishlistContext} from './WishlistContext'
function Wishlist() {
  let {favorites, setFavorites}=useContext(wishlistContext)
 const handleDelete=(item)=>{
  let newfavorites=favorites.filter(q=>q.id !== item)
  setFavorites([...newfavorites])

 }

  return (
    <>
    <section className='wishlist_div'>
      {favorites.length ?
        favorites.map((i,key)=>{
          return(
            <div className='wish_div' key={i.id}>
              <h1>Id:<span>{i.id}</span></h1>
              <h1>Name:<span>{i.name}</span></h1>
              <h1>UnitPrice:<span>{i.unitPrice}</span></h1>
              <button onClick={()=>handleDelete(i.id)}>Delete</button>

            </div>
          )
        }):<div className='empty'>
          <h1>Empty...</h1>
        </div>
      }


    </section>
    </>
  )
}

export default Wishlist