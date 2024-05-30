//Auth 0
import { useAuth0 } from '@auth0/auth0-react';

import Cargando from '../components/Cargando'

const Header = () => {

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } = useAuth0();


  return (
    <header className="md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl text-gray-600 dark:text-gray-100 md:text-3xl font-bold  dark:bg-gray-900 dark:border-gray-900" >
        Hola, <span className="dark:border-gray-900" >{user?user.given_name:' '}</span>
      </h1>
    </header>
  );
};

export default Header;
