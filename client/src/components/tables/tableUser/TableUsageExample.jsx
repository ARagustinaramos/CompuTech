import { Select, SelectItem } from '@tremor/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, updateProductStatus } from '../../../redux/actions/actions';
import React, { useEffect } from 'react';

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
    const allProducts = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleStatusChange = (productId, status) => {
        dispatch(updateProductStatus(productId, status));
    };

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
                        <TableRow key={item.id_Product}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.BrandIdBrand}</TableCell>
                            <TableCell>{item.CategoryIdCategory}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>
                                <Select
                                    defaultValue={item.active ? "1" : "2"}
                                    onValueChange={(value) => handleStatusChange(item.id_Product, value === "1")}
                                >
                                    <SelectItem value="1">Activo</SelectItem>
                                    <SelectItem value="2">Inactivo</SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell>{item.stock}</TableCell>
                            <TableCell>{item.id_Product}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}
