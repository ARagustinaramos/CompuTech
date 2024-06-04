import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../redux/actions/actions'; // Asegúrate de que la ruta sea correcta
import axios from 'axios';
import { auth } from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import Sidebar from '../user/components/Sidebar';
import Header from '../user/components/Header';
import OrderHistory from '../user/components/OrderHistory';
import ReviewHistory from '../user/components/ReviewHistory';

const DashboardUser = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  const currentUser = useSelector((state) =>state.allUsers.find(u => u.mail === user?.email));



  //console.log('dashboardUser', currentUser)


  return (
    <div className="pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-900 md:py-5">
        <Sidebar currentUser={currentUser}/>
        <main className="col-span-1 lg:col-span-3 md:p-8 xl:col-span-5 dark:bg-gray-900 p-8">
          <Header />
          {/* Section 1 */}
          <section className="grid sm:grid-cols-1 sm:col-span-1 lg:col-span-3 xl:col-span-5 dark:bg-gray-900 p-4 md:p-8 gap-4 py-2 flex-grow">
            {/* Historial de pedidos */}
            <OrderHistory currentUser={currentUser} className="sm:col-span-1 lg:cols-span-3" />
          </section>
        </main>
      </div>
    </div>
            //<ReviewHistory className="sm:col-span-1 lg:cols-span-3 cols-span-6" />
  );
};

export default DashboardUser;
