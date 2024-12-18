import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import backspace from "../.././assets/assetsTransaksi/Delete.svg";
import checkmark from "../.././assets/assetsTransaksi/Check.svg";
import chitato from "../.././assets/assetsTransaksi/chitato.svg";
import "./pembayaran.css";
import PopUpTransasiSelesai from "./popUpTransasiSelesai";
// import PopUpTransaksiSelesai from "./popUpTransasiSelesai";

function Pembayaran() {
  const [total, setTotal] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

  const handleKeyPress = (key: string | number) => {
    if (typeof key === "number") {
      setTotal((prevTotal) => prevTotal * 10 + key); // Append numbers to the total
    } else if (key === "C") {
      setTotal(0); // Clear the total
    } else if (key === "<") {
      setTotal((prevTotal) => Math.floor(prevTotal / 10)); // Remove the last digit
    } else if (key === "00") {
      setTotal((prevTotal) => prevTotal * 100); // Append '00'
    } else if (key === "000") {
      setTotal((prevTotal) => prevTotal * 1000); // Append '000'
    } else if (key === "✓") {
      console.log("Total submitted: Rp", total.toLocaleString("id-ID"));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout titlePage="Transaksi">
      <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
        <div className="row m-0" style={{ columnGap: "30px" }}>
          <div className="col p-0">
            <div className="card rounded-4 height-calc-100vh-151px">
              <div className="card-body card-body-padding-23px">
                <h5 className="card-title-list-barang mb-0">List Barang</h5>
                <div className="content-list-barang-left">
                  <div className="barang-item-list-barang d-flex justify-content-between">
                    <p className="quantity-product-list-barang">2</p>
                    <img src={chitato} alt="produk" className="img-barang" />
                    <p className="name-product-list-barang"> Chitato Sapi Panggang</p>
                    <span className="price-product-list-barang">Rp 2.000.000</span>
                  </div>
                </div>
                <div className="content-total-diskon-left">
                  <div className="total-price-list-barang d-flex justify-content-between">
                    <span>Total</span>
                    <span>Rp 2.000.000</span>
                  </div>
                  <div className="discount d-flex justify-content-between">
                    <span>Diskon 20%</span>
                    <span>Rp 200.000</span>
                  </div>
                  <div className="final-total d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>Rp </strong>
                  </div>
                </div>
              </div>
              {/* Payment Methods */}
              <div className="card-footer bg-white border-0 rounded-bottom-4 payment-method ">
                <h6>Metode Pembayaran :</h6>
                <div className="row m-2">
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">Cash</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">Debit</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment w-100 h-100">GoPay</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">OVO</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">Dana</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">QRIS</button>
                  </div>
                  <div className="col-4 mb-3">
                    <button className="btn btn-payment  w-100 h-100">LinkAja</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0 card-body-transaksi-pembayaran-right">
            <div className="card rounded-4 height-calc-100vh-151px">
              <div className="card-body card-body-padding-23px">
                <h5 className="card-title-pembayaran">Pembayaran</h5>
                <div className="payment-input">
                  <h2 className="total-amount">Rp {total.toLocaleString("id-ID")}</h2>
                  <div className="d-flex flex-column align-items-center mt-4">
                    <div className="keypad d-grid">
                      {[1, 2, 3, "C", 4, 5, 6, "<", 7, 8, 9, ".", 0, "00", "000", "✓"].map((key) => (
                        <button
                          key={key}
                          className="btn btn-keypad btn-lg mb-1 custom-keypad-button"
                          style={{ width: "92px", height: "92px", fontSize: "1.5rem" }}
                          onClick={() => handleKeyPress(key)}
                          {...(key === "✓" && { "data-bs-toggle": "modal", "data-bs-target": "#staticBackdrop" })}
                        >
                          {key === "✓" ? <img src={checkmark} alt="Checkmark" /> : key === "<" ? <img src={backspace} alt="Backspace" /> : key}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUpTransasiSelesai />
    </Layout>
  );
}

export default Pembayaran;
