import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../Layout/Layout";
import "./shift.css";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CalenderComponent from './calenderComponent';

function Shift() {
  const [showCalendar, setShowCalendar] = useState<boolean>(false); 

  // Mengatur visibilitas kalender
  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar); 
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false); 
  };

  return (
    <Layout titlePage="Shift">
      <div className="container py-4">
        <div className="row g-3">
          {/* Left Section - Info Kasir dan Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-shift-left p-4">
              <div className="card-body">
                {/* Informasi Kasir */}
                <div className="mb-4 content-shift-left">
                  <h6>Saat ini</h6>
                  <div className="card custom-card-kasir p-4">
                    <div className="d-flex align-items-center">
                      <div className="avatar bg-danger text-white me-3">E</div>
                      <div>
                        <p className="m-0 fw-bold">Erida</p>
                        <p className="m-0 text-muted">Kasir</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pilih Cash Drawer dan Saldo Awal */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label-shift">Pilih Cash Drawer</label>
                    <div className="card custom-card-pilih p-3 ">
                      <select className="form-select-pilih-cash-drawer custom-select">
                        <option>Cash Drawer 1</option>
                        <option>Cash Drawer 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-shift">Masukkan saldo awal</label>
                    <div className="card custom-card-saldo p-3 ">
                      <input type="text" className="form-control-masukan-saldo custom-control" placeholder="Rp. 0" />
                    </div>
                    <small className="text-muted-saldo">Masukkan data terakhir</small>
                  </div>
                </div>
                <Link to="/shift/start-shift">
                  <button className="btn btn-start-shift w-100">Mulai shift sekarang</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Riwayat Shift */}
          <div className="col-md-6">
            <div className="card rounded-3 card-shift-right p-4">
              <div className="card-body">
                <div className="content-shift-right mb-3">
                  <h6 className="riwayat-title">Riwayat</h6>
                  <div className="btn-container">
                    <button className="btn-long" onClick={handleCalendarClick}>
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

      {/* Kalender ditampilkan sebagai modal overlay */}
      {showCalendar && (
        <div className="calendar-modal-overlay" onClick={handleCloseCalendar}>
          <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
            <CalenderComponent open={showCalendar} onClose={handleCloseCalendar} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Shift;
