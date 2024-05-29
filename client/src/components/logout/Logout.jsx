import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../redux/actions/actions';

const LogoutButton = () => {
    const { logout } = useAuth0();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('cartItems');
        sessionStorage.removeItem('cartItems');
        dispatch(setCartItems([]));  // Clear cart in Redux store
        logout({ returnTo: window.location.origin });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;









