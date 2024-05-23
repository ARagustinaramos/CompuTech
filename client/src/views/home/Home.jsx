"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flowbite, Pagination } from 'flowbite-react';

import Cards from '../../components/cards/Cards';
import { getProducts } from '../../redux/actions/actions';
import CarouselComponent from '../../components/carousel/carousel.jsx'
import ByName from '../../components/filters/ByName';
import ByBrand from '../../components/filters/ByBrand'; 
import Spinner from '../../components/spinner/Spinner.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);
  const [brandFilter, setBrandFilter] = useState('');

  const [dataQt, setDataQt] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onPageChange = (page) => setCurrentPage(page);

  // Verifica si allProducts está definido y es un array
  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return <Spinner />;
  }

  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const nData = allProducts.slice(indexInicial, indexFinal);
  const nPages = Math.ceil(allProducts.length / dataQt);

  return (
    <>
      <Flowbite>
        <div className="bg-white antialiased dark:bg-gray-900 md:py-5">
          <CarouselComponent />
          <div className="flex overflow-x-auto sm:justify-center mb-2">
            <ByName />
            <ByBrand setBrandFilter={setBrandFilter} />
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={nPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
          <Cards nData={nData} brandFilter={brandFilter} />
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={nPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Home;
