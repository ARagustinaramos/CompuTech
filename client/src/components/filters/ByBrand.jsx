import React from 'react'

const ByBrand = () => {
    return (
    <div className="content-center">
        <form className="max-w-sm mx-auto content-center">
            <select id="brands" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 content-center">
                <option defaultValue>Elige una marca</option>
                <option value="RA">Razer</option>
                <option value="CO">Corsair</option>
                <option value="LO">Logitech</option>
                <option value="SA">Samsung</option>
            </select>
        </form>

    </div>
        
    )
}

export default ByBrand