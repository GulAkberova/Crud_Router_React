import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {wishlistContext} from './WishlistContext'
function Product() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const[name,setName]=useState('')
  const[unitPrice,setPrice]=useState(0)
  let {favorites,setFavorites} = useContext(wishlistContext)
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://northwind.vercel.app/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        setUsers(data);
        console.log(users);
      });
  }, [search]);
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleDelete = (t) => {
    const newUsers = users.filter((a) => a.id !== t);
    setUsers(newUsers);
  };
  const handleAdd=()=>{
    let newProduct={
        name:name,
        unitPrice:unitPrice,
        id:users[users.length-1].id+1
    }
    setUsers([...users,newProduct])
    setName('')
    setPrice(0)
  }
  const handleWishlist=(item)=>{
    const favoritesControl=favorites.find(q=>q.id === item.id);
    
    if(!favoritesControl){
      setFavorites([...favorites,item])
    }

  }
  return (
    <>
      <div className="search_div">
        <div className="search_input">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search..."
            type={"text"}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
       
      </div>
      <div className="all_div">
     
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>unitPrice</th>
            <th>Delete</th>
            <th>Wishlist</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
          loading ? (
            <div className="loader_div">
                <div class="loader"></div>
            </div>
            
          
          ) : (users &&
            users
              .filter((i) => i.name.toLowerCase().includes(search))
              .map((a, key) => {
                return (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>
                      <Link to={`/detail/${a.id}`}>{a.name}</Link>
                    </td>
                    <td>{a.unitPrice}</td>
                    <td>
                      <button onClick={() => handleDelete(a.id)}>Delete</button>
                    </td>
                    <td>
                      <button onClick={()=>handleWishlist(a)}>Wishlist</button>
                    </td>
                    <td>
                      <button onClick={() => goDetail(a.id)}>
                        Go to detail
                      </button>
                    </td>
                  </tr>
                );
              })
          )}
        </tbody>
      </table>
      <div className="search_add">
        <div className="add_header"><h2>New Product Add</h2></div>
            <form>
            <label>
                Name
                <input type={'text'} placeholder='...'value={name} onChange={(e)=>setName(e.target.value)}/>
             </label>
             <label>
                UnitPrice
                <input type={'number'} placeholder='...' value={unitPrice} onChange={(e)=>setPrice(e.target.value)}/>
             </label>
            </form>
            <button onClick={()=>handleAdd()}>Add</button>

        </div>
      </div>
    </>
  );
}

export default Product;
