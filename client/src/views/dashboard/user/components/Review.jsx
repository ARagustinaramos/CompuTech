const Review = () => {
    return (
        <div>
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
          {/* Producto 1*/}
          <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
            <div className="col-span-2 flex items-center gap-4">
              <img
                src="/assets/prueba.jpg"
                className="w-14 h-14 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-bold">Mouse Login L3508</h3>
                <p className="text-gray-500">Con cable de 5mts ideal para trabajar desde la cama</p>
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

export default Review