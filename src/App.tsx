import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./compenents/auth/login/login";
import ChangePassword from "./compenents/auth/change-passwd/changePassword";
import VerifyEmail from "./compenents/auth/change-passwd/verifyEmail";
import NewPasswd from "./compenents/auth/change-passwd/newPasswd";
import Dashboard from "./Pages/manajemen/dashboard";
import ResetBerhasil from "./compenents/auth/change-passwd/resetBerhasil";
import Register from "./compenents/auth/register/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />

                <Route path='/login' element={<Login />} />
                <Route path='/changepassword' element={<ChangePassword />} />
                <Route path='/verifyemail' element={<VerifyEmail />} />
                <Route path='/newpasswd' element={<NewPasswd />} />
                {/* <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Login/>}/> */}

                {/* Halaman laporan */}
                <Route path='/laporan' element={<Laporan />} />
            </Routes>
        </>
    )
}

export default App;
