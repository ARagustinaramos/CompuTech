import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAllSales } from "../../../../redux/actions/actions";
import { auth } from "../../../../firebase/firebase";

const ComponentePedido = () => {
	const [user] = useAuthState(auth);
	console.log(user);
	const dispatch = useDispatch();
	const allSales = useSelector((state) => state.allSales);
	useEffect(() => {
		dispatch(getAllSales());
	}, [dispatch]);
	return (
		// <div className="flex justify-center items-center h-screen">
		<div className="flex justify-center items-center h-full">
			<div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
				<div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
					<div className="col-span-2 flex items-center gap-4">
						<ul>
							<li>
								{allSales
									.filter(
										(order) => order.userInformation.emailLogin === user?.email
									)
									.map((order) => (
										<tr
											key={order.id_Order}
											className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
										>
											<th
												scope="row"
												className="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white"
											>
												<div className="ps-3">
													<div className="text-base font-semibold">
														{order.paymentInformation?.shoppingCart.map(
															(product) => (
																<img
																	src={product.image[0]}
																	style={{ maxWidth: "100px" }}
																/>
															)
														)}
													</div>
													<div className="font-normal text-gray-500">
														{order.mail}
													</div>
												</div>
											</th>
											<td className="px-6 py-4">
												{order.paymentInformation?.shoppingCart.map(
													(product) => (
														<h1>{product.name}</h1>
													)
												)}
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center">
													{order.paymentInformation.total}
												</div>
											</td>
											<td className="px-6 py-4">
												<button
													onClick={() =>
														handlerSubmit(order.paymentInformation.shoppingCart)
													}
												>
													DEJAR COMENTARIO
												</button>
											</td>
										</tr>
									))}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComponentePedido;
