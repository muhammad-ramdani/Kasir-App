import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import apiName from "../../../api/api";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    confirmPassword: "",
    email: ""
  });
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // Validasi hanya angka di frontend
    if (/^\d*$/.test(input)) {
      setPhone(input);
      setErrors({ ...errors, phone: "" }); // Hapus error jika valid
    } else {
      setErrors({ ...errors, phone: "Nomor telepon hanya boleh berisi angka." });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validasi password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password dan konfirmasi password tidak cocok." });
      return;
    }

    // Validasi nomor telepon
    if (phone.length < 10 || phone.length > 13) {
      setErrors({ ...errors, phone: "Nomor telepon harus memiliki panjang antara 10 hingga 13 digit." });
      return;
    }
    if (!phone.startsWith("08") && !phone.startsWith("628")) {
      setErrors({ ...errors, phone: "Nomor telepon harus dimulai dengan '08' atau '628'." });
      return;
    }

    try {
      const requestData = {
        email,
        password,
        phone
      };

      const response = await apiName.post("/users", requestData);

      if (response.status === 200) {
        alert("Registrasi berhasil!");
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Error saat registrasi:", error);

      // Tangani error yang berasal dari backend
      if (error.response && error.response.data && error.response.data.data && error.response.data.data.message) {
        const errorMessage = error.response.data.data.message;

        // Periksa apakah error disebabkan oleh email yang duplikat
        if (errorMessage.includes("duplicate key value violates unique constraint \"users_email_key\"")) {
          setErrors({ ...errors, email: "Email sudah digunakan. Silakan gunakan email lain." });
          return;
        }
      }

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
                        setEmail(e.target.value);
                        setErrors({ ...errors, email: "" }); // Reset error jika input berubah
                      }}

                      required />
                    {errors.email && <small className="error-message text-danger">{errors.email}</small>}
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
                    {errors.phone && <small className="error-message text-danger">{errors.phone}</small>}
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
                      <small className="error-message text-danger">{errors.confirmPassword}</small>
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
