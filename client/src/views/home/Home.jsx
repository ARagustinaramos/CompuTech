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
import Swal from 'sweetalert2';
import Pagination from '../../components/pagination/Pagination.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);
  const [brandFilter, setBrandFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceOrder, setPriceOrder] = useState('');
  const [nameOrder, setNameOrder] = useState('');
  const [dataQt, setDataQt] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const resetNameOrder = () => setNameOrder('');
  const resetPriceOrder = () => setPriceOrder('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
        <div className="pt-16">
          <CarouselComponent />
          <div className="flex overflow-x-auto sm:justify-center mb-2">
            <ByName setNameOrder={setNameOrder} resetPriceOrder={resetPriceOrder} />
            <ByPrice setPriceOrder={setPriceOrder} resetNameOrder={resetNameOrder} />
            <ByBrand setBrandFilter={setBrandFilter} />
            <ByCategory setCategoryFilter={setCategoryFilter} />
          </div>
          <div className="flex overflow-x-auto sm:justify-center mb-4">
          </div>
          <Cards
            brandFilter={brandFilter}
            categoryFilter={categoryFilter}
            priceOrder={priceOrder}
            nameOrder={nameOrder}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="flex overflow-x-auto sm:justify-center bg-white antialiased dark:bg-gray-900 md:py-5">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={nPages}
          />
        </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Home;