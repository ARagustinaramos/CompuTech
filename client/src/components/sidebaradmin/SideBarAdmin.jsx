import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBarAdmin = () => {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="/dashboardadmin/manage/users" icon={HiUser}>
            Gestionar Ususarios
          </Sidebar.Item>
          <Sidebar.Item href="/dashboardadmin/manage/products" icon={HiShoppingBag}>
            Gestionar Productos
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBarAdmin