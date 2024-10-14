import Layout from "../../Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./mulaiShift.css";
import { Link } from "react-router-dom";
import ModalAkhiriShift from "./modalAkhiriShift";

function MulaiShift() {
  return (
    <Layout titlePage="Shift">
      <div className="container py-4">
        <div className="row g-3">
          {/* Bagian kiri - Info Kasir dan Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-start-shift-left p-3">
              <div className="card-body">
                {/* Informasi Kasir */}
                <div className="mb-4 content-start-shift-left">
                  <h6>Saat ini</h6>
                  <div className="card-info-shift p-3">
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
                  <div className="card-info-shift p-3">
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
                  <div className="card-info-shift p-3 ">
                    <div className="list-three">
                      <div className="d-flex justify-content-between mb-2">
                        <p className="m-0 text-kiri">Saldo awal</p>
                        <p className="m-0 text-kanan">Rp 0</p>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div className="card card-red-info p-2">
                          <div className="d-flex justify-content-between">
                            <p className="m-0 text-start text-kiri">Diterima sistem</p>
                            <p className="m-0 text-end text-kanan">Rp 0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tombol Rekap dan Akhiri Shift */}
                <div className="d-flex gap-3 mt-5 rekap-akhir-shift">
                  <button className="btn btn-rekap w-50">Rekap shift</button>
                  <button className="btn btn-akhir w-50 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Akhiri shift
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian kanan - Riwayat Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-shift-right p-4">
              <div className="card-body">
                <div className="content-shift-right mb-3">
                  <h6 className="riwayat-title">Riwayat</h6>
                  <div className="btn-container">
                    <button className="btn-long">
                      <FontAwesomeIcon icon={faCalendarDays} className="icon-calender" />
                      <p>02 OKT 2024 - 03 OKT 2024</p>
                    </button>
                  </div>
                </div>

                <div className="text-date-intime">
                  <p>03/10/2024</p>
                </div>

                <table className="table table-custom">
                  <thead>
                    <tr>
                      <th>Kasir</th>
                      <th>Status</th>
                      <th>Jam</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Erida</td>
                      <td>
                        <span className="status-dot-start"></span> Berjalan
                      </td>
                      <td>08:00</td>
                      <td>
                        <Link to="/shift/detail-shift">
                          <button className="btn btn-detail">Lihat detail</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Tata</td>
                      <td>
                        <span className="status-dot-end"></span> Selesai
                      </td>
                      <td>18:00</td>
                      <td>
                        <Link to="/shift/detail-shift">
                          <button className="btn btn-detail">Lihat detail</button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAkhiriShift/>
      
    </Layout>
  );
}

export default MulaiShift;
