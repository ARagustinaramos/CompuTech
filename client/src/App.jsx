import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
//import Create from './views/create/Create'
//import Landing from "./views/landing/Landing"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import AboutComponent from './components/aboutComponent/AboutComponent'

function App() {


  return (
    <>
    <SearchBar />
    <Navbar/>
      <Routes>
          {/*
        <Route path="/" element={<Landing></Landing>}></Route>

        <Route path="/create" element={<Create></Create>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>        
      */}
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App