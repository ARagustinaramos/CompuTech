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
import Perfil from './views/dashboard/user/components/Perfil'
import DashboardUser from './views/dashboard/user/DashboardUser'
import DashboardAdmin from './views/dashboard/admin/DashboardAdmin'


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
          {/*
        <Route path="/" element={<Landing></Landing>}></Route>
        
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>        
      */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/dashboardadmin" element={<DashboardAdmin />}></Route>
        <Route path="/dashboarduser" element={<DashboardUser />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App