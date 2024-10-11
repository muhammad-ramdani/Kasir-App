import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./register.css";

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

        <div className="content-regis">
          <div className="left-section-regis">
            <img src={loginImg} alt="Team illustration" className="illustration" />
          </div>

          <div className="right-section-regis">
            <div className="regis-form">
              <h1>Buat Akun Anda</h1>
              <form onSubmit={handleSubmit} className="text-form">
                <label htmlFor="email">Email</label>
                <div className="email-field">
                  <input type="email" id="email" placeholder="Email" required />
                </div>

                <label htmlFor="phone">Nomor Telepon</label>
                <div className="phone-field">
                  <input type="text" id="phone" placeholder="Nomor Telepon" value={phoneNumber} onChange={handlePhoneChange} required />
                  {isPhoneValid && <FontAwesomeIcon icon={faCheckCircle} className="phone-check-icon" />}
                </div>

                <label htmlFor="password">Password</label>
                <div className="regisPasswd-field">
                  <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" required className="text-password" />
                  <span className="regisPasswd-toggle" onClick={handlePasswordToggle}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>

                <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                <div className="regisPasswd-field">
                  <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder="Masukkan kata sandi baru" required className="text-password" />
                  <span className="regisPasswd-toggle" onClick={handleConfirmPasswordToggle}>
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                  </span>
                </div>

                <div className="terms-checkbox">
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
                Sudah punya akun? <a href="#">Masuk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
