const OrderHistoryOrder = (currentUser) => {

  console.log(currentUser)

    return (
        <div>
        <div className="bg-gray-500 p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
          {/* Producto */}
          <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
            <div className="col-span-2 flex items-center gap-4">
              <img
                src={currentUser?.shoppingCart?.image}
                className="w-14 h-14 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-bold">{currentUser?.shoppingCart?.name}</h3>
                <p className="text-gray-500">{currentUser?.shoppingCart?.description}</p>
              </div>
            </div>
            <div>
            </div>
            <div>
              <span className="font-bold">&#36; 1,200.87</span>
            </div>
          </div>
        </div>           
      </div>
    )
}

export default OrderHistoryOrder