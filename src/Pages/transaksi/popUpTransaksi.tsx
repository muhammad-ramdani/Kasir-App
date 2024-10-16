import { useState } from "react";
import chitato from "../.././assets/assetsTransaksi/chitato.svg";
import "./popUpTransaksi-css.css";

function PopUpTransaksi() {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Edit
              </h1>
              <button type="button" className="btn-close btn-icon-close-modal" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="product-info d-flex align-items-center  mb-3">
                <img src={chitato} alt="Chitato" className="img-fluid" style={{ width: "70px" }} />
                <div className="product-details-transaksi">
                  <h6 className="product-name-transaksi">chitato</h6>
                  <p className="product-price-transaksi">Rp 300.000</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button className="btn btn-plus-minus" onClick={() => handleQuantityChange("decrement")}>
                  -
                </button>
                <span className="mx-5 text-quantity">{quantity}</span>
                <button className="btn btn-plus-minus" onClick={() => handleQuantityChange("increment")}>
                  +
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-batal-transaksi-modal" data-bs-dismiss="modal">
                Batal
              </button>
              <button type="button" className="btn btn-simpan-transaksi-modal">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpTransaksi;
