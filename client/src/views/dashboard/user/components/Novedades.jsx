//Auth 0
import { useAuth0 } from '@auth0/auth0-react';
// Iconos
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import {  RiHashtag } from "react-icons/ri";

const Novedades = () => {
    const { user , isLoading} = useAuth0();

    if (isLoading) return <div>Cargando ...</div>;

    return(
       <div className="justify-between">
                  <div className="bg-white p-6 rounded-xl shadow-2xl">
                  <h1 className="text-2xl font-bold pb-3 ">Novedades</h1>
                    <div className="flex items-center gap-4 pt-2 ">
                      <FaCheck className="w-8 h-8 object-cover rounded-full"/>
                      <div>
                        <h3 className="font-bold">Pedido entregado [fecha]</h3>
                        <p className="text-gray-500">Informacion del pedido</p>
                      </div>
                      <div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8 pt-4">
                    <ImCross className="w-7 h-7 object-cover rounded-full"/>
                      <div>
                        <h3 className="font-bold">Pedido cancelado [fecha]</h3>
                        <p className="text-gray-500">Informacion del pedido</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="hover:text-primary-100 transition-colors hover:underline pb-3 pr-4"
                      >
                        Ver todos los pedidos
                      </a>
                    </div>
                  </div>
       </div>
    )

}

export default Novedades