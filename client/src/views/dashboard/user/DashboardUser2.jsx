import Header from "./components/Header";
import HistorialDePedidos from "./components/HistorialDePedidos";
import HistorialDeCompras from "./components/HistorialDeCompras";

const DashboardUser = () => {
	return (
		<div className="pt-16">
			<div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen dark:bg-gray-900 md:py-5">
				<main className="col-span-1 lg:col-span-3 md:p-8 xl:col-span-5 dark:bg-gray-900 p-8">
					<Header />
					<section className="grid sm:grid-cols-1 sm:col-span-1 lg:col-span-3 xl:col-span-5 dark:bg-gray-900 p-4 md:p-8 gap-4 py-2 flex-grow">
						<HistorialDePedidos className="sm:col-span-1 lg:cols-span-3" />
						<HistorialDeCompras className="sm:col-span-1 lg:cols-span-3 cols-span-6" />
					</section>
				</main>
			</div>
		</div>
	);
};

export default DashboardUser;
