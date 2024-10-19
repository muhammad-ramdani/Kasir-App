import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoFilterDropdownManajemen from "../../assets/imagesAllManajemen/logo-filter-dropdown-manajemen.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoHapusManajemenRed24 from "../../assets/imagesAllManajemen/logo-hapus-manajemen-red-24.svg";
import logoEditManajemenDark24 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-24.svg";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";

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
                                <button type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#..." style={{ backgroundColor: "#FF0000", padding: "10.5px 22.88px" }}>
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
                                                    <button type="button" className="btn p-0 border-0" style={{ marginRight: "25px" }}>
                                                        <img src={logoEditManajemenDark24} />
                                                    </button>
                                                    <button type="button" className="btn p-0 border-0">
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
        </Layout>
    )
}

export default DiskonBarang
