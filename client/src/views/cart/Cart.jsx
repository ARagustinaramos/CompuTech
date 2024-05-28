import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity, setCartItems } from '../../redux/actions/actions';
import { getMemoizedCartItems } from '../../redux/selectors/selectors';
import PayPalButton from '../../components/PayPalButton'; 
import { useAuth0 } from "@auth0/auth0-react"; 

const Cart = () => {
    const [showPayPalButton, setShowPayPalButton] = useState(false);
    const cartItems = useSelector(getMemoizedCartItems);
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
        if (storedCartItems) {
            dispatch(setCartItems(storedCartItems)); 
        }
    }, [dispatch]);
    
    useEffect(() => {
        if (!isAuthenticated) {
            const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (storedCartItems) {
                sessionStorage.setItem('cartItems', JSON.stringify(storedCartItems));
            }
            dispatch(setCartItems([])); 
            localStorage.removeItem('cartItems');
        }
    }, [isAuthenticated, dispatch]);

    
    const items = cartItems.map(item => ({
        id_Product: item.id_Product,
        name: item.name,
        price: item.price,
        quantity: item.quantity
    }));

    const saveCartToLocalStorage = (cartItems) => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
    
    const handleRemoveItemClick = (itemId) => {
        dispatch(removeFromCart(itemId));
        saveCartToLocalStorage(cartItems.filter(item => item.cartItemId !== itemId));
    };
    
    const handleQuantityChange = (itemId, newQuantity) => {
        const quantity = Math.max(1, parseInt(newQuantity, 10) || 1);
        if (!isNaN(quantity)) {
            dispatch(updateCartItemQuantity(itemId, quantity));
            const updatedCartItems = cartItems.map(item => 
                item.cartItemId === itemId ? { ...item, quantity } : item
            );
            saveCartToLocalStorage(updatedCartItems);
        }
    };
    
    const handleIncrement = (itemId, currentQuantity) => {
        const newQuantity = parseInt(currentQuantity, 10) + 1;
        handleQuantityChange(itemId, newQuantity);
    };
    
    const handleDecrement = (itemId, currentQuantity) => {
        const newQuantity = Math.max(1, parseInt(currentQuantity, 10) - 1);
        handleQuantityChange(itemId, newQuantity);
    };

    const total = cartItems
        .map(item => {
            const itemPrice = parseFloat(item.price);
            const itemQuantity = parseInt(item.quantity, 10);
            return !isNaN(itemPrice) && !isNaN(itemQuantity) ? itemPrice * itemQuantity : 0;
        })
        .reduce((acc, curr) => acc + curr, 0);

    const handleProceedToCheckout = () => {
        setShowPayPalButton(true);
    };

    return (
        <div className="pt-16">
            <div className="flex flex-col min-h-screen">
                <section className="flex-grow bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center">Carrito de compras</h2>

                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center mt-6 sm:mt-8">
                                <img src="https://www.ancestralanimalsoul.com/imagenes/carrito-vacio.png" alt="Carrito vacío" className="mx-auto mb-4 h-48 w-48" />
                                <p className="mt-6 sm:mt-8 text-2xl font-bold text-gray-500 dark:text-gray-400 text-center">El carrito está vacío</p>
                                <Link to="/" className="mt-4 inline-block rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Seguir comprando
                                </Link>
                            </div>
                        ) : (
                            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                    <ul className="space-y-6">
                                        {cartItems.map((item, index) => (
                                            <li key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                    <Link to={`/detail/${item.id_Product}`} className="shrink-0 md:order-1">
                                                        <img 
                                                            className="h-20 w-20 " 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                        />
                                                        <img 
                                                            className="h-20 w-20 hidden " 
                                                            src={item.darkImage} 
                                                            alt={item.name} 
                                                        />
                                                    </Link>

                                                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                        <div className="flex items-center">
                                                            <button
                                                                type="button"
                                                                id="decrement-button"
                                                                data-input-counter-decrement="counter-input"
                                                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                                onClick={() => handleDecrement(item.cartItemId, item.quantity)}
                                                            >
                                                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                                </svg>
                                                            </button>
                                                            <input
                                                                type="text"
                                                                id="counter-input"
                                                                data-input-counter
                                                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                                placeholder=""
                                                                value={item.quantity || 1}
                                                                onChange={(e) => handleQuantityChange(item.cartItemId, e.target.value)}
                                                                required
                                                            />
                                                            <button
                                                                type="button"
                                                                id="increment-button"
                                                                data-input-counter-increment="counter-input"
                                                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                                onClick={() => handleIncrement(item.cartItemId, item.quantity)}
                                                            >
                                                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="text-end md:order-4 md:w-32">
                                                            <p className="text-base font-bold text-gray-900 dark:text-white">{(item.price * item.quantity).toFixed(2)}$</p>
                                                        </div>
                                                    </div>

                                                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                        <Link to={`/detail/${item.id_Product}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</Link>

                                                        <div className="flex items-center gap-4">
                                                            <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 21l6.218-7.999C23 8 17.5 1 12.01 6.001Z" />
                                                                </svg>
                                                                Save for later
                                                            </button>
                                                            <div className="flex h-4 items-center border-l border-gray-300 dark:border-gray-600">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center ps-4 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                                    onClick={() => handleRemoveItemClick(item.cartItemId)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 md:mt-10 lg:sticky lg:top-36 lg:mt-0">
                                    <div className="space-y-4 border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Subtotal</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{total.toFixed(2)}$</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Envío</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">0$</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-base font-medium text-gray-900 dark:text-white">Total</span>
                                            <span className="text-base font-medium text-gray-900 dark:text-white">{total.toFixed(2)}$</span>
                                        </div>

                                        <button 
                                            type="button"
                                            className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={handleProceedToCheckout}
                                        >
                                            Proceed to Checkout
                                        </button>

                                        {showPayPalButton && (
                                            <div className="mt-4">
                                                <PayPalButton items={items} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cart;
