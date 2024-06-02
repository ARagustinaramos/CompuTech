import { Select, SelectItem } from '@tremor/react';
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

const data = [
  {
    name: 'Jorge Gonzalez',
    Role: 'Usuario',
    status: 'activo',
    correo: 'jorge42@gmail.com'
  },
  {
    name: 'Gilberto Diaz',
    Role: 'Admin',
    status: 'activo',
    correo: 'gilberto145@gmail.com'
  },
  {
    name: 'Agustina Ramos',
    Role: 'Usuario',
    status: 'activo',
    correo: 'agustina99@gmail.com'
  },
  {
    name: 'Florencia Córdoba',
    Role: 'Admin',
    status: 'activo',
    correo: 'flor123@gmail.com'
  },
  {
    name: 'Hernán Ponce de León',
    Role: 'Admin',
    status: 'activo',
    correo: 'hernan19@gmail.com'
  },

];

export function TableDashboardAdminManageUsers() {
  return (

    <Card>

      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List de usuarios registrados</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Rol</TableHeaderCell>
            <TableHeaderCell>Estatus</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.correo}</TableCell>
              <TableCell>
                <Select defaultValue="1">
                  <SelectItem value="1">Usuario</SelectItem>
                  <SelectItem value="2">Administrador</SelectItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select defaultValue="activo">
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="inactivo">Inactivo</SelectItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </Card>
  );
}