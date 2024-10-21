import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoFilterDropdownManajemen from "../../assets/imagesAllManajemen/logo-filter-dropdown-manajemen.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoHapusManajemenRed24 from "../../assets/imagesAllManajemen/logo-hapus-manajemen-red-24.svg";
import logoEditManajemenDark24 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-24.svg";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";
import logoTambahDipopupTambahManajemenBlack22 from "../../assets/imagesAllManajemen/logo-tambah-di-popup-tambah-manajemen-black-22.svg";
import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";

function DiskonBarang() {
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
            namaDiskonDimanajemenDiskonBarang: "Diskon Ramadhan",
            persentaseDiskonDimanajemenDiskonBarang: "20%",
        },
    ];

    return (
        <Layout titlePage="Diskon Barang">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="card rounded-4" style={{ borderColor: "#EDEDED", height: "calc(100vh - 154px)", margin: "0px 0px 3px 0px" }}>
                    <div className="card-header bg-white border-0 rounded-4" style={{ padding: "23px 23px 30px 23px" }}>
                        <div className="row m-0" style={{ columnGap: "15px" }}>
                            <div className="col-auto p-0">
                                <div className="dropdown">
                                    <button
                                        type="button"
                                        className="btn rounded-3"
                                        data-bs-toggle="dropdown"
                                        data-bs-offset="0,10"
                                        style={{ borderColor: "#E6E6E6", padding: "9.2px 9.5px" }}
                                    >
                                        <img src={logoFilterDropdownManajemen} />
                                    </button>
                                    <ul className="dropdown-menu shadow" style={{ borderColor: "#E6E6E6", padding: "6px 0px" }}>
                                        <li>
                                            <a className="dropdown-item" href="#" style={{ padding: "10px 21px" }}>
                                                Nama
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" style={{ padding: "10px 21px" }}>
                                                Diskon
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div className="input-group flex-nowrap mt-0" style={{ maxWidth: "593px" }}>
                                    <img src={searchNormalManajemen} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED" }} />
                                    <input
                                        type="text"
                                        className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-color-8E8E8E-manajemen border-start-0 rounded-end-3"
                                        placeholder="Cari diskon.."
                                        style={{ borderColor: "#EDEDED", padding: "9.5px 12px 9.5px 0px" }}
                                    />
                                </div>
                            </div>
                            <div className="col-auto p-0">
                                <button type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#modalTambahPotonganAtauDiskonDimanajemenDiskonBarang" style={{ backgroundColor: "#FF0000", padding: "10.5px 22.88px" }}>
                                    + Tambah Potongan/Diskon
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body overflow-auto overflow-auto-custom-card-manajemen" style={{ padding: "0px 20px 0px 23px", margin: "0px 3px 23px 0px" }}>
                        {cardContents.map((content, index) => (
                            content.namaDiskonDimanajemenDiskonBarang || content.persentaseDiskonDimanajemenDiskonBarang ? (
                                <div key={index} className="card rounded-4" style={{ marginBottom: "15px" }}>
                                    <div className="row m-0 d-flex align-items-stretch">
                                        <div className="col-auto fs-5 fw-bold text-white d-flex align-items-center justify-content-center rounded-start-4" style={{ padding: "0px 16.3px", backgroundColor: "#FF0000" }}>
                                            %
                                        </div>
                                        <div className="col" style={{ padding: "15px 20px" }}>
                                            <div className="row m-0">
                                                <div className="col p-0">
                                                    {content.namaDiskonDimanajemenDiskonBarang && <p className="fw-medium" style={{ marginBottom: "5px" }}>{content.namaDiskonDimanajemenDiskonBarang}</p>}
                                                    {content.persentaseDiskonDimanajemenDiskonBarang && <p className="m-0 fw-medium" style={{ color: "#FF0000" }}>{content.persentaseDiskonDimanajemenDiskonBarang}</p>}
                                                </div>
                                                <div className="col-auto p-0 d-flex align-items-center">
                                                    <button type="button" className="btn p-0 border-0" style={{ marginRight: "25px" }} data-bs-toggle="modal" data-bs-target="#modalEditPotonganAtauDiskonDimanajemenDiskonBarang">
                                                        <img src={logoEditManajemenDark24} />
                                                    </button>
                                                    <button type="button" className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#modalHapusPoptonganAtauDiskonDimanajemenDiskonBarang">
                                                        <img src={logoHapusManajemenRed24} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))}

                        {cardContents.every(content => !content.namaDiskonDimanajemenDiskonBarang && !content.persentaseDiskonDimanajemenDiskonBarang) &&
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                <div className="text-center">
                                    <img src={imageNoData} />
                                    <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>Tidak ada diskon yang terdaftar</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {/* Modal Tambah Potongan / Diskon Dimanajemen Diskon Barang */}
            <div className="modal fade" id="modalTambahPotonganAtauDiskonDimanajemenDiskonBarang" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ width: 605 }}>
                    <div className="modal-content shadow rounded-4" style={{ width: 605 }}>
                        <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                            <img src={logoTambahDipopupTambahManajemenBlack22} className="me-2" />
                            <span className="fw-medium" style={{ fontSize: 18 }}>
                                Tambah Potongan / Diskon
                            </span>
                            <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNamaDiskonDimanajemenDiskonBarang" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Nama Diskon</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNamaDiskonDimanajemenDiskonBarang"
                                    placeholder="Masukan nama.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
                            </div>
                            <div className="row m-0" style={{ columnGap: "10px" }}>
                                <div className="col p-0">
                                    <label htmlFor="inputJumlahPersentaseDiskonAtauPotonganBarang" className="form-label mt-0">
                                        Jumlah Diskon
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputJumlahPersentaseDiskonAtauPotonganBarang"
                                        placeholder="0"
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    />
                                </div>
                                <div className="col-auto p-0 align-self-end">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="options-outlined-diskon-persen-atau-rp-tambah"
                                        id="radioDiskonPersenAtauRp-tambah-1"
                                        autoComplete="off"
                                        defaultChecked
                                    />
                                    <label
                                        className="btn fw-medium rounded-start-3 border-end-0 rounded-end-0 class-diskon-persen-atau-rp my-0"
                                        htmlFor="radioDiskonPersenAtauRp-tambah-1"
                                        style={{ marginRight: "-5px", padding: "9.5px 18.15px" }}
                                    >
                                        %
                                    </label>
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="options-outlined-diskon-persen-atau-rp-tambah"
                                        id="radioDiskonPersenAtauRp-tambah-2"
                                        autoComplete="off"
                                    />
                                    <label
                                        className="btn fw-medium rounded-end-3 border-start-0 rounded-start-0 class-diskon-persen-atau-rp my-0"
                                        htmlFor="radioDiskonPersenAtauRp-tambah-2"
                                        style={{ padding: "9.5px 14.02px" }}
                                    >
                                        Rp
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0" style={{ padding: "50px 32px 27px 32px" }}>
                            <button type="submit" className="btn fw-semibold w-100 border-0 rounded-3 m-0 text-white p-0" style={{ backgroundColor: "#FF0000", fontSize: "18px", height: "50px" }}>
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Akhir --- Modal Tambah Potongan / Diskon Dimanajemen Diskon Barang */}

            {/* Modal Edit Potongan / Diskon Dimanajemen Diskon Barang */}
            <div className="modal fade" id="modalEditPotonganAtauDiskonDimanajemenDiskonBarang" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ width: 605 }}>
                    <div className="modal-content shadow rounded-4" style={{ width: 605 }}>
                        <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                            <img src={logoEditManajemenDark22} className="me-2" />
                            <span className="fw-medium" style={{ fontSize: 18 }}>
                                Edit Potongan / Diskon
                            </span>
                            <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNamaDiskonDimanajemenDiskonBarang" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Nama Diskon</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNamaDiskonDimanajemenDiskonBarang"
                                    placeholder="Masukan nama.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    value="Diskon Ramadhan"
                                />
                            </div>
                            <div className="row m-0" style={{ columnGap: "10px" }}>
                                <div className="col p-0">
                                    <label htmlFor="inputJumlahPersentaseDiskonAtauPotonganBarang" className="form-label mt-0">
                                        Jumlah Diskon
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputJumlahPersentaseDiskonAtauPotonganBarang"
                                        placeholder="0"
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        value="20"
                                    />
                                </div>
                                <div className="col-auto p-0 align-self-end">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="options-outlined-diskon-persen-atau-rp-edit"
                                        id="radioDiskonPersenAtauRp-edit-1"
                                        autoComplete="off"
                                        defaultChecked
                                    />
                                    <label
                                        className="btn fw-medium rounded-start-3 border-end-0 rounded-end-0 class-diskon-persen-atau-rp my-0"
                                        htmlFor="radioDiskonPersenAtauRp-edit-1"
                                        style={{ marginRight: "-5px", padding: "9.5px 18.15px" }}
                                    >
                                        %
                                    </label>
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="options-outlined-diskon-persen-atau-rp-edit"
                                        id="radioDiskonPersenAtauRp-edit-2"
                                        autoComplete="off"
                                    />
                                    <label
                                        className="btn fw-medium rounded-end-3 border-start-0 rounded-start-0 class-diskon-persen-atau-rp my-0"
                                        htmlFor="radioDiskonPersenAtauRp-edit-2"
                                        style={{ padding: "9.5px 14.02px" }}
                                    >
                                        Rp
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0" style={{ padding: "50px 32px 27px 32px" }}>
                            <button type="submit" className="btn fw-semibold w-100 border-0 rounded-3 m-0 text-white p-0" style={{ backgroundColor: "#FF0000", fontSize: "18px", height: "50px" }}>
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Akhir --- Modal Edit Potongan / Diskon Dimanajemen Diskon Barang */}

            {/* Modal Hapus Potongan / Diskon Dimanajemen Diskon Barang */}
            <div className="modal fade" id="modalHapusPoptonganAtauDiskonDimanajemenDiskonBarang" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" style={{ width: 436 }}>
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body" style={{ padding: 23 }}>
                            Apakah anda yakin ingin menghapus diskon ini?
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
            {/* Akhir --- Modal Hapus Potongan / Diskon Dimanajemen Diskon Barang */}
        </Layout>
    )
}

export default DiskonBarang
