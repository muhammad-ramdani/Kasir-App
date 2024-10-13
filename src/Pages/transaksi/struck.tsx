import React from "react";
import "./struckPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const StrukPage: React.FC = () => {
  return (
    <Layout titlePage="Struk">
      <div className="container-fluid py-3">
        <div className="row g-1 justify-content-center">
          <div className="col-11 mb-1 d-flex justify-content-start">
            <Link to="/transaksi/pembayaran" className="text-dark text-decoration-none d-flex align-items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="icon-back me-3" />
              Kembali
            </Link>
          </div>

          {/* Isi Struk */}
          <div className="col-12 col-md-8 col-lg-4 struck-list">
            <div className="struk-container p-4 border rounded shadow-sm bg-white">
              <h5 className="text-center">Toko Braincode</h5>

              <div className="struk-detail mt-3">
                <div className="text-alamat text-center border-bottom-dash border-dashed pb-2 mb-3">
                  <p className="mb-1">Jl. Sidamukti, No 122, Sakaraja Kulon</p>
                  <p className="mb-0">53209883</p>
                </div>

                <div className="text-date-shift border-bottom-dash border-dashed pb-2 mb-3">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">2024-10-03</p>
                    <p className="mb-0">Erida</p>
                  </div>
                  <p className="mb-0">08:27:56</p>
                </div>

                <div className="text-info-product border-bottom-dash border-dashed pb-2 mb-3">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">Chitato Sapi Panggang</p>
                    <p className="mb-0">Rp 10.000</p>
                  </div>
                  <p className="mb-1">2 x Rp 5.000</p>
                  <p className="mb-0">Diskon (-20%) Rp 3.000</p>
                </div>

                <div className="price-summary">
                  <div className="price-text border-bottom border-dashed pb-2 mb-3">
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Total Item:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Total QTY:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Total Harga:</p>
                      <p className="mb-0">Rp 10.000</p>
                    </div>
                  </div>

                  {/* Pembayaran */}
                  <div className="text-center border-bottom border-dashed pb-2 mb-3">
                    <p className="pembayaran-text mb-0">PEMBAYARAN</p>
                  </div>

                  {/* Detail Pembayaran */}
                  <div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Cash:</p>
                      <p className="mb-0">Rp 57.000</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Jumlah Bayar:</p>
                      <p className="mb-0">Rp 57.000</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Kembalian:</p>
                      <p className="mb-0">Rp 0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Anda Hemat:</p>
                      <p className="mb-0">Rp 4.000</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-prounact mt-3">
                  <p className="mb-0">TERIMA KASIH SUDAH</p>
                  <p className="mb-0">BERBELANJA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrukPage;
