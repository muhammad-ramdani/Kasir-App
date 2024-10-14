import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import ModalPopup from "./popUpTransaksi"; // Import the Modal component
import "./transaksi-css.css";
import barcode from "../.././assets/assetsTransaksi/barcode.svg";
import chitato from "../.././assets/assetsTransaksi/chitato.svg";
import search from "../.././assets/assetsTransaksi/search-normal.svg";
import scanner from "../.././assets/assetsTransaksi/scanner.svg";
import trash from "../.././assets/assetsTransaksi/Trash 2.svg";
import voucher from "../.././assets/assetsTransaksi/ticket-discount.svg";
import arrow from "../.././assets/assetsTransaksi/arrow-right.svg";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  price: string;
  image: string;
}

const Transaksi: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      name: "Chitato Sapi Panggang",
      price: "Rp 1.000.000",
      image: chitato,
    },
    {
      name: "Chitato BBQ",
      price: "Rp 950.000",
      image: chitato,
    },
    {
      name: "Chitato Rasa Keju",
      price: "Rp 1.100.000",
      image: chitato,
    },
    {
      name: "Lays Rumput Laut",
      price: "Rp 900.000",
      image: chitato,
    },
    {
      name: "Lays Barbeque",
      price: "Rp 1.200.000",
      image: chitato,
    },
    {
      name: "Doritos",
      price: "Rp 1.050.000",
      image: chitato,
    },
    {
      name: "Cheetos",
      price: "Rp 1.300.000",
      image: chitato,
    },
    {
      name: "Taro",
      price: "Rp 850.000",
      image: chitato,
    },
    {
      name: "Qtela",
      price: "Rp 1.000.000",
      image: chitato,
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <Layout titlePage="Transaksi">
      <div className={`container py-4 ${showModal ? "blur-background" : ""}`}>
        <div className="row g-4">
          {/* Left content */}
          <div className="col-7">
            <div className="card rounded-3 card-data-barang-100vh">
              <div className="card-body">
                {/* Search and Filter */}
                <div className="row mb-3">
                  <div className="col-auto">
                    <div className="dropdown me-1">
                      <button type="button" className="btn btn-outline-light-search btn-filter-data-barang rounded-3" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,10">
                        <img src={search} className="icon-circle" alt="search" />
                      </button>
                      <button type="button" className="btn btn-outline-light-barcode btn-filter-data-barang rounded-3" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,10">
                        <img src={barcode} className="icon-circle" alt="barcode" />
                      </button>
                    </div>
                  </div>
                  <div className="col col-cari-data-barang">
                    <div className="input-group flex-nowrap search-bar">
                      <img src={scanner} className="input-group-text scan bg-white rounded-start-3" alt="search" />
                      <input type="text" className="form-control form-control-cari-data-barang border border-start-0 rounded-end-3" placeholder="scan barcode" aria-label="search" />
                    </div>
                  </div>
                </div>

                {/* Kategori Section */}
                <div className="mb-3">
                  <button className="btn btn-kategori">Semua</button>
                  <button className="btn btn-kategori">Snack</button>
                  <button className="btn btn-kategori">Alat Tulis</button>
                  <button className="btn btn-kategori">Bahan Baku</button>
                </div>

                {/* Product Grid */}
                <div className="row row-cols-3 g-3 product-grid">
                  {products.map((product, idx) => (
                    <div className="col" key={idx}>
                      <div className="card product-card" onClick={() => handleProductClick(product)}>
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body p-2 text-start">
                          <p className="card-title mb-1">{product.name}</p>
                          <p className="card-text">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-5">
            <div className="card rounded-3 card-data-barang-right-100vh">
              <div className="card-body">
                <h5 className="card-title-right">List Barang</h5>
                <ul className="list-group mb-5">
                  <li className="list-group-item d-flex align-items-center border-custom">
                    <span className="count-barang me-3">2</span>
                    <img src={chitato} alt="Chitato" className=" img-barang" />
                    <div className="d-flex flex-column flex-grow-1  ">
                      <span className="name-barang ">Chitato Sapi Panggang</span>
                      <span className="harga-barang ">Rp 2.000.000</span>
                    </div>
                    <img src={trash} alt="Hapus" className="ms-5 icon-delete" />
                  </li>
                </ul>
                <div className="voucher-input">
                  <img src={voucher} className="voucher-img" alt="Voucher" />
                  <span className=" w-100 mb-2 voucher-text">Lihat Diskon</span>
                  <img src={arrow} className="arrow-img" alt="Arrow" />
                </div>
                <div className="d-grid mt-5">
                  <Link to="/transaksi/pembayaran">
                    <button className="btn btn-bayar">Proses Pembayaran</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <ModalPopup show={showModal} onClose={handleCloseModal} product={selectedProduct} />
    </Layout>
  );
};

export default Transaksi;
