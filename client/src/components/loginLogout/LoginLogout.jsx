import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../firebase/firebase";
import { signInWithRedirect } from 'firebase/auth';

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Usuario registrado exitosamente. ¡Por favor, inicia sesión!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <li className="relative content-center">
      {!user ? (
        <div>
          <button
            onClick={() => signInWithRedirect(auth, googleProvider)}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
          >
            Iniciar Sesión con Google
          </button>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="flex items-center justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={toggleDropdown}
            >
              Iniciar Sesión
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
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <form onSubmit={handleEmailLogin}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block py-2 px-3 mt-2 text-gray-900 rounded"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block py-2 px-3 mt-2 text-gray-900 rounded"
                      required
                    />
                    <button
                      type="submit"
                      className="block py-2 px-3 mt-2 text-gray-900 rounded hover:bg-gray-100"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </div>
            )}
          </div>
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