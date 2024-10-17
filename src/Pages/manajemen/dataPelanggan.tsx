import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoExportData from "../../assets/imagesAllManajemen/logo-export-data.svg";
import logoImportData from "../../assets/imagesAllManajemen/logo-import-data.svg";
import searchNormal from "../../assets/imagesManajemenDataBarang/search-normal.svg";

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

    return (
        <Layout titlePage="Data Pelanggan">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "12px" }}>
                    <div className="col-auto p-0">
                        <button type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#..." style={{ backgroundColor: "#FF0000", padding: "12px 26.45px" }}>
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
                            <img src={searchNormal} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED" }} />
                            <input
                                type="text"
                                className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-manajemen border-start-0 rounded-end-3"
                                placeholder="Cari pelanggan.."
                                style={{ borderColor: "#EDEDED", padding: "11px 12px 11px 0px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="card rounded-4" style={{ borderColor: "#EDEDED", height: "calc(100vh - 233px)", margin: "30px 0px 4px 0px" }}>
                    <div className="p-3" style={{ background: "linear-gradient(to bottom, #ECEFF8 50%, transparent 50%)" }}>
                        <table className="table">
                            <thead className="">
                                <tr className="">
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px", borderTopLeftRadius: "15px" }}>Nama</th>
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px" }}>Email</th>
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px" }}>No Telepon</th>
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px" }}>Alamat</th>
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px" }}>Point</th>
                                    <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px" }}>Kode</th>
                                    <th className="" style={{ padding: "22px 31px 22px 31px", backgroundColor: "#ECEFF8", borderBottom: "0px", borderTopRightRadius: "15px" }}>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 0px 22px 31px" }}>Lorem, ipsum</td>
                                    <td className="" style={{ padding: "22px 31px 22px 31px" }}>Lorem, ipsum</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DataPelanggan;
