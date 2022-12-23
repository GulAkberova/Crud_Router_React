import { Routes,Route } from 'react-router-dom';
import './App.css';

import Product from './copmonents/Product';
import Header from './copmonents/Header';
import Detail from './copmonents/Detail';
import Home from './copmonents/Home';

function App() {


  return (
   
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    
     
    </>
  );
}

export default App;
