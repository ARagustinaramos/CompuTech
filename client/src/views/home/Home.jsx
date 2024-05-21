import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import Navbar from '../../components/navbar/Navbar'
import { getByName } from '../../redux/actions/actions'
import Pagination from '../../components/pagination/Pagination'

const Home = () => {


  const dispatch = useDispatch()
  const allPokemons = useSelector((state)=>state.copyPokemons)

  const [dataQt, setDataQt] = useState(12);
  const [currentPage, setCurrentPage] = useState(1)

  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  function handleSubmit() {
    e.preventDefault()
    dispatch(getByName(searchString))
  }



  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const nData = allPokemons.slice(indexInicial, indexFinal)
  const nPages = Math.ceil(allPokemons.length / dataQt);

  return (
    <>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}></Navbar>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        nPages={nPages}
      />
      <Cards nData={nData}/>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        nPages={nPages}
      />
    </>
  )
}

export default Home