import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoExportData from "../../assets/imagesAllManajemen/logo-export-data.svg";
import logoImportData from "../../assets/imagesAllManajemen/logo-import-data.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoEditManajemenGreen from "../../assets/imagesAllManajemen/logo-edit-manajemen-green.svg";
import logoHapusManajemenRed from "../../assets/imagesAllManajemen/logo-hapus-manajemen-red.svg";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";

function DataSupplier() {
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
            namaSupplierDimanajemenDataSupplier: "PT Mitra Sejati",
            alamatDimanajemenDataSupplier: "Jl. D.I. Pandjaitan No. 128, Purwokerto",
            emailDimanajemenDataSupplier: "mitrasejati@gmail.com",
            noTeleponDimanajemenDataSupplier: "081328639415",
            kodeDimanajemenDataSupplier: "069751",
        },
    ];

    return (
        <Layout titlePage="Data Supplier">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "12px" }}>
                    <div className="col-auto p-0">
                        <button type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#..." style={{ backgroundColor: "#FF0000", padding: "12px 30.12px" }}>
                            + Tambah Supplier
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
                                placeholder="Cari supplier.."
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
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Alamat</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Email</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>No Telepon</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Kode</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopRightRadius: "15px" }} scope="col-auto">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardContents.map((content, index) => (
                                    content.namaSupplierDimanajemenDataSupplier || content.alamatDimanajemenDataSupplier || content.emailDimanajemenDataSupplier || content.noTeleponDimanajemenDataSupplier || content.kodeDimanajemenDataSupplier ? (
                                        <tr key={index}>
                                            {content.namaSupplierDimanajemenDataSupplier && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.namaSupplierDimanajemenDataSupplier}</td>}
                                            {content.alamatDimanajemenDataSupplier && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.alamatDimanajemenDataSupplier}</td>}
                                            {content.emailDimanajemenDataSupplier && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.emailDimanajemenDataSupplier}</td>}
                                            {content.noTeleponDimanajemenDataSupplier && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.noTeleponDimanajemenDataSupplier}</td>}
                                            {content.kodeDimanajemenDataSupplier && <td className="align-middle" style={{ padding: "15px 0px", color: "#646464" }}>{content.kodeDimanajemenDataSupplier}</td>}
                                            <td className="align-middle" style={{ padding: "15px 0px", color: "#646464", whiteSpace: "nowrap", width: "1%" }}>
                                                <button type="button" className="btn border-0 rounded-3 fw-medium" style={{ fontSize: "14px", color: "#00C17A", backgroundColor: "#E6FDF4", padding: "7px 11.641px" }}>
                                                    <img src={logoEditManajemenGreen} className="me-2" />
                                                    <span>Edit</span>
                                                </button>
                                                <button type="button" className="btn border-0 rounded-3" style={{ backgroundColor: "#FFE6E6", padding: "5.5px 8.5px", marginLeft: "10px" }}>
                                                    <img src={logoHapusManajemenRed} />
                                                </button>
                                            </td>
                                        </tr>
                                    ) : null
                                ))}

                                {cardContents.every(content => !content.namaSupplierDimanajemenDataSupplier && !content.alamatDimanajemenDataSupplier && !content.emailDimanajemenDataSupplier && !content.noTeleponDimanajemenDataSupplier && !content.kodeDimanajemenDataSupplier) &&
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
        </Layout>
    )
}

export default DataSupplier
