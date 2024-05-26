import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flowbite, Pagination as FlowbitePagination } from 'flowbite-react';
import CustomPagination from '../../components/pagination/Pagination.jsx';

import Cards from '../../components/cards/Cards';
import { getProducts } from '../../redux/actions/actions';
import CarouselComponent from '../../components/carousel/carousel';
import ByCategory from '../../components/filters/ByCategory.jsx';
import ByBrand from '../../components/filters/ByBrand';
import Spinner from '../../components/spinner/Spinner.jsx';
import Swal from 'sweetalert2';

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);
  const [brandFilter, setBrandFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dataQt, setDataQt] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return <Spinner />;
  }

  const nPages = Math.ceil(allProducts.length / dataQt);

  return (
    <>
      <Flowbite>
        <div className="bg-white antialiased dark:bg-gray-900 md:py-5">
          <CarouselComponent />
          <div className="flex flex-col items-center mb-4">
            <div className="flex flex-wrap justify-center mb-4">
              <ByBrand setBrandFilter={setBrandFilter} />
              <ByCategory setCategoryFilter={setCategoryFilter} />
            </div>
            <CustomPagination
              currentPage={currentPage}
              totalPages={nPages}
              onPageChange={onPageChange}
            />
          </div>
          <Cards
            currentPage={currentPage}
            dataQt={dataQt}
            brandFilter={brandFilter}
            categoryFilter={categoryFilter}
          />
          <div className="flex flex-col items-center mt-4">
            <CustomPagination
              currentPage={currentPage}
              totalPages={nPages}
              onPageChange={onPageChange}
            />
            <div className="mt-4 text-gray-700 dark:text-gray-300">
              Página {currentPage} de {nPages}
            </div>
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Home;