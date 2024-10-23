import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import "./styleTransaksi.css";
import barcode from "../../assets/assetsTransaksi/barcode.svg";
import search from "../../assets/assetsTransaksi/search-normal.svg";
import scanner from "../../assets/assetsTransaksi/scanner.svg";
import chitato from "../.././assets/assetsTransaksi/chitato.svg";
import trash from "../.././assets/assetsTransaksi/Trash 2.svg";
import arrow from "../.././assets/assetsTransaksi/arrow-right.svg";
import voucher from "../.././assets/assetsTransaksi/ticket-discount.svg";
import PopUpTransaksi from "./popUpTransaksi";
import { Link } from "react-router-dom";

function Transaksi() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = [
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

  return (
    <Layout titlePage="Transaksi">
      <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
        <div className="row m-0" style={{ columnGap: "30px" }}>
          {/* Left content (Search and Category Filter) */}
          <div className="col p-0">
            <div className="card rounded-4 height-calc-100vh-151px">
              <div className="card-body">
                <div className="row">
                  {/* Search and Barcode Buttons */}
                  <div className="col-auto">
                    <div className="col-auto">
                      <div className="icon-search-barcode-transaksi">
                        <button type="button" className="btn btn-outline-light transaksi-pages-btn-search ">
                          <img src={search} className="transaksi-pages-icon transaksi-pages-btn-img-size" alt="search" />
                        </button>
                        <button type="button" className="btn btn-outline-light mx-3 transaksi-pages-btn-barcode ">
                          <img src={barcode} className="transaksi-pages-icon transaksi-pages-btn-img-barcode-size" alt="barcode" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Scan Input */}
                  <div className="col ps-0">
                    <div className="d-flex flex-column flex-sm-row flex-nowrap mt-0">
                      {/* Search and Barcode Buttons */}

                      {/* Scan Input */}
                      <div className="col col-lg-auto p-0 input-group input-group-transaksi flex-nowrap ">
                        <img src={scanner} className="input-group-text transaksi-pages-scan-icon bg-white rounded-start-3" alt="scanner" />
                        <input
                          type="text"
                          className="form-control form-control-cari-barang border border-start-0 rounded-end-3 transaksi-pages-input-search"
                          placeholder="Cari barang.."
                          aria-label="Search items"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category Filter Buttons */}
                <div>
                  <div className="transaksi-pages-group-button-filter-kategori">
                    <h6 className="text-kategori-transaksi">Kategori</h6>
                    <button type="button" className="btn rounded-3 ms-1 transaksi-pages-button-filter-kategori">
                      Semua
                    </button>
                    <button type="button" className="btn rounded-3 mx-2 transaksi-pages-button-filter-kategori">
                      Snack
                    </button>
                    <button type="button" className="btn rounded-3 mx-2 transaksi-pages-button-filter-kategori">
                      Alat Tulis
                    </button>
                    <button type="button" className="btn rounded-3 mx-2 transaksi-pages-button-filter-kategori">
                      Bahan Baku
                    </button>
                  </div>
                </div>

                <div className="container-fluid overflow-product-scroll overflow-y-scroll">
                  <div className="row row-cols-1 row-cols-md-4 g-2 product-grid-transaksi-pages">
                    {products.map((product, idx) => (
                      <div className="col" key={idx}>
                        <div className="card product-card product-card-transaksi " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          <img src={product.image} className="card-img-top" alt={product.name} />
                          <div className="card-body d-flex flex-column justify-content-between p-2 text-start">
                            <p className="card-title card-title-product-transaksi mb-1">{product.name}</p>
                            <p className="card-text card-text-price-product-transaksi">{product.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content (Cart or List) */}
          <div className="card-body-transaksi-right col p-0 ">
            <div className="card rounded-4 height-calc-100vh-151px">
              <div className="card-body " style={{ height: "calc(100vh - 351px)" }}>
                <div>
                  <h5 className="card-title-transaksi-right">List Barang</h5>
                </div>
                <div className="list-barang-transaksi-right">
                  <li className="list-group-item d-flex align-items-center">
                    <span className="count-barang-transaksi-product me-3">2</span>
                    <div>
                      <img src={chitato} alt="Chitato" className=" img-barang-list-barang" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 text-list-barang-product ">
                      <span className="name-barang-list-barang ">Chitato Sapi Panggang</span>
                      <span className="harga-barang-listbarang ">Rp 2.000.000</span>
                    </div>
                    <img src={trash} alt="Hapus" className="ms icon-delete-list-barang" />
                  </li>
                </div>
                <div className="list-barang-transaksi-right">
                  <li className="list-group-item d-flex align-items-center">
                    <span className="count-barang-transaksi-product me-3">2</span>
                    <div>
                      <img src={chitato} alt="Chitato" className=" img-barang-list-barang" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 text-list-barang-product ">
                      <span className="name-barang-list-barang">Chitato Sapi Panggang</span>
                      <span className="harga-barang-listbarang">Rp 2.000.000</span>
                    </div>
                    <img src={trash} alt="Hapus" className="ms icon-delete-list-barang" />
                  </li>
                </div>
              </div>
              <div className="card-footer border-0 bg-white d-grid mb-4 rounded-bottom-4 content-btn-proses-pembayaran">
                <div className="voucher-content-input mb-5 mx-2 d-flex align-items-center">
                  <img src={voucher} className="voucher-img me" alt="Voucher" /> {/* Tambahkan margin-end di sini */}
                  <span className=" voucher-text ms-4">Lihat Diskon</span>
                  <img src={arrow} className="arrow-img-list-barang ms-auto" alt="Arrow" /> {/* ms-auto untuk memindahkan ke posisi akhir */}
                </div>
                <div className="content-btn-proses-pembayaran-list-barang d-grid gap-2 col-6 mx-auto">
                  <Link to="/transaksi/pembayaran">
                    <button className="btn btn-proses-pembayaran">Proses Pembayaran</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUpTransaksi />
    </Layout>
  );
}

export default Transaksi;
