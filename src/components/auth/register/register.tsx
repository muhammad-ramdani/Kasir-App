import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import apiName from "../../../api/api";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle phone input (hanya angka yang diperbolehkan)
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // Validasi hanya angka
    if (/^\d*$/.test(input)) {
      setPhone(input);
      setIsPhoneValid(input.length >= 10); // Perbarui status validasi
      setErrors({ ...errors, phone: "" }); // Hapus error jika valid
    } else {
      setErrors({ ...errors, phone: "Nomor telepon hanya boleh berisi angka." });
      setIsPhoneValid(false); // Set isPhoneValid ke false jika tidak valid
    }
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password dan konfirmasi password tidak cocok." });
      // alert("Password dan konfirmasi password tidak cocok.");
      return;
    }

    try {
      const requestData = {
        email,
        password,
        phone
      };
      console.log(requestData);

      const response = await apiName.post("/users", requestData)

      if (response.status === 200) {
        alert("Registrasi berhasil!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error saat registrasi:", error);
      alert("Registrasi gagal. Silakan coba lagi.");
    }

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
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}

                      required />
                  </div>
                </div>

                <div className="content-form-nomor-telepon mt-4">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <div className="phone-field">
                    <input type="text"
                      id="phone"
                      placeholder="Nomor Telepon"
                      value={phone}
                      onChange={handlePhoneChange}
                      required />
                    {isPhoneValid && <FontAwesomeIcon icon={faCheckCircle} className="phone-check-icon" />}
                    {errors.phone && <small className="error-message">{errors.phone}</small>}
                  </div>
                </div>

                <div className="content-form-password-regis mt-4">
                  <label htmlFor="password">Kata Sandi</label>
                  <div className="register-contentPasswd-field">
                    <input type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Password"
                      required
                      className="text-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                    <span className="register-contentPasswd-toggle" onClick={handlePasswordToggle}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>
                </div>

                <div className="content-form-newpassword-regis mt-4">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                  <div className="register-contentPasswd-field">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Masukkan kata sandi baru"
                      required
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setErrors({ ...errors, confirmPassword: "" }); // Reset error jika input berubah
                      }}
                    />
                    <span
                      className="register-contentPasswd-toggle"
                      onClick={handleConfirmPasswordToggle}
                    >
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </span>
                    {errors.confirmPassword && (
                      <small className="error-message">{errors.confirmPassword}</small>
                    )}
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
                  Daftar
                </button>
              </form>

              <div className="register">
                Sudah punya akun? <Link to="/">Masuk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
