import React, { useState } from 'react';
import './styles.css';
import loginImg from "../../../assets/login.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = useState(false);


    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    };


    return (
        <div className="container">
            <header className="header-auth">
                <img
                    src={logoKasir}
                    alt="Kasir Jempolan Logo"
                    className="logo"
                />
                <span className="brand-name">Kasir Jempolan</span>
            </header>

            <div className="content-lgn">
                <div className="left-section">
                    <img
                        src={loginImg}
                        alt="Team illustration"
                        className="illustration"
                    />
                </div>

                {/* Right section with login form */}
                <div className="right-section">
                    <div className="login-form">
                        <h1>Masuk ke Akun Anda</h1>
                        <p>Kamu dapat masuk sebagai owner ataupun staf</p>
                        <form onSubmit={handleSubmit} className='text-form'>
                            <label htmlFor="email">Email</label>
                            <div className='email-field'>
                                <input type="email" id="email" placeholder="Email" required />
                            </div>

                            <label htmlFor="password">Password</label>
                            <div className="password-field">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Password"
                                    required
                                    className='text-password'
                                />

                                <span
                                    className="password-toggle"
                                    onClick={handlePasswordToggle}
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                    />
                                </span>
                            </div>

                            <div className="forgot-password">
                                <Link to="/changepassword">Lupa Password?</Link>
                            </div>

                            <button type="submit" className="btn-login">
                                Login
                            </button>
                        </form>

                        <div className="register">
                            Belum punya akun? <a href="#">Daftar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
