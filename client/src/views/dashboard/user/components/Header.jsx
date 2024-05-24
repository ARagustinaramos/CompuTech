//Auth 0
import { useAuth0 } from '@auth0/auth0-react';


const Header = () => {
  const { user , isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }


  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">
        🌞 Buenos días, <span className="text-primary-100">{user.given_name}</span>
      </h1>

    </header>
  );
};

export default Header;
