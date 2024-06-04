import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Perfil from "../../views/dashboard/user/components/Perfil";

//iconos
import { BsPersonSquare } from "react-icons/bs";
import {
	RiHome3Line,
	RiPieChartLine,
	RiMore2Fill,
	RiCloseFill
} from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaRegGrinBeamSweat } from "react-icons/fa";

const SideBarUser = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Sidebar aria-label="Default sidebar example">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item>
						<button
							onClick={openModal}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
							data-modal-target="crud-modal"
							data-modal-toggle="crud-modal"
						>
							<BsPersonSquare />
							Perfil
						</button>
						<Perfil isOpen={isModalOpen} onClose={closeModal} />
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							onClick={() => navigate("/")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<RiHome3Line />
							Home
						</button>
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							onClick={() => navigate("/cart")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<IoCart />
							Carrito de compras
						</button>
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							onClick={() => navigate("/reviews")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<FaRegStar />
							Reviews
						</button>
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							onClick={() => navigate("/about")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<FaRegGrinBeamSweat />
							Quienes somos
						</button>
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							href="#"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<svg
								className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
							</svg>
							<span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
								3
							</span>
						</button>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};

export default SideBarUser;
