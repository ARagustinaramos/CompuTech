import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail, addToCart } from '../../redux/actions/actions';
import Swal from 'sweetalert2';
import Spinner from '../../../src/components/spinner/Spinner';
import { ReviewsDetailProduct } from '../../components/reviews/ReviewsDetailProduct';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.productDetail);

  const isLoading = useSelector((state) => state.isLoading);
  const [isNavigating, setIsNavigating] = useState(false);
  const [user] = useAuthState(auth);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAddToCart = () => {
    if (!user) {
      Swal.fire("Por favor inicia sesión para agregar productos al carrito");
      return;
    }
    dispatch(addToCart(producto));
    Swal.fire("Producto agregado al carrito!");
  };

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        dispatch(getDetail(id));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducto();
    window.scrollTo(0, 0);

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  if (isLoading || !producto || isNavigating) {
    return <Spinner />;
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? producto.product.image.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === producto.product.image.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const reviews = producto.review || []; 
  console.log(producto.product?.price);
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white py-8 antialiased dark:bg-gray-900 dark:text-gray-200 md:py-16">
      <div className="container px-5 mx-auto flex flex-wrap">
        { <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6">
        {producto.product && producto.product?.image.length > 1 &&  (
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              <div className="relative h-56 overflow-hidden rounded-lg md:h-72 w-full">
                {producto.product?.image && producto.product?.image.map((imageUrl, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
                    data-carousel-item={index === activeIndex}
                  >
                    <img
                       src={imageUrl}
                      className="w-full h-full object-cover"
                      alt={`Product Image ${index + 1}`}
                      style={{ objectFit: 'contain', height: '100%' }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {producto.product?.image.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'} group-hover:bg-white group-focus:ring-4 group-focus:ring-white focus:outline-none`}
                    aria-current={index === activeIndex}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrev}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-white group-focus:ring-4 group-focus:ring-white focus:outline-none">
                  <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNext}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-white group-focus:ring-4 group-focus:ring-white focus:outline-none">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          )}
          {producto.product?.image && producto.product?.image.length === 1 && (
            <img
              src={producto.product?.image[0]}
              className="w-full h-auto object-cover"
              alt="Product"
            />
          )}
        </div> }
        { <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 dark:text-gray-400 tracking-widest">{producto.product?.brand}</h2>
          <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">{producto.product?.name}</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-400 ml-3">{reviews.length} Reviews</span>
            </span>
          </div>
          <p className="leading-relaxed text-gray-500 dark:text-gray-400">{producto.product?.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 dark:border-gray-700 mb-5">
            <div className="flex">
              
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">${producto.product?.price}</span>
            <button onClick={handleAddToCart} className="flex ml-auto text-white bg-blue-700 hover:bg-blue-800 border-0 py-2 px-6 focus:outline-none rounded">Agregar al carrito</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l7.78 7.78a.75.75 0 001.06 0l7.78-7.78a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div> }
      </div>
      <div className="mt-8">
        <ReviewsDetailProduct reviews={reviews} />
      </div>
    </section>
  );
};

export default Detail;