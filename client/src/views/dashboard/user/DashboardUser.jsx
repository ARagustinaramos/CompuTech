import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../../firebase/firebase"; 
import { getUserById } from '../../../redux/actions/actions'

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import OrderHistory from "./components/OrderHistory";
import Spinner from '../../../components/spinner/Spinner'
import ReviewHistory from "./components/ReviewHistory";



const DashboardUser = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await getUserById();

      if (response) {
        setData(response.data);
      }
    };

    dataFetch();
  }, []);

  console.log('data', data)
  /*******************************************************************/  
  
  
  const { auth } = useFirebase();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        navigate('/'); // Utiliza navigate en lugar de history.push
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (isLoading) {
    return <Spinner className=''/>; // Puedes mostrar un spinner de carga mientras se verifica la autenticación
  }
  

  return(
    <div className="pt-16">
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-900 md:py-5">
      <Sidebar/>
      <main className="col-span-1 lg:col-span-3 md:p-8 xl:col-span-5 dark:bg-gray-900 p-8">
        <Header/>
        {/* Section 1 */}
        <section className="grid sm:grid-cols-1 sm:col-span-1 lg:col-span-3 xl:col-span-5 dark:bg-gray-900 p-4 md:p-8 gap-4 py-2 flex-grow">
          {/* Historial de pedidos */}
          <OrderHistory user={user} className="sm:col-span-1 lg:cols-span-3"/>
          <ReviewHistory user={user} className="sm:col-span-1 lg:cols-span-3 cols-span-6" />

        </section>
      </main>
    </div>
    </div>
  );

};

export default DashboardUser