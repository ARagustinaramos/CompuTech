//Auth 0
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user , isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl text-gray-600 dark:text-gray-100 md:text-3xl font-bold  dark:bg-gray-900 dark:border-gray-900" >
        Hola, <span className="  dark:border-gray-900" >{user.given_name}</span>
      </h1>
    </header>
  );
};

export default Header;
