import { useEffect, useState } from "react";
import { useFirebase } from "../../../../firebase/firebase"; // Importa el hook useFirebase
import Order from "./Order";
import Spinner from '../../../../components/spinner/Spinner'

const OrderHistory = (currentUser) => {
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

  if (isLoading) {
    return <Spinner />;
  }
    return(
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-600">
            <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Últimos pedidos</h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                
            </a>
            </div>
            <div className="flow-root">
                  {
                  <ul key={user?.id} role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <Order currentUser={currentUser}/>
                  </ul>
                 
                }
                <h1 className='text-bold dark:text-white'>...Aun no has hecho ningún pedido 😠</h1>
      </div>
    </div>
  );
};

export default OrderHistory;
