import React, { useRef } from "react";
import Modal from "react-modal";
import "./otp-modal.css";

// Props type definition for OTP Modal
interface OtpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  otpCode: string[];
  handleOtpChange: (index: number, value: string) => void;
  handleVerification: () => void;
}

// OTP Modal component
const OtpModal: React.FC<OtpModalProps> = ({
  isOpen,
  onRequestClose,
  otpCode,
  handleOtpChange,
  handleVerification,
}) => {
  // UseRef to handle input focus
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    // Update the OTP value
    handleOtpChange(index, value);

    // If value is entered, move focus to the next input field
    if (value && index < otpCode.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    // If backspace is pressed and input is empty, move focus to the previous field
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Verifikasi OTP"
      className="otp-modal"
      overlayClassName="otp-overlay"
    >
      <h2>Verifikasi Kata Sandi</h2>
      <p>
        Masukkan 4 digit kode verifikasi yang telah dikirimkan melalui email ke
        skyp00ding@gmail.com
      </p>

      {/* OTP Input Fields */}
      <div className="otp-inputs">
        {otpCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="otp-input"
            ref={(el) => (inputRefs.current[index] = el)} // Store reference for each input
          />
        ))}
      </div>
      <div className="otp-kirim-ulang">
        Belum menerima kode? kirim ulang (01:00)
      </div>

      <div className="modal-actions">
        <button className="btn-cancel" onClick={onRequestClose}>
          Batal
        </button>
        <button className="btn-verify-modal" onClick={handleVerification}>
          Verifikasi
        </button>
      </div>
    </Modal>
  );
};

export default OtpModal;
