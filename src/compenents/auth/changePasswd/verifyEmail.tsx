import  { useState } from 'react';
import logoChgPaswd from "../../../assets/lupa-sandi.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './verify.css';
import OtpModal from './otpModal'; 

// Define OTP type as an array of four strings
type OtpCode = [string, string, string, string];

function VerifyEmail() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<OtpCode>(['', '', '', '']);

  // Function to open the OTP modal
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  // Function to close the OTP modal
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  // Function to handle OTP input changes
  const handleOtpChange = (index: number, value: string): void => {
    const newOtpCode: OtpCode = [...otpCode];
    newOtpCode[index] = value;
    setOtpCode(newOtpCode);
  };

  // Function to handle form submission
  const handleVerification = (): void => {
    console.log('OTP Code:', otpCode.join(''));
    closeModal();
  };

  return (
    <div className="container">
      <header className="header-auth">
        <img src={logoKasir} alt="Kasir Jempolan Logo" className="logo" />
        <span className="brand-name">Kasir Jempolan</span>
      </header>

      <div className="content-verify">
        <div className="left-section-verify">
          <img src={logoChgPaswd} alt="Team illustration" className="illustration" />
        </div>

        <div className="right-section-verify">
          <div className="change-form">
            <h1>Periksa email anda</h1>
            <p>Kami mengirim tautan pengaturan ulang kata sandi ke skyp00ding@gmail.com</p>
            
          
            <button type="button" className="btn-verify" onClick={openModal}>
              Verifikasi kata sandi
            </button>

            <div className="send-verify">
              Belum menerima email? <a href="#">kirim ulang</a>
            </div>
            <div className="back-login">
              <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
              <Link to="/login">Kembali ke login</Link>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal Component */}
      <OtpModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        otpCode={otpCode}
        handleOtpChange={handleOtpChange}
        handleVerification={handleVerification}
      />
    </div>
  );
}

export default VerifyEmail;
