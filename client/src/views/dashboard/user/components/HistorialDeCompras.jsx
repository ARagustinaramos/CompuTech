// import { useEffect, useState } from "react";
// import { useFirebase } from "../../../../firebase/firebase"; // Importa el hook useFirebase
// import ComponenteProducto from "./ComponenteProducto";

// const HistorialDeCompras = () => {
//   const { auth } = useFirebase();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         setIsLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }
  
//   return (
//     <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-600">
//     <div className="flex items-center justify-between mb-4">
//     <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Últimos pedidos</h5>
//     <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//         Ver todos
//     </a>
//     </div>
//     <div className="flow-root">
//         <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
//           <ComponenteProducto />
//           <ComponenteProducto />
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HistorialDeCompras;
