import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from '@tremor/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/actions';

export function TableDashboardAdminManageUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  // Estado local para manejar el estado activo/inactivo de cada usuario
  const [userStatus, setUserStatus] = useState({});

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">  {/* Añadido margen inferior */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${user.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor={`checkbox-table-search-${user.id}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={user.image} alt={`${user.name} image`} />
                <div className="ps-3">
                  <div className="text-base font-semibold">{user.name}</div>
                  <div className="font-normal text-gray-500">{user.mail}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <Select defaultValue="1">
                  <SelectItem value="1">Usuario</SelectItem>
                  <SelectItem value="2">Administrador</SelectItem>
                </Select>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className={`h-2.5 w-2.5 rounded-full ${userStatus[user.id] === 'activo' ? 'bg-green-500' : 'bg-red-500'} me-2`}></div>
                  <Select defaultValue={userStatus[user.id]} onValueChange={(value) => handleStatusChange(user.id, value)}>
                    <SelectItem value="activo">Activo</SelectItem>
                    <SelectItem value="inactivo">Inactivo</SelectItem>
                  </Select>
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
