import React, { useState } from "react";
import "./popUpTransaksi-css.css";

interface ModalPopupProps {
  show: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    image: string;
  } | null;
}

const ModalPopup: React.FC<ModalPopupProps> = ({ show, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0.0);
  const [isPercent, setIsPercent] = useState(true); 

  if (!show || !product) return null;

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-choose">
        <div className="modal-header">
          <h5 className="modal-title text-center">Edit</h5>
        </div>
        <div className="modal-body">
          {/* Product Info */}
          <div className="product-info d-flex align-items-center  mb-3">
            <img src={product.image} alt={product.name} className="img-fluid" style={{ width: '80px' }} />
            <div className="product-details">
              <h6 className="product-name">{product.name}</h6>
              <p className="product-price">{product.price}</p>
            </div>
          </div>

          {/* Quantity Control */}
          <div className="d-flex justify-content-center align-items-center mb-3">
            <button
              className="btn btn-plus-minus"
              onClick={() => handleQuantityChange('decrement')}
            >
              -
            </button>
            <span className="mx-5 text-quantity">{quantity}</span>
            <button
              className="btn btn-plus-minus"
              onClick={() => handleQuantityChange('increment')}
            >
              +
            </button>
          </div>

          {/* Discount Input */}
          <div className="mb-3">
            <label className="form-label">Ubah Diskon Perjumlah</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value))}
              />
              <button
                className={`btn ${isPercent ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setIsPercent(true)}
              >
                %
              </button>
              <button
                className={`btn ${!isPercent ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setIsPercent(false)}
              >
                Rp
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-outline-danger" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-danger" onClick={onClose}>Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
