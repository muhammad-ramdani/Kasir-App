import Layout from "../../Layout/Layout";

import "./detailRekapShift.css";
import ModalDetailShift from "./modalDetailShift";

function DetailRekapShift() {
  return (
    <Layout titlePage="Detail Rekap Shift">
      <div className="container py-4">
        <div className="row g-3">
          {/* Bagian kiri - Info Kasir dan Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-detail-shift-left p-3">
              <div className="card-body">
                {/* Informasi Kasir */}
                <div className="mb-4 content-detail-shift-left">
                  <h6>Saat ini</h6>
                  <div className="card-detail-shift p-3">
                    <div className="list-one">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Nama</p>
                        <p className="m-0 text-kanan">Erida</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Sebagai</p>
                        <p className="m-0 text-kanan">Kasir</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Mulai shift</p>
                        <p className="m-0 text-kanan">2024-10-02 12:00:00</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Shift berakhir</p>
                        <p className="m-0 text-kanan">-</p>
                      </div>
                    </div>
                  </div>

                  {/* Informasi Penjualan */}
                  <div className="card-detail-shift p-3">
                    <div className="list-twoe">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Penjualan tunai</p>
                        <p className="m-0 text-kanan">Rp 0</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Pemasukan lain</p>
                        <p className="m-0 text-kanan">Rp 0</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Pengeluaran</p>
                        <p className="m-0 text-danger">Rp 0</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Pengeluaran lain</p>
                        <p className="m-0 text-danger">Rp 0</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <div className="card card-red-info p-2">
                          <div className="d-flex justify-content-between">
                            <p className="m-0 text-start text-kiri">Subtotal</p>
                            <p className="m-0 text-end text-kanan">Rp 0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtotal dan Diterima sistem */}
                  <div className="card-detail-shift p-3 ">
                    <div className="list-three">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Saldo awal</p>
                        <p className="m-0 text-kanan">Rp 0</p>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div className="card card-red-info p-2">
                          <div className="d-flex justify-content-between">
                            <p className="m-0 text-start text-kiri">Diterima sistem</p>
                            <p className="m-0 text-end text-kanan">Rp 57.000</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <div className="card card-red-info p-2">
                          <div className="d-flex justify-content-between">
                            <p className="m-0 text-start text-kiri">Diterima cashdrawer</p>
                            <p className="m-0 text-end text-kanan-cashdrawer">Rp 57.000</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Selisih</p>
                        <p className="m-0 text-kanan">Rp 0</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-detail-shift p-3 ">
                    <div className="list-four">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">catatan: -</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian kanan - Riwayat Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-detail-shift-right p-4">
              <div className="card-body">
                <div className="content-detail-shift-right mb-3">
                  <h6 className="detail-shift-title">Detail rekap shift</h6>
                  <div className="form-check content-checkbox d-flex flex-wrap mb-3">
                    <div className="col-6 mb-2">
                      <input className="form-check-input input-checkbox" type="checkbox" id="flexCheckDefault1" />
                      <label className="form-check-label label-checkbox" htmlFor="flexCheckDefault1">
                        Kas masuk
                      </label>
                    </div>
                    <div className="col-6 mb-2">
                      <input className="form-check-input input-checkbox" type="checkbox" id="flexCheckDefault2" />
                      <label className="form-check-label label-checkbox" htmlFor="flexCheckDefault2">
                        Kas keluar
                      </label>
                    </div>
                    <div className="col-6 mb-2">
                      <input className="form-check-input input-checkbox" type="checkbox" id="flexCheckDefault3" />
                      <label className="form-check-label label-checkbox" htmlFor="flexCheckDefault3">
                        Kas masuk lain
                      </label>
                    </div>
                    <div className="col-6 mb-2">
                      <input className="form-check-input input-checkbox" type="checkbox" id="flexCheckDefault4" />
                      <label className="form-check-label label-checkbox" htmlFor="flexCheckDefault4">
                        Kas keluar lain
                      </label>
                    </div>
                  </div>

                  <div className="text-info-saldo-shift">
                    <p className="mb-2">
                      Saldo awal <span className="float-end">Rp 0</span>
                    </p>
                  </div>
                  <div>
                    <div className="shift-history-item">
                      <div className="text-date-rekap-shif">
                        <p className="mb-2">
                          2024-10-02 13:10:05 <span className="float-end text-danger">Rp 0</span>
                        </p>
                      </div>
                      <div>
                        <p>masuk</p>
                        <p className="mb-1">Saldo awal</p>
                      </div>
                    </div>
                    <div className="shift-history-item">
                      <div className="shift-history-item">
                        <div className="text-date-rekap-shif">
                          <p className="mb-2">
                            2024-10-02 13:10:05 <span className="float-end text-danger">Rp 57.000</span>
                          </p>
                        </div>

                        <div>
                          <p>masuk</p>
                          <p className="mb-1">Transaksi penjualan (53209883)</p>
                        </div>
                      </div>

                      {/* <div className="btn-catatan-rekap-shift-content"> */}
                      <div className="d-grid gap-2 mx-auto">
                        <button className="btn btn-primary btn-akhiri-shift-rekap " data-bs-target="#exampleModalToggle" data-bs-toggle="modal" type="button">
                          Akhiri shift
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn-catatan-rekap-shift" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                    Tambah catatan singkat
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalDetailShift />
    </Layout>
  );
}

export default DetailRekapShift;
