import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Edit from './Edit'


const Perfil = ({ isOpen, onClose }) => {
    
    const [perfilInfo, setPerfilInfo] = useState({
        //Inicializo el estado hasta esperar el back
        nombre: 'John Doe',
        direccion: '123 Calle Principal',
        telefono: '123-456-7890',
        correo: 'john.doe@example.com',
        image:'https://res.cloudinary.com/damfsltm2/image/upload/v1716826731/Computech-Products/favicon_chnb9k.png'

    });


    const [editMode, setEditMode] = useState(false);

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerfilInfo({ ...perfilInfo, [name]: value });
    };

    // Función para activar el modo de edición
    const handleEdit = () => {
        setEditMode(true);
    };

    // Función para guardar los cambios realizados en el perfil
    const handleSave = () => {
        // Aquí puedes agregar lógica para guardar los cambios en la base de datos
        setEditMode(false);
    };

    return(      
        <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
        >
        <div className="dark:text-white  w-96 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 mt-10 gap-8 lg:grid-cols-1" >
                <form className="p-8 rounded-xl shadow-2xl mb-8 flex flex-col dark:bg-gray-800 md:py-5">
                    <div className='pb-6 flex items-center justify-center'>
                        <img src={perfilInfo?perfilInfo.image:'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'} className=" w-20 h-20 object-cover rounded-full ring-2 ring-gray-300" />                    
                    </div>
                <label className="block text-2xl font-bold mb-2 font- text-gray-900 dark:text-white"></label>
                    <div className="grid mb-6 md:grid-cols-1 lg:grid-cols-1">
                        <div className=''>
                            <Edit editMode={editMode} setEditMode={setEditMode}/>
                        </div>
                    <label className="block text-2xl font-bold mb-2  font- text-gray-900 dark:text-white">Datos actuales</label>
                        <label>{perfilInfo?perfilInfo.nombre:'Nombre de usuario'}</label>
                            {
                            editMode?<input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.nombre:'Nombre de usuario'} required />:null                        
                             }
                        <label>{perfilInfo?perfilInfo.direccion:'Dirección de usuario'}</label>
                            {
                            editMode?<input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.direccion:'Dirección de usuario'} required />:null                        
                            }
                        <label>{perfilInfo?perfilInfo.correo:'Correo de usuario'}</label>
                        {
                            editMode?<input type="text" id="mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.correo:'Correo de usuario'} required />:null                        
                        }
                        <label>{perfilInfo?perfilInfo.telefono:'Teléfono de usuario'}</label>
                        {
                            editMode?<input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.telefono:'Teléfono de usuario'} required />:null                        
                        }
                    </div>
                        <label className="block text-2xl font-bold mb-2  font- text-gray-900 dark:text-white">Modificar contraseña</label>
            <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 
            <div className="mb-6 ">
                <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 
            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
            <button onClick={onClose} className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancelar</button>
        </form>

        </div>
        </div>

       </div>
  );
};  

export default Perfil;