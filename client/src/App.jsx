import {  useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"

import Success from './views/redirect/Success';
import Failure from './views/redirect/Failure';
import Pending from './views/redirect/Pending';


import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import About from './views/about/About'
import Cart from './views/cart/Cart'
import Perfil from './views/dashboard/user/components/Perfil'
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
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/userDashboard" element={<DashboardUser />}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/success" element={<Success />} ></Route>
        <Route path="/failure" element={<Failure />} ></Route>
        <Route path="/pending" element={<Pending />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App