// import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoExportDataWhite from "../../assets/imagesAllManajemen/logo-export-data-white.svg";
import logoImportData from "../../assets/imagesAllManajemen/logo-import-data.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoEditManajemenGreen from "../../assets/imagesAllManajemen/logo-edit-manajemen-green.svg";
import chitato from "../../assets/imagesAllManajemen/chitato.png";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";
import EditStokBarang from "./editStokBarang";
// import PaginationFix from "../../compenents/pagination-fix/paginationFix";


function StockBarang() {
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

  const cardContents = [
    {
      gambar: { chitato },
      namaBarang: "Chitato Rasa Sapi Panggang",
      kodeBarang: "000001",
      kategori: "Makanan dan Minuman",
      stok: 200,
      hargaJual: 8000,
      hargaDasar: 5000,
    },
    {
      gambar: { chitato },
      namaBarang: "Chitato Rasa Sapi Panggang",
      kodeBarang: "000001",
      kategori: "Makanan dan Minuman",
      stok: 200,
      hargaJual: 8000,
      hargaDasar: 5000,
    },
    
  ];

  return (
    <Layout titlePage="Stok Barang">
      <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
        <div className="row m-0" style={{ columnGap: "12px" }}>
          <div className="col-auto p-0">
            <button type="button" className="btn focus-ring-none-stok-barang-manajemen fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 27.66px", backgroundColor: "#FF0000", color:"#ffff" }}>
              <img src={logoExportDataWhite} style={{ marginTop: "-4px", marginRight: "10px" }} />
              Export Data
            </button>
          </div>
          <div className="col-auto p-0">
            <button type="button" className="btn focus-ring-none-stok-barang-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 25.41px" }}>
              <img src={logoImportData} style={{ marginTop: "-4px", marginRight: "10px" }} />
              Import Data
            </button>
          </div>
          <div className="col-auto p-0 ms-auto">
            <div className="input-group flex-nowrap mt-0" style={{ width: "350px" }}>
              <img src={searchNormalManajemen} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED" }} />
              <input
                type="text"
                className="form-control focus-ring-none-stok-barang-manajemen font-size-16px-stok-barang-manajemen placeholder-font-size-16px-color-8E8E8E-stok-barang-manajemen border-start-0 rounded-end-3"
                placeholder="Cari Barang.."
                style={{ borderColor: "#EDEDED", padding: "11px 12px 11px 0px" }}
              />
            </div>
          </div>
        </div>
        <div className="card rounded-4" style={{ borderColor: "#EDEDED", height: "calc(100vh - 233px)", margin: "30px 0px 4px 0px" }}>
          <div className="rounded-4" style={{ background: "linear-gradient(to bottom, #ECEFF8 68px, transparent 68px)", padding: "22px 31px 22px 31px" }}>
            <table className="table mb-0">
              <thead>
                <tr>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopLeftRadius: "15px" }}>
                    Nama Barang
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Kode
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Kategori
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Stok
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Harga Jual(Rp)
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Harga Dasar(Rp)
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopRightRadius: "15px" }} scope="col-auto">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {cardContents.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: "15px 0", display: "flex", alignItems: "center" }}>
                      {/* Menampilkan gambar di samping nama barang */}
                      <img src={item.gambar} alt={item.namaBarang} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                      {item.namaBarang}
                    </td>
                    <td style={{ padding: "15px 0" }}>{item.kodeBarang}</td>
                    <td style={{ padding: "15px 0" }}>{item.kategori}</td>
                    <td style={{ padding: "15px 0" }}>{item.stok}</td>
                    <td style={{ padding: "15px 0" }}>{item.hargaJual}</td>
                    <td style={{ padding: "15px 0" }}>{item.hargaDasar}</td>
                    <td style={{ padding: "15px 0", textAlign: "center" }}>
                      <button type="button" className="btn btn-sm border-0" data-bs-toggle="modal" data-bs-target="#modalEditDataSupplierDimanajemenDataSupplier" style={{ backgroundColor: "#E6FDF4", color: "#00C17A", marginRight: "10px" }}>
                        <img src={logoEditManajemenGreen} alt="edit" /> Edit
                      </button>
                      <button type="button" className="btn btn-sm border-0" style={{ backgroundColor: "#F2F4FA", fontWeight: "500" }}>
                        Log
                      </button>
                    </td>
                  </tr>
                ))}

                {cardContents.every((item) => !item.namaBarang && !item.kodeBarang && !item.kategori && !item.stok && !item.hargaJual && !item.hargaDasar) && (
                  <td className="text-center ps-0 align-middle" colSpan={7} style={{ height: "calc(100vh - 305px)" }}>
                    <img src={imageNoData} />
                    <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>
                      Data tidak ditemukan
                    </p>
                  </td>
                )}
              </tbody>
            </table>
          </div>
          {/* <PaginationFix/> */}
        </div>
      </div>
      <EditStokBarang />
    </Layout>
  );
}

export default StockBarang;
