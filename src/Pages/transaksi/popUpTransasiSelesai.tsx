import  { useEffect } from "react";
import "./popUpTransaksiSelesai.css";
import arrowRight from "../../assets/assetsTransaksi/arrow-right-nocolor.svg";
import succeed from "../.././assets/assetsTransaksi/succeed.svg";
import { Link } from "react-router-dom";

function PopUpTransasiSelesai() {
  const removeModalBackdrop = () => {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove(); 
    }
  };

  useEffect(() => {
    return () => {
      removeModalBackdrop();
    };
  }, []);

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title modal-title-transaksi-selesai" id="staticBackdropLabel text-center">
              Transaksi Selesai
            </h3>
            <button type="button" className="btn-close btn-icon-close-modal" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="content-img-checkmark-succed">
              <img src={succeed} alt="Success" className="checkmark-modal" />
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
              <Link to="/transaksi/struk" className="btn btn-struck" onClick={removeModalBackdrop}>
                Lihat Struk
                <img src={arrowRight} alt="arrow-right" className="arrow-icon" />
              </Link>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-batal-transaksi-modal" data-bs-dismiss="modal">
                Simpan
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpTransasiSelesai;
