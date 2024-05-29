import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./components/form/Form";
import About from "./views/about/About";
import Cart from "./views/cart/Cart";
import axios from "axios";
import Perfil from "./views/dashboard/user/components/Perfil";
import DashboardUser from "./views/dashboard/user/DashboardUser";
import DashboardAdmin from "./views/dashboard/admin/DashboardAdmin";
import DashboardAdminManageUsers from "./views/dashboard/admin/DashboardAdminManageUsers";
import { FirebaseProvider } from "./firebase/firebase";


function App() {
  useEffect(() => {
    const registerUser = async () => {
      // Coloca aquí tu lógica para registrar usuarios con Firebase
    };
    registerUser();
  }, []); // Elimina las dependencias ya que no estás usando isAuthenticated, getAccessTokenSilently, user

  return (
    <FirebaseProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path={`/detail/:id`} element={<Detail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/dashboardadmin/manage/products"
            element={<DashboardAdmin />}
          ></Route>
          <Route
            path="/dashboardadmin/manage/users"
            element={<DashboardAdminManageUsers />}
          ></Route>
          <Route path="/dashboarduser" element={<DashboardUser />}></Route>
        </Routes>
        <Footer />
      </>
    </FirebaseProvider>
  );
}

export default App;
