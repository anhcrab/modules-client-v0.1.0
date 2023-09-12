import { Navigate, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Footer from "../components/Footer/Footer"
import Dashboard from "../pages/Dashboard/Dashboard"
import Roles from "../pages/Roles/Roles"
import Users from "../pages/Users/Users"
import Products from "../pages/Products/Products"

    
const Admin = () => {
  return(
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Admin