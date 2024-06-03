import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById, setUser } from '../../../redux/actions/actions'; // Asegúrate de que la ruta sea correcta
import axios from 'axios';

import Sidebar from '../user/components/Sidebar';
import Header from '../user/components/Header';
import OrderHistory from '../user/components/OrderHistory';
import ReviewHistory from '../user/components/ReviewHistory';

const DashboardUser = () => {

  return (
    <div className="pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-900 md:py-5">
        <Sidebar />
        <main className="col-span-1 lg:col-span-3 md:p-8 xl:col-span-5 dark:bg-gray-900 p-8">
          <Header />
          {/* Section 1 */}
          <section className="grid sm:grid-cols-1 sm:col-span-1 lg:col-span-3 xl:col-span-5 dark:bg-gray-900 p-4 md:p-8 gap-4 py-2 flex-grow">
            {/* Historial de pedidos */}
            <OrderHistory className="sm:col-span-1 lg:cols-span-3" />
            <ReviewHistory className="sm:col-span-1 lg:cols-span-3 cols-span-6" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardUser;
