import Layout from "../../Layout/Layout";
import { useState } from "react";
import backspace from "../.././assets/assetsTransaksi/Delete.svg";
import checkmark from "../.././assets/assetsTransaksi/Check.svg";
import chitato from "../.././assets/assetsTransaksi/chitato.svg"; 
import "./pembayaran.css";
import PopUpTransaksiSelesai from "./popUpTransasiSelesai";

function Pembayaran() {
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const discount = 0.2;
  const discountedTotal = total - total * discount;

  // Function to handle keypad input
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
      setIsModalOpen(true); // Open the modal on checkmark click
      console.log("Total submitted: Rp", total.toLocaleString("id-ID"));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <Layout titlePage="Transaksi">
      <div className="container py-4">
        <div className="row g-3">
          {/* Left content: List Barang */}
          <div className="col-lg-6">
            <div className="card rounded-3 card-data-barang-100vh">
              <div className="card-body">
                <h5 className="card-title-pembayaran">List Barang</h5>
                <div className="list-barang">
                  <div className="barang-item d-flex justify-content-between">
                    <p className="quantity-product">2</p>
                    <img src={chitato} alt="produk" className="img-barang" />
                    <p className="name-product"> Chitato Sapi Panggang</p>
                    <span className="price-product">Rp 2.000.000</span>
                  </div>
                </div>
                <div className="total d-flex justify-content-between">
                  <span>Total</span>
                  <span>Rp 2.000.000</span>
                </div>
                <div className="discount d-flex justify-content-between">
                  <span>Diskon 20%</span>
                  <span>Rp 200.000</span>
                </div>
                <div className="final-total d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>Rp {discountedTotal.toLocaleString("id-ID")}</strong>
                </div>

                {/* Payment Methods */}
                <div className="payment-method mt-4">
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
          </div>

          {/* Right content: Pembayaran */}
          <div className="col-lg-6">
            <div className="card rounded-3 card-data-barang-right-100vh">
              <div className="card-body">
                <h5 className="card-title-pembayaran">Pembayaran</h5>
                <div className="payment-input">
                  <h2 className="total-amount">Rp {total.toLocaleString("id-ID")}</h2>
                  <div className="d-flex flex-column align-items-center mt-4">
                    <div className="keypad d-grid">
                      {[1, 2, 3, "C", 4, 5, 6, "<", 7, 8, 9, ".", 0, "00", "000", "✓"].map((key) => (
                        <button key={key} className="btn btn-keypad btn-lg mb-1  custom-keypad-button" style={{ width: "92px", height: "92px", fontSize: "1.5rem" }} onClick={() => handleKeyPress(key)}>
                          {key === "✓" ? <img src={checkmark} alt="Checkmark" /> : 
                          key === "<" ? <img src={backspace} alt="Backspace" /> : key}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for successful transaction */}
        <PopUpTransaksiSelesai isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Layout>
  );
}

export default Pembayaran;
