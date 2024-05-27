import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLogout = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <li className="relative content-center">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent content-center"
        >
          Iniciar Sesión
        </button>
      ) : (
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={toggleDropdown}
            >
              <img
                src={user.picture}
                alt={user.name}
                className="h-8 w-8 rounded-full mr-2"
              />
              Hola, {user.name}
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {dropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 dark:bg-gray-800 dark:ring-gray-700">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="/dashboardadmin/manage/products"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  Administrador
                </a>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  Perfil
                </a>
                <a
                  href="/account-settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  Configuración de Cuenta
                </a>
                <a
                  href="/order-history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  Historial de Pedidos
                </a>
                <div className="border-t border-gray-100 dark:border-gray-700"></div>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default LoginLogout;