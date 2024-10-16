import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPhoneNumber(input);

    // Validate if the input contains only numbers and is at least 10 digits long
    const phoneValid = /^\d{10,}$/.test(input);
    setIsPhoneValid(phoneValid);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <header className="header-auth">
          <img src={logoKasir} alt="Kasir Jempolan Logo" className="logo" />
          <span className="brand-name">Kasir Jempolan</span>
        </header>

        <div className="content-register-content">
          <div className="left-section-register-content">
            <img src={loginImg} alt="Team illustration" className="illustration" />
          </div>

          <div className="right-section-register-content">
            <div className="register-content-form">
              <h1>Buat Akun Anda</h1>
              <form onSubmit={handleSubmit} className="text-form">
                <div className="content-form-email-register mt-4">
                  <label htmlFor="email">Email</label>
                  <div className="email-field">
                    <input type="email" id="email" placeholder="Email" required />
                  </div>
                </div>

                <div className="content-form-nomor-telepon mt-4">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <div className="phone-field">
                    <input type="text" id="phone" placeholder="Nomor Telepon" value={phoneNumber} onChange={handlePhoneChange} required />
                    {isPhoneValid && <FontAwesomeIcon icon={faCheckCircle} className="phone-check-icon" />}
                  </div>
                </div>

                <div className="content-form-password-regis mt-4">
                  <label htmlFor="password">Password</label>
                  <div className="register-contentPasswd-field">
                    <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" required className="text-password" />
                    <span className="register-contentPasswd-toggle" onClick={handlePasswordToggle}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>
                </div>

                <div className="content-form-newpassword-regis mt-4">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                  <div className="register-contentPasswd-field">
                    <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder="Masukkan kata sandi baru" required className="text-password" />
                    <span className="register-contentPasswd-toggle" onClick={handleConfirmPasswordToggle}>
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>
                </div>

                <div className="terms-checkbox mt-4 mb-4">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    Dengan mendaftar, saya menyatakan telah membaca dan menyetujui
                    <a href="#"> Ketentuan Layanan </a>&<a href="#"> Kebijakan Kasir Jempolan</a>
                  </label>
                </div>

                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>

              <div className="register">
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
