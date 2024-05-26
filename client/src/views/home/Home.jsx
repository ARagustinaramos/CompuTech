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
  const [priceOrder, setPriceOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return <Spinner />;
  }

  const nPages = Math.ceil(allProducts.length / 12);

  const onPageChange = (page) => {
    if (page > 0 && page <= nPages) {
      setCurrentPage(page);
    }
  };

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
          </div>
          <div className="flex overflow-x-auto sm:justify-center mb-4">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={onPageChange}
              totalPages={nPages}
            />
          </div>
          <Cards 
            brandFilter={brandFilter} 
            categoryFilter={categoryFilter} 
            priceOrder={priceOrder}
            currentPage={currentPage}
            setCurrentPage={onPageChange}
          />
          <div className="flex overflow-x-auto sm:justify-center mt-4">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={onPageChange}
              totalPages={nPages}
            />
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Home;