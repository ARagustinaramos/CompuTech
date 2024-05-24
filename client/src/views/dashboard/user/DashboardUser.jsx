//REACT-REDUX
import { useState ,useSelector} from "react";


//COMPONENTES
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Iconos
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import {  RiHashtag } from "react-icons/ri";

import { useAuth0 } from '@auth0/auth0-react';




const DashboardUser = () => {
  const { user , isLoading} = useAuth0();

  console.log('user', user)

 /*  if(user){
    const name = user.name
    const email = user.email
    const picture = user.picture */
   

  return(
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  dark:bg-gray-900 md:py-5">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header/>
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Perfil??? editar perfil???' */}

          {/* Historial de pedidos */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Historial de pedidos</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <FaCheck className="w-7 h-7 object-cover rounded-full"/>
                <div>
                  <h3 className="font-bold">Pedido entregado [fecha]</h3>
                  <p className="text-gray-500">Informacion del pedido</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
              <ImCross className="w-7 h-7 object-cover rounded-full"/>
                <div>
                  <h3 className="font-bold">Pedido cancelado [fecha]</h3>
                  <p className="text-gray-500">Informacion del pedido</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Ver todos los pedidos
                </a>
              </div>
            </div>
          </div>
        </section>
          {/* Historial de compras */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Historial de compras</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Producto 1*/}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="/assets/prueba.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Mouse Login L3508</h3>
                    <p className="text-gray-500">Con cable de 5mts ideal para trabajar desde la cama</p>
                  </div>
                </div>
                <div>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/* Producto 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="/assets/prueba.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Mouse Login L3508</h3>
                    <p className="text-gray-500">Con cable de 5mts ideal para trabajar desde la cama</p>
                  </div>
                </div>
                <div>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Novedades</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/Mouse2.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Mouse logitech</h3>
                    <p className="text-gray-500">Subido hace 3 hs</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                  Mouse L356
                </h5>
                <p className="text-gray-500">
                Mouse. Iluminado. Plug & Play. Rueda de desplaz. suave. 3 botones de funcion. Sensor de 800/1000/1200 ppp. Compatible con Windows y Mac.
                </p>
              </div>
                </div>
              </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardUser;