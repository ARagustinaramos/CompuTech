import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Cart from "./views/cart/Cart";
import Form from "./components/form/Form";
import Detail from "./views/detail/Detail";
import About from "./views/about/About";
import DashboardUser2 from "./views/dashboard/user/DashboardUser2";
import DashboardAdmin from "./views/dashboard/admin/DashboardAdmin";
import DashboardAdminManageUsers from "./views/dashboard/admin/DashboardAdminManageUsers";

import { FirebaseProvider } from "./firebase/firebase"; // Asegúrate de importar correctamente FirebaseProvider

function App() {
  return (
    <FirebaseProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboardadmin/manage/products" element={<DashboardAdmin />} />
          <Route path="/dashboardadmin/manage/users" element={<DashboardAdminManageUsers />} />
          <Route path="/dashboarduser2/" element={<DashboardUser2 />} />

          <Route path="/perfil" element={<DashboardUser2 />} />




        </Routes>
        <Footer />
      </>
    </FirebaseProvider>
  );
}

export default App;