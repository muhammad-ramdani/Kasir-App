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
                    {/* <table>
                        <tr style={{ padding: "22px 31px" }}>
                            <th className="ps-0">Nama</th>
                            <th className="ps-0">Email</th>
                            <th className="ps-0">No Telepon</th>
                            <th className="ps-0">Alamat</th>
                            <th className="ps-0">Point</th>
                            <th className="ps-0">Kode</th>
                            <th className="ps-0">Aksi</th>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr></tr>
                    </table> */}
                    <table className="table">
                        <thead className="">
                            <tr style={{  }}>
                                <th className="" style={{ padding: "22px 0px 22px 31px", backgroundColor: "#ECEFF8" }}>Nama</th>
                                <th className="" style={{ padding: "22px 0px 22px 31px" }}>Email</th>
                                <th className="" style={{ padding: "22px 0px 22px 31px" }}>No Telepon</th>
                                <th className="" style={{ padding: "22px 0px 22px 31px" }}>Alamat</th>
                                <th className="" style={{ padding: "22px 0px 22px 31px" }}>Point</th>
                                <th className="" style={{ padding: "22px 0px 22px 31px" }}>Kode</th>
                                <th className="" style={{ padding: "22px 31px 22px 31px" }}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                                <td className="ps-0">Lorem, ipsum</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            ...
                        </tfoot>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default DataPelanggan;
