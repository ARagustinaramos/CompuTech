import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import SignInButton from '../../firebase/authGoogle';
import { SignUpForm, SignInForm } from '../../firebase/authManual';

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [isRegistering, setIsRegistering] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <li className="relative content-center">
      {!user ? (
        <div>
          {!isRegistering ? (
            <div>
              <SignInButton />
              <SignInForm />
              <p className="mt-2">
                ¿No tienes una cuenta? <button onClick={() => setIsRegistering(true)} className="text-blue-500">Regístrate</button>
              </p>
            </div>
          ) : (
            <div>
              <SignUpForm />
              <p className="mt-2">
                ¿Ya tienes una cuenta? <button onClick={() => setIsRegistering(false)} className="text-blue-500">Inicia Sesión</button>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={toggleDropdown}
            >
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-8 w-8 rounded-full mr-2"
              />
              Hola, {user.displayName}
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {dropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="/dashboardadmin/manage/products"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Administrador
                </a>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Perfil
                </a>
                <a
                  href="/account-settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Configuración de Cuenta
                </a>
                <a
                  href="/order-history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Historial de Pedidos
                </a>
                <div className="border-t border-gray-100"></div>
                <button
                  onClick={() => auth.signOut()}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
