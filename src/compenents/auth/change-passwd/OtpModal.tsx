import React from "react";
import Modal from "react-modal";
import "./otpModal.css";

// Props type definition for OTP Modal
interface OtpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  otpCode: string[];
  handleOtpChange: (index: number, value: string) => void;
  handleVerification: () => void;
}

// OTP Modal component
const OtpModal: React.FC<OtpModalProps> = ({ isOpen, onRequestClose, otpCode, handleOtpChange, handleVerification }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Verifikasi OTP" className="otp-modal" overlayClassName="otp-overlay">
      <h2>Verifikasi Kata Sandi</h2>
      <p>Masukkan 4 digit kode verifikasi yang telah dikirimkan melalui email ke skyp00ding@gmail.com</p>

      {/* OTP Input Fields */}
      <div className="otp-inputs">
        {otpCode.map((digit, index) => (
          <input key={index} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} className="otp-input" />
        ))}
      </div>
      <div className="otp-kirim-ulang">
              Belum menerima kode? <a href="#">Kirim ulang</a>
            </div>

      <div className="modal-actions">
        <button className="btn-cancel" onClick={onRequestClose}>
          Batal
        </button>
        <button className="btn-verify" onClick={handleVerification}>
          Verifikasi
        </button>
      </div>
    </Modal>
  );
};

export default OtpModal;
