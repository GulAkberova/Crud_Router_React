import { createContext, useState } from "react";

export const wishlistContext=createContext(null)

export const WishlistProvider=({ children })=>{
    const [favorites,setFavorites]=useState([])
  

    const values={
        favorites,
        setFavorites
    }

    return <wishlistContext.Provider value={values}>{children}</wishlistContext.Provider>
}