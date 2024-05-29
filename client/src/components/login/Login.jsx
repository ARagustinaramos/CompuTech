import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        const restoreCartItems = () => {
            const storedSessionCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
            if (!storedSessionCartItems) {
                const storedLocalCartItems = JSON.parse(localStorage.getItem('cartItems'));
                if (storedLocalCartItems) {
                    sessionStorage.setItem('cartItems', JSON.stringify(storedLocalCartItems));
                    
                }
            }
        };

        restoreCartItems();
    }, []);

    const handleLogin = () => {
        loginWithRedirect();
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;











