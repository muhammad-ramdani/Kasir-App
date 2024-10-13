import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./compenents/auth/login/login";
import ChangePassword from "./compenents/auth/change-passwd/changePassword";
import VerifyEmail from "./compenents/auth/change-passwd/verifyEmail";
import NewPasswd from "./compenents/auth/change-passwd/newPasswd";
import Dashboard from "./Pages/manajemen/dashboard";
import ResetBerhasil from "./compenents/auth/change-passwd/resetBerhasil";
import Register from "./compenents/auth/register/register";
import Laporan from "./Pages/Laporan/Laporan";
import LaporanTransaksi from "./Pages/Laporan/LaporanTransaksi";
import LaporanPembelianBarang from "./Pages/Laporan/LaporanPembelianBarang";
import LaporanPelanggan from "./Pages/Laporan/LaporanPelanggan";
import LaporanPersediaanBarang from "./Pages/Laporan/LaporanPersediaaanBarang";
import Pengaturan from "./Pages/Pengaturan/Pengaturan";
import InformasiToko from "./Pages/Pengaturan/InformasiToko";

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
        {/* Pages laporan */}
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/laporan-transaksi" element={<LaporanTransaksi />} />
        <Route path="/laporan-pembelian-barang" element={<LaporanPembelianBarang />} />
        <Route path="/laporan-pelanggan" element={<LaporanPelanggan />} />
        <Route path="/laporan-persediaan-barang" element={<LaporanPersediaanBarang />} />
        {/* Pengaturan */}
        <Route path="/pengaturan" element={<Pengaturan />} />
        <Route path="/informasi-toko" element={<InformasiToko />} />
      </Routes>
    </>
  );
}


export default App;
