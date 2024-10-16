import "./modalDetailShift.css";

function ModalDetailShift() {
  return (
    <>
    {/* modal pop up pertama */}
      <div className="modal fade modal-detail-shift" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-detail-shift-dialog">
          <div className="modal-content modal-detail-shift-content">
            <div className="modal-header modal-detail-shift-header">
              <h1 className="modal-title modal-detail-shift-title" id="exampleModalToggleLabel">
                Tambah catatan
              </h1>
              <button type="button" className="btn-close modal-detail-shift-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body modal-detail-shift-body">
              <div className="d-flex justify-content-center modal-detail-shift-balance-btns">
                <button className="btn  mx-1 btn-modal-detail-shift-saldo-masuk-modal1" style={{ flex: 1 }}>
                  Saldo masuk lain
                </button>
                <button className="btn  mx-1 btn-modal-detail-shift-saldo-keluar-modal1" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" style={{ flex: 1 }}>
                  Saldo keluar lain
                </button>
              </div>

              <div className="modal-detail-shift-amount">
                <label className="form-label modal-detail-shift-label">Jumlah</label>
                <input type="text" className="form-control modal-detail-shift-input" placeholder="Masukan uang.." />
              </div>

              <div className=" modal-detail-shift-notes">
                <label className="form-label modal-detail-shift-label">Tambahkan catatan singkat</label>
                <textarea className="form-control modal-detail-shift-textarea row-3" placeholder="Uang kaget..."></textarea>
              </div>
            </div>

            <div className="modal-footer border-0 justify-content-center modal-detail-shift-footer">
              <button type="button" className="btn btn-save w-100 modal-detail-shift-save">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal pop up kedua */}
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-detail-shift-dialog">
          <div className="modal-content modal-detail-shift-content">
            <div className="modal-header modal-detail-shift-header">
              <h1 className="modal-title modal-detail-shift-title" id="exampleModalToggleLabel">
                Tambah catatan
              </h1>
              <button type="button" className="btn-close modal-detail-shift-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body modal-detail-shift-body">
              <div className="d-flex justify-content-center modal-detail-shift-balance-btns">
                <button className="btn  mx-1 btn-modal-detail-shift-saldo-masuk-modal2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ flex: 1 }}>
                  Saldo masuk lain
                </button>
                <button className="btn  mx-1 btn-modal-detail-shift-saldo-keluar-modal2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" style={{ flex: 1 }}>
                  Saldo keluar lain
                </button>
              </div>

              <div className="modal-detail-shift-amount">
                <label className="form-label modal-detail-shift-label">Jumlah</label>
                <input type="text" className="form-control modal-detail-shift-input" placeholder="Masukan uang.." />
              </div>

              <div className=" modal-detail-shift-notes">
                <label className="form-label modal-detail-shift-label">Tambahkan catatan singkat</label>
                <textarea className="form-control modal-detail-shift-textarea row-3" placeholder="Uang kaget..."></textarea>
              </div>
            </div>

            <div className="modal-footer border-0 justify-content-center modal-detail-shift-footer">
              <button type="button" className="btn btn-save w-100 modal-detail-shift-save">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetailShift;
