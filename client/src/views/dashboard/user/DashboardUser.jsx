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

  console.log('user desde dashboard:', user)
  
  return (
    <div className="min-h-screen dark:bg-gray-900 flex">
      <div className="p-3 w-1/7">
        <Sidebar/>
      </div>
      <main className="flex flex-col mx-2 flex-grow dark:bg-gray-900">
        <Header className="mx-2 my-2" />
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
  );
  
  
  
};

export default DashboardUser