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
							onClick={() => navigate("/")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<RiHome3Line />
							Home
						</button>
					</Sidebar.Item>
					<Sidebar.Item>
						<button
							onClick={() => navigate("/miscompras")}
							className="flex items-center gap-4  text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
						>
							<IoCart />
							Mis Compras
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
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};

export default SideBarUser;
