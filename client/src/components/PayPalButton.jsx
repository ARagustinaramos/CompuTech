import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';


const PayPalButton = ({ total, items, handleOrderComplete }) => {



    return (
        <PayPalButtons
            style={{ layout: 'horizontal' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        description: items.name,
                        amount: {
                            value: total.toFixed(2),
                        }
                    }]
                });
            }}
            onApprove={async (data, actions) => {
                try {
                    const details = await actions.order.capture();
                    Swal.fire({
                        icon: 'success',
                        title: `¡Felicitaciones ${details.payer.name.given_name}!`,
                        text: 'Tu compra se realizó con éxito.',
                        confirmButtonText: 'Aceptar'
                    });

                    if (details.status === 'COMPLETED') {
                        console.log('Transacción exitosa ' + details.payer.name.given_name);
                        console.log('Detalles de la orden:', details);

                        // Guardar los detalles del pedido en el shoppingCart
                        const handleOrderComplete = (detail) => {

                            if(detail.status === 'COMPLETED'){                        
                                updateUserData({
                                    id: detail.id || '',
                                    intent: detail.intent || '',
                                    status: detail.status || '',
                                    purchase_units: detail.purchase_units || [],
                                    payer: {
                                        email_address: detail.payer.email_address || '',
                                        name: {
                                            given_name: detail.payer.name?.given_name || '',
                                            surname: detail.payer.name?.surname || ''
                                        },
                                        payer_id: detail.payer.payer_id || ''
                                    },
                                    create_time: detail.create_time || '',
                                    links: detail.links || [],
                                    reference_id: detail.reference_id || '',
                                    shipping: {
                                        address: {
                                            address_line_1: detail.shipping?.address?.address_line_1 || '',
                                            admin_area_1: detail.shipping?.address?.admin_area_1 || '',
                                            admin_area_2: detail.shipping?.address?.admin_area_2 || '',
                                            country_code: detail.shipping?.address?.country_code || '',
                                            postal_code: detail.shipping?.address?.postal_code || ''
                                        },
                                        name: {
                                            full_name: detail.shipping?.name?.full_name || ''
                                        }
                                    },
                                    soft_descriptor: detail.soft_descriptor || ''
                                });
                            }                            
                        };
                        console.log('Actualiza estado del usuario: ', details);

                        setTimeout(() => {
                            window.location.href = "http://localhost:5173/dashboarduser";
                        }, 5000);

                    }

                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal...",
                        footer: <a href="http://localhost:5173/cart">Volver al carrito</a>
                    });
                    console.error('Error capturando la orden:', error);
                }
            }}
        />
    );
};

export default PayPalButton;
