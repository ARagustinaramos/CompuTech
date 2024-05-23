import React from 'react'

const ByCategory = () => {
    return (
        <div className='content-center'>
            <form className="max-w-sm mx-auto content-center">
                <select id="brands" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Elige una categoría</option>
                    <option value="TEC">Teclados</option>
                    <option value="MOU">Mouses</option>
                    <option value="MON">Monitores</option>
                    <option value="PAR">Parlantes</option>
                </select>
            </form>
        </div>
    )
}

export default ByCategory