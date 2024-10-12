import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './compenents/auth/login/login'
import ChangePassword from './compenents/auth/change-passwd/changePassword'
import VerifyEmail from './compenents/auth/change-passwd/verifyEmail'
import NewPasswd from './compenents/auth/change-passwd/newPasswd'
import Dashboard from './compenents/manajemen/dashboard'
import Laporan from './Pages/Laporan/Laporan'
import LaporanTransaksi from './Pages/Laporan/LaporanTransaksi'
import Shift from './Pages/Shift/Shift'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />

                <Route path='/login' element={<Login />} />
                <Route path='/changepassword' element={<ChangePassword />} />
                <Route path='/verifyemail' element={<VerifyEmail />} />
                <Route path='/newpasswd' element={<NewPasswd />} />
                {/* <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Login/>}/> */}

                {/* Halaman laporan */}
                <Route path='/laporan' element={<Laporan />} />
                <Route path='/laporan-transaksi' element={<LaporanTransaksi />} />

                <Route path='/shift' element={<Shift />} />
            </Routes>
        </>
    )
}

export default App
