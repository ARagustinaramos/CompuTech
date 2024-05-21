import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import './App.css'

import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Create from './views/create/Create'
import Landing from "./views/landing/Landing"
import Footer from './components/footer/Footer'
import About from './views/about/About'

function App() {


  return (
    <>
      <Routes>
          {/*
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path={`/detail/:id`} element={<Detail />}></Route>        
      */}
      <Route path="/about" element={<About/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
