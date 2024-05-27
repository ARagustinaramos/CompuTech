import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../../redux/actions/actions';
import { getMemoizedCartItems } from '../../redux/selectors/selectors';
import PayPalButton from '../../components/PayPalButton'; // Asegúrate de que esta ruta sea correcta

const Cart = () => {
    const [showPayPalButton, setShowPayPalButton] = useState(false);
    const cartItems = useSelector(getMemoizedCartItems);
    const dispatch = useDispatch();

    const items = cartItems.map(item => ({
        id_Product: item.id_Product,
        name: item.name,
        price: item.price,
        quantity: item.quantity
    }));

    const handleRemoveItemClick = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const quantity = Math.max(1, parseInt(newQuantity, 10) || 1);
        if (!isNaN(quantity)) {
            dispatch(updateCartItemQuantity(itemId, quantity));
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
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                            </svg>
                                                            Add to Favorites
                                                        </button>

                                                        <button onClick={() => handleRemoveItemClick(item.cartItemId)} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                            </svg>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 flex-none space-y-4 lg:mt-0">
                                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resumen de la orden</h3>
                                   
                                </div>

                                <div className="space-y-4">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">{item.name} x {item.quantity}</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{(item.price * item.quantity).toFixed(2)}$</dd>
                                            </dl>
                                        </div>
                                    ))}
                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">{total.toFixed(2)}$</dd>
                                    </dl>
                                </div>

                                <button 
                                    onClick={handleProceedToCheckout} 
                                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 sm:text-base"
                                >
                                    Proceder con la compra
                                </button>

                                {showPayPalButton && (
                                    <div className="mt-6">
                                        <PayPalButton total={total} items={items} />
                                    </div>
                                )}
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