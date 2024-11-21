
import logoChgPaswd from "../../../assets/lupa-sandi.png";
import logoKasir from "../../../assets/kasir-jempol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './resetBerhasil.css';

function ResetBerhasil() {
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
            <h1>Reset kata sandi</h1>
            <p>Kata sandi anda telah berhasil diriset. klik di bawah untuk melihat secara ajaib</p>

            <button type="button" className="btn-verify">
              Lanjutkan
            </button>

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

export default ResetBerhasil;
