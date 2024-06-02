import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  const location = useLocation();

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to="/dashboardadmin/manage/users"
            icon={HiUser}
            className={location.pathname === "/dashboardadmin/manage/users" ? "bg-gray-200" : ""}
          >
            Gestionar Usuarios
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            to="/dashboardadmin/manage/products"
            icon={HiShoppingBag}
            className={location.pathname === "/dashboardadmin/manage/products" ? "bg-gray-200" : ""}
          >
            Gestionar Productos
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            to="/form"
            icon={HiShoppingBag}
            className={location.pathname === "/form" ? "bg-gray-200" : ""}
          >
            Agregar Productos
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBarAdmin;