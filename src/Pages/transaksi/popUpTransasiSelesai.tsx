import React from "react";
import { Link } from "react-router-dom"; // Menggunakan Link untuk navigasi
import succeed from "../.././assets/assetsTransaksi/succeed.svg";
import "./popUpTransaksiSelesai.css";
import arrowRight from "../../assets/assetsTransaksi/arrow-right-nocolor.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopUpTransaksiSelesai: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Transaksi Selesai</h3>
        <img src={succeed} alt="Success" className="checkmark-modal" />
        <div className="d-flex text-info-transaksi justify-content-between mt-4">
          <span>Kembalian</span>
          <span>Rp 200.000</span>
        </div>
        <div className="mt-4 struck">
          <button className="btn btn-struck mb-2">
            Cetak Struk
            <img src={arrowRight} alt="arrow" className="arrow-icon" />
          </button>
          <button className="btn btn-struck mb-2">
            Cetak Struk
            <img src={arrowRight} alt="arrow" className="arrow-icon" />
          </button>
          <Link to="/transaksi/struk" className="btn btn-struck">
            Lihat Struk 
            <img src={arrowRight} alt="arrow-right" className="arrow-icon" />
          </Link>
        </div>
        <button className="btn btn-selesai-bayar mt-4" onClick={onClose}>
          Selesai
        </button>
      </div>
    </div>
  );
};

export default PopUpTransaksiSelesai;
