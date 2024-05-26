import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from '../carticon/CartIcon';
import LoginLogout from '../loginLogout/LoginLogout';
import { DarkThemeToggle } from "flowbite-react";
import SearchBar from "../searchBar/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
	const [searchResults, setSearchResults] = useState([]);
	const { user } = useAuth0();
	const location = useLocation(); // Obtener la ubicación actual
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src="./assets/Recurso3.png"
						className="h-8"
						alt="Computech Logo"
					/>
				</Link>
				{location.pathname === '/' && ( // Mostrar la SearchBar solo si la ruta es "/"
          			<SearchBar setSearchResults={setSearchResults} />
        )}
				<button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-dropdown"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 content-center">
						<li className="content-center">
							<Link
								to="/offers"
								className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
								aria-current="page"
							>
								Ofertas
							</Link>
						</li>
						<li className="content-center">
							{user?.email === "eltodopoderoso@gmail.com" ? (
								<Link
									to="/form"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Añadir
								</Link>
							) : null}
						</li>
						<li className="content-center">
							<Link
								to="/about"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Sobre nosotros
							</Link>
						</li>
						<LoginLogout />
						<CartIcon />
					</ul>
				</div>
				<DarkThemeToggle />
			</div>
		</nav>
	);
}
