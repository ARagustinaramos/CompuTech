"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flowbite } from 'flowbite-react';
import Cards from '../../components/cards/Cards';
import { getProducts } from '../../redux/actions/actions';
import CarouselComponent from '../../components/carousel/carousel';
import ByName from '../../components/filters/ByName';
import ByCategory from '../../components/filters/ByCategory.jsx';
import ByBrand from '../../components/filters/ByBrand';
import ByPrice from '../../components/filters/ByPrice.jsx';
import Spinner from '../../components/spinner/Spinner.jsx';
import Pagination from '../../components/pagination/Pagination.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);
  const [brandFilter, setBrandFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceOrder, setPriceOrder] = useState('asc');
  const [dataQt, setDataQt] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return <Spinner />;
  }

  const nPages = Math.ceil(allProducts.length / dataQt);

  const onPageChange = (page) => {
    if (page > 0 && page <= nPages) {
      setCurrentPage(page);
    }
  };

  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const nData = allProducts.slice(indexInicial, indexFinal);

  return (
    <>
      <Flowbite>
        <div className="bg-white antialiased dark:bg-gray-900 md:py-5">
          <CarouselComponent />
          <div className="flex overflow-x-auto sm:justify-center mb-2">
            <ByName/>
            <ByPrice setPriceOrder={setPriceOrder} />
            <ByBrand setBrandFilter={setBrandFilter} />
            <ByCategory setCategoryFilter={setCategoryFilter} />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={onPageChange}
              totalPages={nPages}
            />
          </div>
          <Cards 
            nData={nData} 
            brandFilter={brandFilter} 
            categoryFilter={categoryFilter} 
            priceOrder={priceOrder}
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={nPages}
          />
        </div>
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={onPageChange}
            totalPages={nPages}
          />
        </div>
      </Flowbite>
    </>
  );
};

export default Home;


