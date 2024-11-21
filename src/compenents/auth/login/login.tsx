import React, { useState } from "react";
import "./styles.css";
import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import apiName from "../../../api/api";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const requestData = {
                email,
                password
            }
            console.log(requestData);

            const response = await apiName.post("/sessions", requestData)

            if (response.status === 200) {
                // simpan token di local storage
                const { token, name } = response.data.data;
                localStorage.setItem("token", token);
                localStorage.setItem("name", name);

                navigate("/dashboard");
            }
        } catch (error) {
            console.log("error saat login:", error);
            alert("Login gagal. Silakan periksa email dan password Anda.");
        }
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
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="content-form-password-login mt-4">
                                <label htmlFor="password">Password</label>
                                <div className="password-field">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="text-password" />

                                    <span className="password-toggle-lgn" onClick={handlePasswordToggle}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                </div>
                            </div>

                            <div className="forgot-password">
                                <Link to="/change-password">Lupa Password?</Link>
                            </div>

                            <button type="submit" className="btn-login">
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
