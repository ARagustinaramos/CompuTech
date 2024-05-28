import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    if (storedCartItems) {
      localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
    }
  }, []);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
