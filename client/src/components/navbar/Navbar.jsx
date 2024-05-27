import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from '../carticon/CartIcon';
import LoginLogout from '../loginLogout/LoginLogout';
import { DarkThemeToggle } from 'flowbite-react';
import SearchBar from '../searchBar/SearchBar';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
	const [searchResults, setSearchResults] = useState([]);
	const { user, isAuthenticated } = useAuth0();
	const location = useLocation(); // Obtener la ubicación actual
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="/assets/Recurso3.png" className="h-8" alt="Computech Logo" />
				</Link>
				{location.pathname === '/' && (
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
						{isAuthenticated && (
							<>
								{user?.email === 'prueba.juan.henry@gmail.com' ? (
									<li className="content-center">
										<Link
											to="/dashboarduser"
											className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
											aria-current="page"
										>
											Dashboard
										</Link>
									</li>
								) : null}
								{user?.email === 'sebas.rodriguez.is123@gmail.com' && (
									<li className="content-center">
										<div className="relative inline-block text-left">
											<div>
												<button
													type="button"
													className="flex items-center justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
													onClick={toggleDropdown}
												>
													<img
														src={user.picture}
														alt={user.name}
														className="h-8 w-8 rounded-full mr-2"
													/>
													Hola, {user.name}
													<svg
														className="ml-2 -mr-1 h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</div>

											{dropdownOpen && (
												<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 dark:bg-gray-800 dark:ring-gray-700">
													<div
														className="py-1"
														role="menu"
														aria-orientation="vertical"
														aria-labelledby="options-menu"
													>
														<a
															href="/dashboardadmin/manage/products"
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
															role="menuitem"
														>
															Administrador
														</a>
														<a
															href="/profile"
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
															role="menuitem"
														>
															Perfil
														</a>
														<a
															href="/account-settings"
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
															role="menuitem"
														>
															Configuración de Cuenta
														</a>
														<a
															href="/order-history"
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
															role="menuitem"
														>
															Historial de Pedidos
														</a>
														<div className="border-t border-gray-100 dark:border-gray-700"></div>
														<button
															onClick={() => logout({ returnTo: window.location.origin })}
															className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
															role="menuitem"
														>
															Cerrar sesión
														</button>
													</div>
												</div>
											)}
										</div>
									</li>
								)}
							</>
						)}
						{!isAuthenticated && (
							<li className="content-center">
								<button
									onClick={() => loginWithRedirect()}
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent content-center"
								>
									Iniciar Sesión
								</button>
							</li>
						)}
						<li className="content-center">
							{user?.email === 'eltodopoderoso@gmail.com' ? (
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