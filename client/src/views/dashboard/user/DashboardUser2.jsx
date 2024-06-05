import Header from "./components/Header";
import HistorialDePedidos from "./components/HistorialDePedidos";
import HistorialDeCompras from "./components/HistorialDeCompras";

const DashboardUser = () => {
  return (
    <div className="pt-16 flex flex-col items-center w-full dark:bg-gray-900">
      <Header />
      <div className="flex flex-wrap justify-center w-full max-w-8xl">
        <div className="w-full lg:w-5/6 p-6 sm:p-8 md:p-10 lg:p-12">
          <HistorialDePedidos />
        </div>
        <div className="w-full lg:w-5/6 p-6 sm:p-8 md:p-10 lg:p-12">
          <HistorialDeCompras />
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
