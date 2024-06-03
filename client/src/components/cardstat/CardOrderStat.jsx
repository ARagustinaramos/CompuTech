import React, { useState } from 'react';
import { Card, Text } from "@tremor/react";
import Modal from 'react-modal';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Set the root element for the modal
Modal.setAppElement('#root');

const CardSoldProducts = () => {
    // Variables hardcodeadas por ahora
    const soldProducts = [
        { name: 'Producto A', sold: 30 },
        { name: 'Producto B', sold: 45 },
        { name: 'Producto C', sold: 25 },
        { name: 'Producto D', sold: 15 },
        { name: 'Producto Z', sold: 15 },
        { name: 'Producto J', sold: 15 },
        { name: 'Producto F', sold: 15 },
        { name: 'Producto D', sold: 15 },
        { name: 'Producto E', sold: 20 }
    ];

    // Ordenar productos por cantidad vendida (descendente) y seleccionar los 3 primeros
    const topSoldProducts = [...soldProducts]
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 3);

    const totalSold = soldProducts.map(product => product.sold)
        .reduce((accumulator, currentSold) => accumulator + currentSold, 0);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="emerald"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
            >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Productos vendidos: </p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{totalSold}</p>
                
                <div className="mt-4">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Top ventas: </p>
                    {topSoldProducts.map((product, index) => (
                        <div key={index} className="flex justify-between">
                            <Text className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{product.name}</Text>
                            <Text className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{product.sold}</Text>
                        </div>
                    ))}
                </div>
            </Card>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Product Sales Chart"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    }
                }}
            >
                <h2>Productos vendidos</h2>
                <BarChart
                    width={600}
                    height={300}
                    data={soldProducts}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sold" fill="#8884d8" />
                </BarChart>
                <button onClick={closeModal} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#8884d8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Cerrar
                </button>
            </Modal>
        </>
    );
}

export default CardSoldProducts;