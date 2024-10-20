import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoExportData from "../../assets/imagesAllManajemen/logo-export-data.svg";
import logoImportData from "../../assets/imagesAllManajemen/logo-import-data.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoEditManajemenGreen from "../../assets/imagesAllManajemen/logo-edit-manajemen-green.svg";
import logoHapusManajemenRed from "../../assets/imagesAllManajemen/logo-hapus-manajemen-red.svg";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";
import logoTambahDipopupTambahManajemenBlack22 from "../../assets/imagesAllManajemen/logo-tambah-di-popup-tambah-manajemen-black-22.svg";
import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";

function DataPelanggan() {
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
            namaPelangganDimanajemenDataPelanggan: "Irfan Satya",
            emailDimanajemenDataPelanggan: "irfansatya75@gmail.com",
            noTeleponDimanajemenDataPelanggan: "081328639415",
            alamatDimanajemenDataPelanggan: "Jl. D.I. Pandjaitan No. 128, Purwokerto",
            pointDimanajemenDataPelanggan: "0",
            kodeDimanajemenDataPelanggan: "069751",
        },
    ];

    return (
        <Layout titlePage="Data Pelanggan">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "12px" }}>
                    <div className="col-auto p-0">
                        <button type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#modalTambahPelangganDimanajemenDataPelanggan" style={{ backgroundColor: "#FF0000", padding: "12px 26.45px" }}>
                            + Tambah Pelanggan
                        </button>
                    </div>
                    <div className="col-auto p-0">
                        <button type="button" className="btn focus-ring-none-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 27.66px" }}>
                            <img src={logoExportData} style={{ marginTop: "-4px", marginRight: "10px" }} />Export Data
                        </button>
                    </div>
                    <div className="col-auto p-0">
                        <button type="button" className="btn focus-ring-none-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 25.41px" }}>
                            <img src={logoImportData} style={{ marginTop: "-4px", marginRight: "10px" }} />Import Data
                        </button>
                    </div>
                    <div className="col-auto p-0 ms-auto">
                        <div className="input-group flex-nowrap mt-0" style={{ width: "350px" }}>
                            <img src={searchNormalManajemen} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED" }} />
                            <input
                                type="text"
                                className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-color-8E8E8E-manajemen border-start-0 rounded-end-3"
                                placeholder="Cari pelanggan.."
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
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopLeftRadius: "15px" }}>Nama</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Email</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>No Telepon</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Alamat</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Point</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Kode</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopRightRadius: "15px" }} scope="col-auto">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardContents.map((content, index) => (
                                    content.namaPelangganDimanajemenDataPelanggan || content.emailDimanajemenDataPelanggan || content.noTeleponDimanajemenDataPelanggan || content.alamatDimanajemenDataPelanggan || content.pointDimanajemenDataPelanggan || content.kodeDimanajemenDataPelanggan ? (
                                        <tr key={index}>
                                            {content.namaPelangganDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.namaPelangganDimanajemenDataPelanggan}</td>}
                                            {content.emailDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.emailDimanajemenDataPelanggan}</td>}
                                            {content.noTeleponDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.noTeleponDimanajemenDataPelanggan}</td>}
                                            {content.alamatDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.alamatDimanajemenDataPelanggan}</td>}
                                            {content.pointDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.pointDimanajemenDataPelanggan}</td>}
                                            {content.kodeDimanajemenDataPelanggan && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.kodeDimanajemenDataPelanggan}</td>}
                                            <td className="align-middle" style={{ padding: "15px 0px", color: "#646464", whiteSpace: "nowrap", width: "1%" }}>
                                                <button type="button" className="btn border-0 rounded-3 fw-medium" style={{ fontSize: "14px", color: "#00C17A", backgroundColor: "#E6FDF4", padding: "7px 11.641px" }} data-bs-toggle="modal" data-bs-target="#modalEditDataPelangganDimanajemenDataPelanggan">
                                                    <img src={logoEditManajemenGreen} className="me-2" />
                                                    <span>Edit</span>
                                                </button>
                                                <button type="button" className="btn border-0 rounded-3" style={{ backgroundColor: "#FFE6E6", padding: "5.5px 8.5px", marginLeft: "10px" }} data-bs-toggle="modal" data-bs-target="#modalHapusPelangganDimanajemenDataPelanggan">
                                                    <img src={logoHapusManajemenRed} />
                                                </button>
                                            </td>
                                        </tr>
                                    ) : null
                                ))}

                                {cardContents.every(content => !content.namaPelangganDimanajemenDataPelanggan && !content.emailDimanajemenDataPelanggan && !content.noTeleponDimanajemenDataPelanggan && !content.alamatDimanajemenDataPelanggan && !content.pointDimanajemenDataPelanggan && !content.kodeDimanajemenDataPelanggan) &&
                                    <td className="text-center ps-0 align-middle" colSpan={7} style={{ height: "calc(100vh - 305px)" }}>
                                        <img src={imageNoData} />
                                        <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>Data tidak ditemukan</p>
                                    </td>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal Tambah Pelanggan Dimanajemen Data Pelanggan */}
            <div className="modal fade" id="modalTambahPelangganDimanajemenDataPelanggan" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ width: 605 }}>
                    <div className="modal-content shadow rounded-4" style={{ width: 605 }}>
                        <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                            <img src={logoTambahDipopupTambahManajemenBlack22} className="me-2" />
                            <span className="fw-medium" style={{ fontSize: 18 }}>
                                Tambah Pelanggan
                            </span>
                            <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNamaLengkapPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNamaLengkapPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukan nama.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
                            </div>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNoTeleponPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>No Telepon</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNoTeleponPelangganDimanajemenDataPelanggan"
                                    placeholder="000 000 000"
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
                            </div>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputAlamatPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Alamat</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputAlamatPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukkan alamat.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
                            </div>
                            <div>
                                <label htmlFor="inputEmailPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Email (Opsional)</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputEmailPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukkan email.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                />
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
            {/* Akhir --- Modal Tambah Pelanggan Dimanajemen Data Pelanggan */}

            {/* Modal Edit Data Pelanggan Dimanajemen Data Pelanggan */}
            <div className="modal fade" id="modalEditDataPelangganDimanajemenDataPelanggan" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ width: 605 }}>
                    <div className="modal-content shadow rounded-4" style={{ width: 605 }}>
                        <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                            <img src={logoEditManajemenDark22} className="me-2" />
                            <span className="fw-medium" style={{ fontSize: 18 }}>
                                Edit Data Pelanggan
                            </span>
                            <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNamaLengkapPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNamaLengkapPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukan nama.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    value="Irfan Satya"
                                />
                            </div>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputNoTeleponPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>No Telepon</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputNoTeleponPelangganDimanajemenDataPelanggan"
                                    placeholder="000 000 000"
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    value="081328639415"
                                />
                            </div>
                            <div style={{ marginBottom: 17 }}>
                                <label htmlFor="inputAlamatPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Alamat</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputAlamatPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukkan alamat.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    value="Jl D.I. Pandjaitan No. 128, Purwokerto"
                                />
                            </div>
                            <div>
                                <label htmlFor="inputEmailPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Email (Opsional)</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                    id="inputEmailPelangganDimanajemenDataPelanggan"
                                    placeholder="Masukkan email.."
                                    style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    value="irfansatya75@gmail.com"
                                />
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
            {/* Akhir --- Modal Edit Data Pelanggan Dimanajemen Data Pelanggan */}

            {/* Modal Hapus Pelanggan Dimanajemen Data Pelanggan */}
            <div className="modal fade" id="modalHapusPelangganDimanajemenDataPelanggan" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" style={{ width: 473 }}>
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body" style={{ padding: 23 }}>
                            Apakah anda yakin ingin menghapus pelanggan ini?
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
            {/* Akhir --- Modal Hapus Pelanggan Dimanajemen Data Pelanggan */}
        </Layout>
    );
}

export default DataPelanggan;
