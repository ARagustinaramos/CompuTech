import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from '@tremor/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getAllSales, getDetail } from '../../../redux/actions/actions';
import { useParams } from 'react-router-dom';

export function TableDashboardReviews() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const producto = useSelector((state) => state.productDetail);
  const {id} = useParams();
  
  console.log(producto?.reviews)

  // Estado local para manejar el estado activo/inactivo de cada usuario
  const [userStatus, setUserStatus] = useState({});


  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        dispatch(getDetail(id));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducto();
    window.scrollTo(0, 0);

    
  }, [dispatch, id]);


  useEffect(() => {
    const statusMap = {};
    allUsers.forEach(user => {
      statusMap[user.id] = user.status === 'Online' ? 'activo' : 'inactivo';
    });
    setUserStatus(statusMap);
  }, [allUsers]);

  const handleStatusChange = (userId, status) => {
    setUserStatus(prevStatus => ({
      ...prevStatus,
      [userId]: status,
    }));
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>

            <th scope="col" className="px-6 py-3">
              USUARIO
            </th>
            <th scope="col" className="px-6 py-3">
              Review
            </th>
            <th scope="col" className="px-6 py-3">

            </th>
            <th scope="col" className="px-6 py-3">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={user.image} alt={`${user.name} image`} />
                <div className="ps-3">
                  <div className="text-base font-semibold">{user.name}</div>
                  <div className="font-normal text-gray-500">{user.mail}</div>
                </div>
              </th>
              <td className="px-6 py-4">

              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">


                </div>
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalle</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
