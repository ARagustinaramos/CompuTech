//REACT-REDUX
import { useState ,useSelector} from "react";

import { useAuth0 } from '@auth0/auth0-react';

//COMPONENTES
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HistorialDePedidos from "./components/HistorialDePedidos";
import HistorialDeCompras from './components/HistorialDeCompras'
import Novedades from './components/Novedades'
import Cargando from './components/Cargando'



const DashboardUser = () => {

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } = useAuth0();

  console.log('user', user)

  return(
    <div className="pt-16">
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  dark:bg-gray-900 md:py-5">
      <Sidebar/>
      <main className=" xl:col-span-5 dark:bg-gray-900 p-8">
        <Header/>
        {/* Section 1 */}
        <section className="grid grid-cols-2 gap-4 py-2 flex-grow">
          {/* Historial de pedidos */}
          <Novedades />
          <HistorialDePedidos className="cols-span-3" />
          <HistorialDeCompras className="cols-span-6" />
          <div className="container col-span-2"></div>
        </section>
      </main>
    </div>
    </div>
  );
  
  
  
};

export default DashboardUser