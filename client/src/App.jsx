import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import './App.css'

import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Create from './views/create/Create'
import Landing from "./views/landing/Landing"
import Navbar from './components/navbar/Navbar'
import AboutComponent from './components/aboutComponent/aboutComponent'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/form" element={<Create></Create>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>

      </Routes>


    </>
  )
}

export default App
