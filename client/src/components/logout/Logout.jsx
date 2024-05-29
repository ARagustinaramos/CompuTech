import React from "react";
import { useAuth } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const LogoutButton = () => {
  const [, , logout] = useAuth(auth);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    logout();
  };

  return (
    <button onClick={handleLogout}>
      LogOut
    </button>
  );
};

export default LogoutButton;
