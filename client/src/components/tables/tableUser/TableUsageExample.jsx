import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/actions';
import React, { useEffect, useState } from 'react';

import { RiFlag2Line } from '@remixicon/react';
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

export function TableUsageExample() {
    
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.copyProducts);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    
    console.log(allProducts)
    return (
        <Card>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Lista de productos en Stock</h3>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Marca</TableHeaderCell>
                        <TableHeaderCell>Categoria</TableHeaderCell>
                        <TableHeaderCell>Precio unitario</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Cantidad</TableHeaderCell>
                        <TableHeaderCell>id del producto</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allProducts.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                {item.BrandIdBrand}
                            </TableCell>
                            <TableCell>
                                {item.CategoryIdCategory
}
                            </TableCell>
                            <TableCell>
                                {item.price}
                            </TableCell>
                            <TableCell>
                                <Badge color="emerald" icon={RiFlag2Line}>
                                    {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                {item.stock}
                            </TableCell>
                            <TableCell>
                                {item.id_Product}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}