import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    logout({ logoutParams: { returnTo: "https://computech.vercel.app/" } });
  };

  return (
    <button onClick={handleLogout}>
      LogOut
    </button>
  );
};

export default LogoutButton;
