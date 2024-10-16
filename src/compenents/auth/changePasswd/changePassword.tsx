
import './change.css';
import logoChgPaswd from "../../../assets/lupa-sandi.png"; 
import logoKasir from "../../../assets/kasir-jempol.png"; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChangePassword() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <header className="header-auth">
          <img src={logoKasir} alt="Kasir Jempolan Logo" className="logo" />
          <span className="brand-name">Kasir Jempolan</span>
        </header>

        <div className="content-chg">
          <div className="left-section-chg">
            <img src={logoChgPaswd} alt="Team illustration" className="illustration" />
          </div>

          <div className="right-section-chg">
            <div className="change-form">
              <h1>Lupa kata sandi?</h1>
              <p>Jangan khawatir, kami akan mengirimkan petunjuk 
              pengaturan ulang kepada anda.</p>
              <form onSubmit={handleSubmit} className="text-form">
                <label htmlFor="email">Email</label>
                <div className="email-field-chng">
                  <input type="email" id="email" placeholder="Masukan email anda" required />
                </div>

                <button type="submit" className="btn-changepswd">
                  Reset kata sandi
                </button>
              </form>

              <div className="back-login">
                <FontAwesomeIcon icon={faArrowLeft} className='back-icon' />
                <Link to="/login">Kembali ke login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
