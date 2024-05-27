import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actions';
import React, { useEffect, useState } from 'react';
import { RiAlarmWarningLine, RiCheckboxCircleLine } from '@remixicon/react';
import { Callout, Card } from '@tremor/react';
import { TextInput } from '@tremor/react';
import { Button } from '@tremor/react';

import { deleteProduct } from '../../redux/actions/actions';

export function DangerCard() {

    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="space-y-6">
            <Card className="mx-auto max-w-md">
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Advertencia</p>
                <Callout
                    className="mt-4"
                    title="ZONA DE PELIGRO"
                    icon={RiAlarmWarningLine}
                    color="rose"
                >
                    En esta zona puede borrar de manera permanente cualquier producto del stock.
                </Callout>
                <div className='flex mt-5'>
                    <TextInput className="mx-auto max-w-xs" placeholder="Ingrese id de producto..." />
                    <Button variant="primary" color='red' onClick={deleteProduct}>Eliminar producto</Button>
                </div>
            </Card>
        </div>
    );
} 
