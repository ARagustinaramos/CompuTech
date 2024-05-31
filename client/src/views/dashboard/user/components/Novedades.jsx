import { useEffect, useState } from "react";
import { useFirebase } from "./firebase"; // Importa el hook useFirebase

import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

const Novedades = () => {
  const { auth } = useFirebase();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (isLoading) return <div>Cargando ...</div>;

  return (
    <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
      <h1 className="text-2xl font-bold mb-8">Novedades</h1>
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
  );
};

export default Novedades;