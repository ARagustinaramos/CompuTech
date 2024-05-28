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
                {item.Role}
              </TableCell>
              <TableCell>
                {item.departement}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </Card>
  );
}