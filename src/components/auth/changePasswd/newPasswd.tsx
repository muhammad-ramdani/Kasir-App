import { useState } from "react";
import logoChgPaswd from "../../../assets/lupa-sandi.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./newPasswd.css";

function NewPasswd() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

      <div className="content-newPasswd">
        <div className="left-section-newPasswd">
          <img src={logoChgPaswd} alt="Team illustration" className="illustration" />
        </div>

        {/* Right section with login form */}
        <div className="right-section-newPasswd">
          <div className="newPasswd-form">
            <h1>Masukan kata sandi baru</h1>
            <p>Kamu dapat masuk sebagai owner ataupun staf</p>
            <form onSubmit={handleSubmit} className="text-form">
              <div className="content-form-password-newpassword">
                <label htmlFor="password">Kata Sandi</label>
                <div className="newPasswd-field">
                  <input type={showPassword ? "text" : "password"} id="password" placeholder="Masukan kata sandi baru" required className="text-password" />
                  <span className="newPasswd-toggle" onClick={handlePasswordToggle}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>

              <div className="content-form-newpassword-newpassword mt-4">
                <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                <div className="newPasswd-field">
                  <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder="Konfirmasi kata sandi baru" required className="text-password" />
                  <span className="newPasswd-toggle" onClick={handleConfirmPasswordToggle}>
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>

              <button type="submit" className="btn-changepswd">
                Reset Kata Sandi
              </button>
            </form>

            <div className="back-login">
              <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
              <Link to="/">Kembali ke login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPasswd;
