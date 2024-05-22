"use client";
import React from 'react'
import { DarkThemeToggle, Flowbite } from "flowbite-react";
=======

>>>>>>> ab47055dd57db6749eaa8b53369d22ad403e56b7
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import Navbar from '../../components/navbar/Navbar'
import { getByName } from '../../redux/actions/actions'
//import Pagination from '../../components/pagination/Pagination'
import CarouselComponent from '../../components/carousel/carousel'
import ByBrand from '../../components/filters/ByBrand'
import ByCategory from '../../components/filters/ByCategory'




import { Pagination } from "flowbite-react";
import ByName from '../../components/filters/ByName';
//import { useState } from "react";

const Home = () => {


  const dispatch = useDispatch()
<<<<<<< HEAD
  const allPokemons = useSelector((state) => state.copyPokemons)
=======
  const allProducts = useSelector((state)=>state.copyProducts)
>>>>>>> ab47055dd57db6749eaa8b53369d22ad403e56b7

  const [dataQt, setDataQt] = useState(12);
  //const [currentPage, setCurrentPage] = useState(1)

  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  function handleSubmit() {
    e.preventDefault()
    dispatch(getByName(searchString))
  }

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);


  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const nData = allProducts.slice(indexInicial, indexFinal)
  const nPages = Math.ceil(allProducts.length / dataQt);

  return (
    <>
      <Flowbite>
        <div className="bg-white antialiased dark:bg-gray-900 md:py-5">

          <CarouselComponent />
          {/* <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            nPages={nPages}
          /> */}
          <div className="flex overflow-x-auto sm:justify-center mb-2">
          <ByName></ByName>
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
          <Cards nData={nData} />

          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              showIcons
            />
          </div>

          {/* <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            nPages={nPages}
          /> */}
        </div>

      </Flowbite>
    </>
  )
}

export default Home;