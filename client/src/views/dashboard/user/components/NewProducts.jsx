const ComponentePedido = (user={user}) => {
    return (
        <li className="py-3 sm:py-4">
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/assets/mouse2.jpeg" alt="Product image" />
            </div>
            <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    [FECHA DE PEDIDO] - ESTADO
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Entregado en: 
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
            </div>
        </div>
         </li>
    )
}

export default ComponentePedido