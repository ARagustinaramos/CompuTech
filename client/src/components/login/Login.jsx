import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      localStorage.setItem('auth_token', token);
    }
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
