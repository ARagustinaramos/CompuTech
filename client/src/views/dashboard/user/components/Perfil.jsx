import React, { useState } from 'react';

const Perfil = ({ isOpen, onClose }) => {
    
    const [perfilInfo, setPerfilInfo] = useState({
        // Aquí puedes inicializar el estado con la información del perfil cargada desde la base de datos
        nombre: 'John Doe',
        direccion: '123 Calle Principal',
        telefono: '123-456-7890',
        correo: 'john.doe@example.com',
        // Otros campos del perfil
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
                    <h1 className="text-2xl font-bold">Perfil</h1>
                    <div className="grid gap-6 mb-6 md:grid-cols-1 lg:grid-cols-1"><div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div>
                    <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                </div>  
                <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
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
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

        </div>

       </div>
            <div className="flex justify-end">
            <button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
            >
                Cancelar
            </button>
            </div>
        </div>
  );
};  

export default Perfil;