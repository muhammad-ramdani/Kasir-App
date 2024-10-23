import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";
import chitato from "../../assets/imagesAllManajemen/chitato-svg.svg";
import "./editStokBarang.css";

function EditStokBarang() {
  return (
    <div className="modal fade" id="modalEditDataSupplierDimanajemenDataSupplier" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
      {/* Use the custom modal-dialog width class */}
      <div className="modal-dialog modal-dialog-centered modal-dialog-custom">
        <div className="modal-content shadow rounded-4">
          {/* Header */}
          <div className="modal-header" style={{ padding: "16px 24px", borderBottom: "none" }}>
            <h5 className="modal-title" style={{ fontSize: "18px", fontWeight: "500" }}>
              <img src={logoEditManajemenDark22} className="me-2" alt="Logo" />
              Edit Stok Barang
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body" style={{ padding: "20px 24px" }}>
            {/* Product Information Card */}
            <div className="card mb-4 p-3" style={{ borderRadius: "10px", borderColor: "#e5e5e5" }}>
              <div className="d-flex align-items-center">
                {/* Image Section */}
                <img src={chitato} alt="Chitato Rasa Sapi Panggang" style={{ width: "80px", height: "100px", objectFit: "cover", marginRight: "20px" }} />

                {/* Text Section */}
                <div style={{ flexGrow: 1 }}>
                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Nama barang
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500, }}>: Chitato Rasa Sapi Panggang</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Kategori
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: Makanan dan Minuman</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Sisa Stok
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: 200</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Kode
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: 000004</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Tanggal Field */}
            <div className="mb-3">
              <label htmlFor="tanggal" className="form-label" style={{ fontSize: "14px", color: "#6C757D" }}>
                Tanggal
              </label>
              <input
                type="date"
                className="form-control"
                id="tanggal"
                style={{
                  backgroundColor: "#F8F9FC",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E5E5E5",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Harga Beli and Jumlah Fields */}
            <div className="row">
              {/* Harga Beli Field */}
              <div className="col-md-6 mb-3">
                <label htmlFor="hargaBeli" className="form-label" style={{ fontSize: "14px", color: "#6C757D" }}>
                  Harga Beli
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hargaBeli"
                  defaultValue="5.000.000"
                  style={{
                    backgroundColor: "#F8F9FC",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E5E5",
                    fontSize: "14px",
                  }}
                />
              </div>

              {/* Jumlah Field */}
              <div className="col-md-6 mb-3">
                <label htmlFor="jumlah" className="form-label" style={{ fontSize: "14px", color: "#6C757D" }}>
                  Jumlah
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="jumlah"
                  defaultValue="1"
                  style={{
                    backgroundColor: "#F8F9FC",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E5E5",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {/* Keterangan Field */}
            <div className="mb-3">
              <label htmlFor="keterangan" className="form-label" style={{ fontSize: "14px", color: "#6C757D" }}>
                Keterangan
              </label>
              <textarea
                className="form-control"
                id="keterangan"
                placeholder="Masukkan keterangan.."
                style={{
                  backgroundColor: "#F8F9FC",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E5E5E5",
                  fontSize: "14px",
                  height: "100px",
                }}
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer" style={{ borderTop: "none", padding: "20px 24px" }}>
            <button type="button" className="btn btn-danger w-100" style={{ fontSize: "16px", padding: "10px", backgroundColor: "#FF0000", borderRadius: "12px" }}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStokBarang;
