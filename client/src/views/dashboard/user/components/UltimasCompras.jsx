//Auth 0
import { useAuth0 } from '@auth0/auth0-react';


const UltimasCompras = () => {
  const { user , isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (

  );
};

export default UltimasCompras
         
         
         
         
