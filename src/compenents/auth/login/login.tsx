import React, { useState } from "react";
import "./styles.css";
import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate ();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const clickToPages = () => {
    navigate ("/dashboard");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <header className="header-auth">
        <img src={logoKasir} alt="Kasir Jempolan Logo" className="logo" />
        <span className="brand-name">Kasir Jempolan</span>
      </header>

      <div className="content-lgn">
        <div className="left-section">
          <img src={loginImg} alt="Team illustration" className="illustration" />
        </div>

        {/* Right section with login form */}
        <div className="right-section">
          <div className="login-form">
            <h1>Masuk ke Akun Anda</h1>
            <p>Kamu dapat masuk sebagai owner ataupun staf</p>
            <form onSubmit={handleSubmit} className="text-form">
              <div className="content-form-email-login">
                <label htmlFor="email">Email</label>
                <div className="email-field">
                  <input type="email" id="email" placeholder="Email" required />
                </div>
              </div>

              <div className="content-form-password-login mt-4">
                <label htmlFor="password">Password</label>
                <div className="password-field">
                  <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" required className="text-password" />

                  <span className="password-toggle-lgn" onClick={handlePasswordToggle}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>

              <div className="forgot-password">
                <Link to="/change-password">Lupa Password?</Link>
              </div>

              <button type="submit" className="btn-login" onClick={clickToPages}>
                Login
              </button>
            </form>

            <div className="register">
              Belum punya akun? <Link to="/register">Daftar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
