import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./compenents/auth/login/login";
import ChangePassword from "./compenents/auth/change-passwd/changePassword";
import VerifyEmail from "./compenents/auth/change-passwd/verifyEmail";
import NewPasswd from "./compenents/auth/change-passwd/newPasswd";
import Dashboard from "./Pages/manajemen/dashboard";
import ResetBerhasil from "./compenents/auth/change-passwd/resetBerhasil";
import Register from "./compenents/auth/register/register";
import Transaksi from "./Pages/transaksi/transaksi";
import Pembayaran from "./Pages/transaksi/pembayaran";
import StrukPage from "./Pages/transaksi/struck";

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/new-passwd" element={<NewPasswd />} />
        <Route path="/reset-berhasil" element={<ResetBerhasil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/transaksi/pembayaran" element={<Pembayaran />} />
        <Route path="/struk" element={<StrukPage />} />
      </Routes>
    </>
  );
}


export default App;
