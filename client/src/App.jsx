import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Cart from "./views/cart/Cart";
import Form from "./components/form/Form";
import Detail from "./views/detail/Detail";
import About from "./views/about/About";
import DashboardUser from "./views/dashboard/user/DashboardUser";
import DashboardAdmin from "./views/dashboard/admin/DashboardAdmin";
import DashboardAdminManageUsers from "./views/dashboard/admin/DashboardAdminManageUsers";
import { FirebaseProvider, createUserWithEmailAndPassword } from "./firebase/firebase";

function App() {
  useEffect(() => {
    const registerUser = async () => {
      try {
        // Aquí puedes implementar la lógica para registrar usuarios con Firebase
        const email = "example@example.com"; // Correo electrónico del usuario
        const password = "password123"; // Contraseña del usuario
        const userCredential = await createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Usuario registrado con éxito:', user);
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    };
    registerUser();
  }, []);

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
          <Route path="/dashboarduser" element={<DashboardUser />} />
        </Routes>
        <Footer />
      </>
    </FirebaseProvider>
  );
}

export default App;
