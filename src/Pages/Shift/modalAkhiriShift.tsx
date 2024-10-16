

import "./modalAkhiriShift.css";




function ModalAkhiriShift() {
  return (
    <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-xl" style={{width: 605}}>
        <div className="modal-content rounded-4" style={{width: 605}}>
          <div className="modal-header" style={{margin: "0px 16px 0px 11px"}}>
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Akhiri shift
            </h1>
            <button type="button" className="btn-close btn-icon-close-modal" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body " style={{margin: "0px 10px 0px 10px"}}>
            <div className="d-flex text-akhiri-shift-one justify-content-between mb-3">
              <h6>Saldo yang diterima sistem</h6>
              <h6>Rp 1.210.000</h6>
            </div>
            <div className="text-akhiri-shift-twoe mb-3">
              <h6>Masukkan saldo akhir yang diterima di cash drawer</h6>
              <div className=" text-shift-pone">
                <p className="mb-3">*Tunai yang diterima akan menjadi saldo akhir di Cashdrawer</p>
                <input type="text" className="form-control-saldo mb-3" placeholder="Rp 0" />
              </div>
              <div className="text-bottom-saldo">
                <p>Masukkan data terakhir</p>
              </div>
              <div className=" text-shift-ptwoe">
                <p>Tambahkan catatan singkat</p>
                <input className="form-control-catatan" placeholder="Ketik disini..."></input>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 justify-content-center pb-4">
            <button type="button" className="btn btn-akhiri-shift-merah w-75">
              Akhiri shift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAkhiriShift;
