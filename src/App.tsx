import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./compenents/auth/login/login";
import ChangePassword from "./compenents/auth/changePasswd/changePassword";
import VerifyEmail from "./compenents/auth/changePasswd/verifyEmail";
import NewPasswd from "./compenents/auth/changePasswd/newPasswd";
import Dashboard from "./Pages/manajemen/dashboard";
import ResetBerhasil from "./compenents/auth/changePasswd/resetBerhasil";
import Register from "./compenents/auth/register/register";
import Laporan from "./Pages/Laporan/Laporan";
import LaporanTransaksi from "./Pages/Laporan/LaporanTransaksi";
import LaporanPembelianBarang from "./Pages/Laporan/LaporanPembelianBarang";
import LaporanPelanggan from "./Pages/Laporan/LaporanPelanggan";
import LaporanPersediaanBarang from "./Pages/Laporan/LaporanPersediaaanBarang";
import Pengaturan from "./Pages/Pengaturan/Pengaturan";
import InformasiToko from "./Pages/Pengaturan/InformasiToko";
import Transaksi from "./Pages/transaksi/transaksi";
import Pembayaran from "./Pages/transaksi/pembayaran";
import StrukPage from "./Pages/transaksi/struck";
import KategoriBarang from "./Pages/manajemen/kategoriBarang";
import DataBarang from "./Pages/manajemen/dataBarang";
import MetodePembayaran from "./Pages/Pengaturan/MetodePembayaran";
import PengaturanStruk from "./Pages/Pengaturan/PengaturanStruk";
import PerangkatEdc from "./Pages/Pengaturan/PerangkatEdc";
import Profile from "./Pages/Pengaturan/Profile";
import Shift from "./Pages/Shift/shift";
import MulaiShift from "./Pages/Shift/mulaiShift";
import DetailRekapShift from "./Pages/Shift/detailRekapShift";
import StockOpname from "./Pages/stock-opname/stockOpname";
import DetailStockOpname from "./Pages/stock-opname/detail-stock-opname";

function App() {
    return (

        <>
            <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/" element={<Login />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/new-passwd" element={<NewPasswd />} />
                <Route path="/reset-berhasil" element={<ResetBerhasil />} />
                <Route path="/register" element={<Register />} />
                {/* Pages Manajemen */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/databarang" element={<DataBarang />} />
                <Route path="/kategori-barang" element={<KategoriBarang />} />
                {/* Pages laporan */}
                <Route path="/laporan" element={<Laporan />} />
                <Route path="/laporan-transaksi" element={<LaporanTransaksi />} />
                <Route path="/laporan-pembelian-barang" element={<LaporanPembelianBarang />} />
                <Route path="/laporan-pelanggan" element={<LaporanPelanggan />} />
                <Route path="/laporan-persediaan-barang" element={<LaporanPersediaanBarang />} />
                {/* Pages Transaksi */}
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/transaksi/pembayaran" element={<Pembayaran />} />
                <Route path="/transaksi/struk" element={<StrukPage />} />
                {/* Pages Shift */}
                <Route path="/shift" element={<Shift />} />
                <Route path="/shift/start-shift" element={<MulaiShift />} />
                <Route path="/shift/detail-shift" element={<DetailRekapShift />} />
                {/* Pengaturan */}
                <Route path="/pengaturan" element={<Pengaturan />} />
                <Route path="/informasi-toko" element={<InformasiToko />} />
                <Route path="/metode-pembayaran" element={<MetodePembayaran />} />
                <Route path="/metode-pembayaran" element={<MetodePembayaran />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/perangkat-edc" element={<PerangkatEdc />} />
                <Route path="pengaturan-struk" element={<PengaturanStruk />} />
                {/* Pengaturan */}
                <Route path="/stock-opname" element={<StockOpname />} />
                <Route path="//detail-stock-opname" element={<DetailStockOpname />} />
            </Routes>
        </>
    );
}


export default App;
