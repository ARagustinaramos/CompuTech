import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";


const PayPalButton = ({ total, items }) => {
    return (
        <PayPalButtons
            style={{ layout: 'horizontal' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        description: items.name, 
                        amount: {
                            value: total // Reemplaza con el monto real
                        }
                    }]
                });
            }}
            onApprove={async (data, actions) => {
                try {
                    const details = await actions.order.capture();
                    console.log('Transaction exitosa ' + details.payer.name.given_name);
                    console.log('Order details:', details);
                    
                    // Lógica adicional después de la aprobación
                } catch (error) {
                    console.error('Error capturing order:', error);
                }
            }}
        />
    );
};

export default PayPalButton;
