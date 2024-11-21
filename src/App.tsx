import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/login";
import ChangePassword from "./components/auth/changePasswd/changePassword";
import VerifyEmail from "./components/auth/changePasswd/verifyEmail";
import NewPasswd from "./components/auth/changePasswd/newPasswd";
import Dashboard from "./Pages/manajemen/dashboard";
import ResetBerhasil from "./components/auth/changePasswd/resetBerhasil";
import Register from "./components/auth/register/register";
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
import DataPelanggan from "./Pages/manajemen/dataPelanggan";
import DataSupplier from "./Pages/manajemen/dataSupplier";
import DiskonBarang from "./Pages/manajemen/diskonBarang";
import Protected from "./components/auth/protected";

function App() {
    return (

        <>
            <Routes>
                {/* public route */}
                <Route path="/" element={<Login />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/new-passwd" element={<NewPasswd />} />
                <Route path="/reset-berhasil" element={<ResetBerhasil />} />
                <Route path="/register" element={<Register />} />
                
                {/* Private Route */}
                {/* Pages Management */}
                <Route
                    path="/dashboard"
                    element={
                        <Protected>
                            <Dashboard />
                        </Protected>
                    }
                />
                <Route
                    path="/databarang"
                    element={
                        <Protected>
                            <DataBarang />
                        </Protected>
                    }
                />
                <Route
                    path="/kategori-barang"
                    element={
                        <Protected>
                            <KategoriBarang />
                        </Protected>
                    }
                />
                <Route
                    path="/data-pelanggan"
                    element={
                        <Protected>
                            <DataPelanggan />
                        </Protected>
                    }
                />
                <Route
                    path="/data-supplier"
                    element={
                        <Protected>
                            <DataSupplier />
                        </Protected>
                    }
                />
                <Route
                    path="/diskon-barang"
                    element={
                        <Protected>
                            <DiskonBarang />
                        </Protected>
                    }
                />

                {/* Pages Laporan */}
                <Route
                    path="/laporan"
                    element={
                        <Protected>
                            <Laporan />
                        </Protected>
                    }
                />
                <Route
                    path="/laporan-transaksi"
                    element={
                        <Protected>
                            <LaporanTransaksi />
                        </Protected>
                    }
                />
                <Route
                    path="/laporan-pembelian-barang"
                    element={
                        <Protected>
                            <LaporanPembelianBarang />
                        </Protected>
                    }
                />
                <Route
                    path="/laporan-pelanggan"
                    element={
                        <Protected>
                            <LaporanPelanggan />
                        </Protected>
                    }
                />
                <Route
                    path="/laporan-persediaan-barang"
                    element={
                        <Protected>
                            <LaporanPersediaanBarang />
                        </Protected>
                    }
                />

                {/* Pages Transaksi */}
                <Route
                    path="/transaksi"
                    element={
                        <Protected>
                            <Transaksi />
                        </Protected>
                    }
                />
                <Route
                    path="/transaksi/pembayaran"
                    element={
                        <Protected>
                            <Pembayaran />
                        </Protected>
                    }
                />
                <Route
                    path="/transaksi/struk"
                    element={
                        <Protected>
                            <StrukPage />
                        </Protected>
                    }
                />

                {/* Pages Shift */}
                <Route
                    path="/shift"
                    element={
                        <Protected>
                            <Shift />
                        </Protected>
                    }
                />
                <Route
                    path="/shift/start-shift"
                    element={
                        <Protected>
                            <MulaiShift />
                        </Protected>
                    }
                />
                <Route
                    path="/shift/detail-shift"
                    element={
                        <Protected>
                            <DetailRekapShift />
                        </Protected>
                    }
                />

                {/* Pengaturan */}
                <Route
                    path="/pengaturan"
                    element={
                        <Protected>
                            <Pengaturan />
                        </Protected>
                    }
                />
                <Route
                    path="/informasi-toko"
                    element={
                        <Protected>
                            <InformasiToko />
                        </Protected>
                    }
                />
                <Route
                    path="/metode-pembayaran"
                    element={
                        <Protected>
                            <MetodePembayaran />
                        </Protected>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Protected>
                            <Profile />
                        </Protected>
                    }
                />
                <Route
                    path="/perangkat-edc"
                    element={
                        <Protected>
                            <PerangkatEdc />
                        </Protected>
                    }
                />
                <Route
                    path="/pengaturan-struk"
                    element={
                        <Protected>
                            <PengaturanStruk />
                        </Protected>
                    }
                />

                {/* Stock Opname */}
                <Route
                    path="/stock-opname"
                    element={
                        <Protected>
                            <StockOpname />
                        </Protected>
                    }
                />
                <Route
                    path="/detail-stock-opname"
                    element={
                        <Protected>
                            <DetailStockOpname />
                        </Protected>
                    }
                />

                {/* coba */}

            </Routes>
        </>
    );
}


export default App;
