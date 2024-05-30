import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flowbite } from 'flowbite-react';
import Cards from '../../components/cards/Cards';
import { getProducts, getBrands, filterByBrand, getCategories, filterByCategory, searchProductsByName, setNameOrder, setPriceOrder } from '../../redux/actions/actions';
import CarouselComponent from '../../components/carousel/carousel';
import ByName from '../../components/filters/ByName';
import ByPrice from '../../components/filters/ByPrice';
import Spinner from '../../components/spinner/Spinner';
import Pagination from '../../components/pagination/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const brands = useSelector(state => state.brands);
  const categories = useSelector(state => state.categories);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const toShow = filteredProducts.length > 0 ? filteredProducts : allProducts;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  const handleBrandFilter = (e) => {
    const selectedValue = e.target.value;
    dispatch(filterByBrand(selectedValue));
    setBrand(selectedValue);
  };

  const handleCategoriesFilter = (e) => {
    const selectedValue = e.target.value;
    dispatch(filterByCategory(selectedValue));
    setCategory(selectedValue);
  };

  const handleSearch = (searchQuery) => {
    dispatch(searchProductsByName(searchQuery));
    dispatch(filterByBrand(''));
    dispatch(filterByCategory(''));
    setBrand('');  // Reset brand filter
    setCategory('');  // Reset category filter
  };

  const handleResetSearch = () => {
    dispatch(getProducts());
    dispatch(filterByBrand(''));
    dispatch(filterByCategory(''));
    setBrand('');  // Reset brand filter
    setCategory('');  // Reset category filter
  };

  return (
    <>
      <Flowbite>
        <div className="bg-white antialiased dark:bg-gray-900 md:py-5">
          <div className="pt-16">
            <CarouselComponent />
            <div className="flex justify-center mb-4 "></div>
            <div className="flex overflow-x-auto sm:justify-center mb-2">
              <ByName resetPriceOrder={() => dispatch(setPriceOrder(''))} />
              <ByPrice resetNameOrder={() => dispatch(setNameOrder(''))} />
              <div className="content-center">
                <select
                  id="brands"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 content-center"
                  value={brand}
                  onChange={handleBrandFilter}
                >
                  <option value="">Elige una marca</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="content-center">
                <select
                  id="categories"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 content-center"
                  value={category}
                  onChange={handleCategoriesFilter}
                >
                  <option value="">Elige una categoría</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleResetSearch}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-0 px-4 flex items-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                </svg>
              </button>
            </div>
            <Cards
              products={toShow}
              setCurrentPage={setCurrentPage}
            />
            <div className="flex overflow-x-auto sm:justify-center bg-white antialiased dark:bg-gray-900 md:py-5">
            </div>
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default Home;