import { useState } from "react";
//Auth0
import { useAuth0 } from '@auth0/auth0-react';
// Icons
import {RiHome3Line, RiWalletLine, RiPieChartLine, RiMore2Fill, RiCloseFill} from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { FaRegGrinBeamSweat } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";



const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user , isLoading} = useAuth0();

  
  return (

    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Perfil de ususario */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src=''
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Maria Florencia Gala</h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
            florycordoba35@gmail.com
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
          <a
              href="/perfil"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <BsPersonSquare /> Perfil
            </a>
            <a
              href="/home"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <IoCart /> Carrito de compras
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Historial de compras
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine /> Reclamos
            </a>
            <a href="/about" 
               className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors" 
               >
              <FaRegGrinBeamSweat />Quienes somos
               </a>
          </nav>

        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  )
};

export default Sidebar;
