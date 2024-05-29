import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../redux/actions/actions';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
        const restoreCartItems = () => {
            if (isAuthenticated) {
                const storedSessionCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
                if (storedSessionCartItems) {
                    dispatch(setCartItems(storedSessionCartItems));
                } else {
                    const storedLocalCartItems = JSON.parse(localStorage.getItem('cartItems'));
                    if (storedLocalCartItems) {
                        dispatch(setCartItems(storedLocalCartItems));
                        sessionStorage.setItem('cartItems', JSON.stringify(storedLocalCartItems));
                    }
                }
            }
        };

        restoreCartItems();
    }, [dispatch, isAuthenticated]);

    const handleLogin = () => {
        loginWithRedirect();
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;










