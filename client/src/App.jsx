import {  useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"


import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import About from './views/about/About'
import Cart from './views/cart/Cart'
//import DashboardAdmin from './views/dashboard/admin/DashboardAdmin'
import DashboardUser from './views/dashboard/user/DashboardUser'


import { saveCartToLocalStorage } from '../src/redux/reducer/localStorageHelpers';

function App() {
  const cartItems = useSelector((state) => state.items);

    useEffect(() => {
        saveCartToLocalStorage(cartItems);
    }, [cartItems])


  return (
    
    <>
    
    <Navbar/>
    
      <Routes>
        <Route path="/user" element={<DashboardUser />}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App