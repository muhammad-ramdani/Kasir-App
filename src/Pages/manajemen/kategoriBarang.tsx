import "./styleAllManajemen.css";
import searchNormal from "../../assets/imagesManajemenDataBarang/search-normal.svg";
import tidakAdaBarang from "../../assets/imagesManajemenDataBarang/tidak-ada-barang.svg";
import gambarChitato from "../../assets/imagesAllManajemen/chitato.png";
import gambarGoodDay from "../../assets/imagesAllManajemen/good-day.png";
import gambarIndomie from "../../assets/imagesAllManajemen/indomie.png";
import gambarJetz from "../../assets/imagesAllManajemen/jetz.png";
import gambarPotabee from "../../assets/imagesAllManajemen/potabee.png";
import logoTambahBarangDimodal from "../../assets/imagesManajemenDataBarang/logo-tambah-barang-dimodal.svg";
import Layout from "../../Layout/Layout";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function KategoriBarang() {
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
            namaKategori: "Kebutuhan Rumah Tangga",
            sisa: "3500",
            modal: "9.000.000",
        },
        {
            namaKategori: "Makanan dan Minuman",
            sisa: "1400",
            modal: "2.130.000",
        },
        {
            namaKategori: "Elektronik",
            sisa: "2000",
            modal: "4.800.000",
        },
        {
            namaKategori: "Peralatan Tulis dan Kantor",
            sisa: "5200",
            modal: "5.030.000",
        },
    ];

    const cardContents2 = [
        {
            gambarBarang: gambarChitato,
            namaBarangProduk: "Chitato Rasa Sapi Panggang",
            kodeBarang: "000001",
            stokBarang: "100",
            hargaDasar: "5.000",
            hargaJual: "8.000",
        },
        {
            gambarBarang: gambarJetz,
            namaBarangProduk: "Jetz Makanan Ringan Choco Viesta ",
            kodeBarang: "000002",
            stokBarang: "200",
            hargaDasar: "6.000",
            hargaJual: "9.000",
        },
        {
            gambarBarang: gambarGoodDay,
            namaBarangProduk: "Good Day Originale Cappuccino",
            kodeBarang: "000003",
            stokBarang: "350",
            hargaDasar: "7.000",
            hargaJual: "9.000",
        },
        {
            gambarBarang: gambarPotabee,
            namaBarangProduk: "Potabee Potato Chips Seaweed",
            kodeBarang: "000004",
            stokBarang: "104",
            hargaDasar: "5.000",
            hargaJual: "8.000",
        },
        {
            gambarBarang: gambarIndomie,
            namaBarangProduk: "Indomie Goreng Rasa Rendang",
            kodeBarang: "000005",
            stokBarang: "520",
            hargaDasar: "5.000",
            hargaJual: "8.000",
        },
    ];

    return (
        <Layout titlePage="Kategori Barang">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "30px" }}>
                    <div className="col p-0">
                        <div className="card rounded-4 height-calc-100vh-151px">
                            <div className="card-header border-0 bg-white rounded-top-4" style={{ padding: "23px 23px 30px 23px" }}>
                                <div className="input-group flex-nowrap mt-0">
                                    <img
                                        src={searchNormal}
                                        className="input-group-text bg-white rounded-start-3"
                                    />
                                    <input
                                        type="text"
                                        className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-color-8E8E8E-manajemen border border-start-0 rounded-end-3"
                                        placeholder="Cari kategori.."
                                        style={{ padding: "9.5px 12px 9.5px 0px" }}
                                    />
                                </div>
                            </div>
                            <div
                                className="card-body overflow-auto overflow-auto-custom-card-manajemen"
                                style={{ padding: "0px 20px 0px 23px", height: "calc(100vh - 351px)", marginRight: 3 }}
                            >
                                {cardContents.map((content, index) => (
                                    content.namaKategori || content.sisa || content.modal ? (
                                        <div key={index} className="card rounded-4" style={{ marginBottom: "15px" }}>
                                            <div className="card-body" style={{ padding: "14px 21px" }}>
                                                <div className="row m-0">
                                                    <div className="col p-0">
                                                        {content.namaKategori && <p className="fw-medium m-0" style={{ padding: "0 0 5px 0" }}>{content.namaKategori}</p>}
                                                        {content.sisa && <p className="m-0 small" style={{ color: "#FF0000" }}>Sisa : {content.sisa}</p>}
                                                    </div>
                                                    <div className="col-5 p-0 align-self-end">
                                                        {content.modal && <p className="m-0 small" style={{ color: "#646464" }}>Modal : Rp {content.modal}</p>}
                                                    </div>
                                                    <div className="col-auto p-0 align-self-center">
                                                        <button type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalHapusKategoriNamaBarang">
                                                            <FontAwesomeIcon icon={faTrash} size="xl" width={24} style={{ color: "#252525", }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                ))}

                                {cardContents.every(content => !content.namaKategori && !content.sisa && !content.modal) &&
                                    <div className="text-center position-absolute top-50 start-50 translate-middle">
                                        <img src={tidakAdaBarang} />
                                        <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>Tidak ada kategori</p>
                                    </div>
                                }
                            </div>
                            <div className="card-footer border-0 bg-white rounded-bottom-4" style={{ padding: "30px 23px 23px 23px" }}>
                                <button
                                    type="button"
                                    className="btn fw-semibold w-100 border-0 rounded-3 text-white"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalTambahNamaKategoriBarangDimanajemen"
                                    style={{ backgroundColor: "#FF0000", fontSize: "18px", padding: "11.5px 0px" }}
                                >
                                    + Tambah Kategori
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="card rounded-4 height-calc-100vh-151px">
                            <div className="card-header border-0 bg-white rounded-top-4" style={{ padding: "23px 23px 40px 23px" }}>
                                <p className="fs-5 fw-medium mb-0">Barang / Produk :</p>
                            </div>
                            <div
                                className="card-body overflow-auto overflow-auto-custom-card-manajemen"
                                style={{ padding: "0px 20px 0px 23px", marginBottom: 23, height: "calc(100vh - 351px)", marginRight: 3 }}
                            >
                                {cardContents2.map((content, index) => (
                                    content.gambarBarang || content.namaBarangProduk || content.kodeBarang || content.stokBarang || content.hargaDasar || content.hargaJual ? (
                                        <div key={index} className="row mx-0 mt-0 border-bottom" style={{ marginBottom: "20px", paddingBottom: "15px" }}>
                                            <div className="col-auto p-0">
                                                {content.gambarBarang && <img src={content.gambarBarang} width={55} height={55} style={{ marginRight: "15px" }} />}
                                            </div>
                                            <div className="col p-0">
                                                {content.namaBarangProduk && <p className="fw-medium m-0" style={{ padding: "0 0 5px 0" }}>{content.namaBarangProduk}</p>}
                                                {content.kodeBarang && <p className="m-0" style={{ color: "#646464", fontSize: "13px" }}>{content.kodeBarang}</p>}
                                            </div>
                                            <div className="col-auto p-0 text-end">
                                                {content.stokBarang && <p className="fw-medium m-0" style={{ padding: "0 0 5px 0", color: "#FF0000" }}>{content.stokBarang}</p>}
                                                {content.hargaDasar && content.hargaJual && <p className="m-0" style={{ color: "#646464", fontSize: "13px" }}>Rp {content.hargaDasar} . Rp {content.hargaJual}</p>}
                                            </div>
                                        </div>
                                    ) : null
                                ))}

                                {cardContents2.every(content => !content.gambarBarang && !content.namaBarangProduk && !content.kodeBarang && !content.stokBarang && !content.hargaDasar && !content.hargaJual) &&
                                    <div className="text-center position-absolute top-50 start-50 translate-middle">
                                        <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>Tidak ada barang / produk</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Tambah Kategori */}
            <div className="modal fade" id="modalTambahNamaKategoriBarangDimanajemen" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ width: 605 }}>
                    <div className="modal-content shadow rounded-4 p-0" style={{ width: 605 }}>
                        <div className="modal-header" style={{ margin: "32px 32px 0 32px", padding: "0 0 18px 0" }}>
                            <img src={logoTambahBarangDimodal} className="me-2" />
                            <span className="fw-medium" style={{ fontSize: 18 }}>
                                Tambah Kategori
                            </span>
                            <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 32px 0px 32px", margin: "0px 3px 0px 0px" }}>
                            <div>
                                <label htmlFor="inputNamaKategoriBarang" className="form-label mt-0">Nama Kategori</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNamaKategoriBarang"
                                    placeholder="Masukan nama.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer border-0" style={{ padding: "50px 32px 32px 32px" }}>
                            <button type="submit" className="btn fw-semibold w-100 border-0 rounded-3 m-0 text-white p-0" style={{ backgroundColor: "#FF0000", fontSize: "18px", height: "50px" }}>
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Hapus Kategori */}
            <div className="modal fade" id="modalHapusKategoriNamaBarang" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-hapus-barang" style={{ width: 450 }}>
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body" style={{ padding: 23 }}>
                            Apakah anda yakin ingin menghapus kategori ini?
                            <div className="text-end" style={{ marginTop: 44 }}>
                                <button type="button" className="btn border-0 fw-medium me-2" data-bs-dismiss="modal">
                                    Batalkan
                                </button>
                                <button type="button" className="btn border-0 fw-semibold rounded-3 text-white" style={{ backgroundColor: "#FF0000", padding: "8px 23.78px" }}>
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default KategoriBarang
