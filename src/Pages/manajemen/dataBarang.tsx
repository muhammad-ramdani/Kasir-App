import { SetStateAction, useState } from "react";
import './styleManajemenDataBarang.css';
import "./styleAllManajemen.css";
import chitato from "../../assets/imagesManajemenDataBarang/chitato.png";
import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";
import logoEditRincianBarangWhite from "../../assets/imagesManajemenDataBarang/logo-edit-rincian-barang-white.svg";
import logoEditRincianBarang from "../../assets/imagesManajemenDataBarang/logo-edit-rincian-barang.svg";
import logoHapusBarangDirincianBarang from "../../assets/imagesManajemenDataBarang/logo-hapus-barang-dirincian-barang.svg";
import logoTambahDipopupTambahManajemenBlack22 from "../../assets/imagesAllManajemen/logo-tambah-di-popup-tambah-manajemen-black-22.svg";
import noImagesForTambahBarang from "../../assets/imagesManajemenDataBarang/no-images-for-tambah-barang.png";
import searchNormal from "../../assets/imagesManajemenDataBarang/search-normal.svg";
import logoFilterDropdownManajemen from "../../assets/imagesAllManajemen/logo-filter-dropdown-manajemen.svg";
import tidakAdaBarang from "../../assets/imagesManajemenDataBarang/tidak-ada-barang.svg";
import tisuPaseo from "../../assets/imagesManajemenDataBarang/tisu-paseo.png";
import Layout from "../../Layout/Layout";
import React from "react";

function DataBarang() {

    // Contoh data
    const items = [
        {
            id: "000001",
            name: "Chitato (Snack)",
            price: { current: 5000, original: 8000 },
            stock: 100,
            image: chitato,
            category: "Snack",
            created_at: new Date("2024-11-20T10:00:00"), // Contoh tanggal
        },
        {
            id: "000002",
            name: "Chitato (Alat Rumah Tangga)",
            price: { current: 6000, original: 9000 },
            stock: 70,
            image: chitato,
            category: "Alat Rumah Tangga",
            created_at: new Date("2024-11-22T15:00:00"), // Contoh tanggal
        },
    ];
    // End - Contoh data

    // State dan Fungsi Filter & Search
    const [activeCategory, setActiveCategory] = React.useState("Semua");

    const [searchQuery, setSearchQuery] = React.useState("");

    const filteredItems = items.filter((item) => {
        const searchableContent = `
        ${item.name.toLowerCase()} 
        ${item.id.toLowerCase()} 
        ${item.price.current.toString()} 
        ${item.price.original.toString()} 
        ${item.stock.toString()} 
        ${item.category.toLowerCase()}
    `;
        return (
            (activeCategory === "Semua" || item.category === activeCategory) &&
            searchableContent.includes(searchQuery.toLowerCase())
        );
    });

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const categories = ["Semua", ...Array.from(new Set(items.map(item => item.category)))];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    // End - State dan Fungsi Filter & Search

    // State dan Fungsi Sort dropdown
    const [sortCriteria, setSortCriteria] = React.useState<string | null>(null);

    const handleSort = (criteria: string) => {
        setSortCriteria(criteria);
    };

    const sortedItems = React.useMemo(() => {
        if (!sortCriteria) return filteredItems;

        const itemsToSort = [...filteredItems]; // Copy array untuk menjaga immutability

        switch (sortCriteria) {
            case "Barang":
                return itemsToSort.sort((a, b) => a.name.localeCompare(b.name));
            case "Kode":
                return itemsToSort.sort((a, b) => a.id.localeCompare(b.id));
            case "Harga jual":
                return itemsToSort.sort((a, b) => a.price.current - b.price.current);
            case "Stok":
                return itemsToSort.sort((a, b) => a.stock - b.stock);
            case "Produk terbaru":
                return itemsToSort.sort(
                    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );
            default:
                return itemsToSort;
        }
    }, [sortCriteria, filteredItems]);
    // End - State dan Fungsi Sort dropdown

    // State dan Fungsi Card
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (id: string | null) => {
        setActiveCard(id as SetStateAction<null>);
    };
    // End - State dan Fungsi Card

    return (
        <>
            <Layout titlePage='Data Barang / Produk'>
                <div className="container py-4">
                    <div className="row g-4">
                        <div className="col">
                            <div className="card rounded-4 card-data-barang-100vh width-card-barang">
                                <div className="card-body card-body-data-barang">
                                    <div className="row">

                                        {/* ini button sort */}
                                        <div className="col-auto">
                                            <div className="dropdown me-1">
                                                {/* ini button sort dropdown */}
                                                <button type="button" className="btn btn-outline-light btn-filter-data-barang rounded-3" data-bs-toggle="dropdown" data-bs-offset="0,10" style={{ borderColor: "#E6E6E6", padding: "9.21px 9.5px" }}>
                                                    <img src={logoFilterDropdownManajemen} />
                                                </button>

                                                {/* isi dropdown */}
                                                <ul className="dropdown-menu shadow dropdown-menu-filter-data-barang" style={{ borderColor: "#E6E6E6" }}>
                                                    <li>
                                                        <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px" }} onClick={() => handleSort("Barang")}>Barang</a> {/* urutkan sesuai alphabet dari A-Z */}
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px" }} onClick={() => handleSort("Kode")}>Kode</a> {/* urutkan mulai dari angka terkecil */}
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px" }} onClick={() => handleSort("Harga jual")}>Harga jual</a> {/* urutkan mulai dari harga terendah */}
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px" }} onClick={() => handleSort("Stok")}>Stok</a> {/* urutkan mualai dari stok paling sedikit */}
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px" }} onClick={() => handleSort("Produk terbaru")}>Produk terbaru</a> {/* urutkan mulai dari produk terbaru atau baru di tambahkan */}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ini input search */}
                                        <div className="col ps-0">
                                            <div className="input-group flex-nowrap mt-0">
                                                <img src={searchNormal} className="input-group-text bg-white rounded-start-3" style={{ maxWidth: "46px" }} />
                                                <input type="text" className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-color-8E8E8E-manajemen border border-start-0 rounded-end-3" placeholder="Cari barang.." style={{ padding: "9.5px 12px 9.5px 0px" }} value={searchQuery} onChange={handleSearchChange} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ketika content kosong */}
                                    {filteredItems.length === 0 && (
                                        <div className="content-fill-manajemen-data-barang-tidak-ada">
                                            <div className="text-center position-absolute top-50 start-50 translate-middle w-100 px-3">
                                                <img src={tidakAdaBarang} />
                                                <p className="text-tidak-ada-barang fw-medium mb-0">Tidak ada barang</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* ketika content terisi */}
                                    {sortedItems.length > 0 && (
                                        <div>
                                            {/* Filter Kategori menggunakan button */}
                                            <div style={{ margin: "20px 0 20px 0" }}>
                                                {categories.map((category, index) => (
                                                    <button key={index} type="button" className={`col-12 col-lg-auto btn rounded-3 ${category === activeCategory ? "button-filter-kategori-barang-active" : "button-filter-kategori-barang"}`} onClick={() => handleCategoryClick(category)}>
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Daftar Barang */}
                                            <div className="content-fill-manajemen-data-barang overflow-auto-custom-card-manajemen overflow-auto">
                                                {sortedItems.map((item) => (
                                                    <div key={item.id} className="card rounded-4 mb-3" style={{ border: activeCard === item.id ? "1px solid #FF0000" : "", cursor: "pointer", }} onClick={() => handleCardClick(item.id)}>
                                                        <div className="row m-0">
                                                            <div className="col-auto p-0">
                                                                <img src={item.image} className="images-card-barang" style={{ maxWidth: "78px", minWidth: "78px", maxHeight: "81px", minHeight: "81px" }} />
                                                            </div>
                                                            <div className="col p-0">
                                                                <div className="card-body ps-0">
                                                                    <div className="row">
                                                                        <div className="col-12 col-lg">
                                                                            <span className="fw-medium">{item.name}</span>
                                                                            <br />
                                                                            <span className="small" style={{ color: "#646464" }}>{item.id}</span>
                                                                        </div>
                                                                        <div className="col-12 col-lg-auto text-end">
                                                                            <span className="fw-medium" style={{ color: "#FF0000" }}>{item.stock}</span>
                                                                            <br />
                                                                            <div style={{ color: "#646464" }}>
                                                                                <span>Rp {item.price.current.toLocaleString()}</span>
                                                                                <span> . </span>
                                                                                <span>Rp {item.price.original.toLocaleString()}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* button tambah barang */}
                                    <button type="button" className="btn btn-tambah-data-barang fw-semibold w-100 border-0 rounded-3" data-bs-toggle="modal" data-bs-target="#modalTambahBarangDicardDataBarang">
                                        + Tambah Barang
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card Konten Rincian Barang */}
                        <div className="col">
                            <div className="card rounded-4 card-data-barang-100vh">
                                {/* card-body ketika tidak memilih rincian */}
                                {/* <div class="card-body card-body-rincian-barang">
                                        <h5 class="card-title">Rincian Barang :</h5>
                                        <p class="text-tidak-ada-barang-yang-dipilih fw-medium text-center position-absolute top-50 start-50 translate-middle w-100 px-3">Tidak ada barang yang dipilih</p>
                                    </div> */}
                                {/* end | card-body ketika tidak memilih rincian */}
                                
                                {/* card-body ketika memilih rincian */}
                                <div className="card-body card-body-rincian-barang">
                                    <div className="row">
                                        <div className="col-12 col-lg">
                                            <h5 className="card-title">Rincian Barang :</h5>
                                        </div>
                                        <div className="col-12 col-lg-auto text-center">
                                            <button type="button" className="btn button-edit-rincian-barang rounded-pill border-0" data-bs-toggle="modal" data-bs-target="#modalEditRincianDataBarang">
                                                <img src={logoEditRincianBarang} className="me-2" />
                                                <span className="small fw-medium">Edit rincian</span>
                                            </button>
                                            <button type="button" className="btn button-hapus-barang-dirincian-barang rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#modalHapusRincianBarang">
                                                <img src={logoHapusBarangDirincianBarang} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 15 }}>
                                        <div className="col-auto pe-0" style={{ marginRight: 30 }}>
                                            <img src={tisuPaseo} className="images-card-rincian-barang" style={{ maxWidth: 125, minWidth: 125, maxHeight: 125, minHeight: 125 }} />
                                        </div>
                                        <div className="col ps-0" style={{ display: "table" }}>
                                            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                                <p className="fw-medium mb-1" style={{ fontSize: 18 }}>
                                                    Tissue Paseo 2 Lapis 250 Lembar
                                                </p>
                                                <p className="text-secondary mb-0" style={{ fontSize: 18 }}>
                                                    000002
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-borderless mb-0 table-sm mt-3" style={{ fontSize: 15 }}>
                                        <tbody>
                                            <tr>
                                                <td>Harga Dasar</td>
                                                <td>: Rp 9.000</td>
                                            </tr>
                                            <tr>
                                                <td>Harga Jual</td>
                                                <td>: Rp 11.000</td>
                                            </tr>
                                            <tr>
                                                <td>Diskon</td>
                                                <td>: 10%</td>
                                            </tr>
                                            <tr>
                                                <td>Berat</td>
                                                <td>: 25 gram</td>
                                            </tr>
                                            <tr>
                                                <td>Kode</td>
                                                <td>: 000002</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Stok</td>
                                                <td>: 145</td>
                                            </tr>
                                            <tr>
                                                <td>Stok Minimum</td>
                                                <td>: 50</td>
                                            </tr>
                                            <tr>
                                                <td>Kategori</td>
                                                <td>: Kebutuhan Rumah Tangga</td>
                                            </tr>
                                            <tr>
                                                <td>Letak Rak</td>
                                                <td>: Rak B</td>
                                            </tr>
                                            <tr>
                                                <td>Keterangan</td>
                                                <td>: -</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal fade" id="modalHapusRincianBarang" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-hapus-barang" style={{ width: 438 }}>
                                        <div className="modal-content rounded-4 shadow">
                                            <div className="modal-body" style={{ padding: 20 }}>
                                                Apakah anda yakin ingin menghapus barang ini?
                                                <div className="text-end" style={{ marginTop: 44 }}>
                                                    <button type="button" className="btn button-batalkan-hapus-barang fw-medium" data-bs-dismiss="modal">
                                                        Batalkan
                                                    </button>
                                                    <button type="button" className="btn button-hapus-barang-lanjutan-dimodal border-0 fw-semibold rounded-3 text-white">
                                                        Hapus
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end | card-body ketika memilih rincian */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Tambah Barang */}
                <div
                    className="modal fade"
                    id="modalTambahBarangDicardDataBarang"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-scrollable" style={{ width: 605 }}>
                        <div className="modal-content shadow rounded-4 p-0" style={{ width: 605 }}>
                            <div
                                className="modal-header"
                                style={{ margin: "32px 32px 0 32px", padding: "0 0 18px 0" }}
                            >
                                <img src={logoTambahDipopupTambahManajemenBlack22} className="me-2" />
                                <span className="fw-medium" style={{ fontSize: 18 }}>
                                    Tambah Barang
                                </span>
                                <button
                                    type="button"
                                    className="btn-close focus-ring-none-manajemen"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div
                                className="modal-body overflow-auto-custom-card-manajemen"
                                style={{ padding: "20px 23px 20px 32px", margin: "0px 3px 0px 0px" }}
                            >
                                <div className="text-center mb-3">
                                    <img
                                        src={noImagesForTambahBarang}
                                        style={{ width: 100, height: 100, marginBottom: 10 }}
                                        className="border rounded-4 mt-1"
                                    />
                                    <div className="">
                                        <label
                                            htmlFor="uploadImage"
                                            className="btn btn-sm fw-medium text-white border-0 rounded-3 mt-0 mb-0"
                                            style={{ backgroundColor: "#FF0000", padding: "4.5px 20.32px" }}
                                        >
                                            <img src={logoEditRincianBarangWhite} />
                                            Ubah
                                        </label>
                                        <input
                                            type="file"
                                            id="uploadImage"
                                            accept="image/*"
                                            className="d-none"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputNamaBarang" className="form-label mt-0">
                                        Nama<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputNamaBarang"
                                        placeholder="Masukan nama.."
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mt-0">Tipe Barang</label>
                                    <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                        <option value={1}>Default</option>
                                        <option value={2}>Paket</option>
                                        <option value={3}>Multisatuan</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input form-check-input-tampilkanDiTransaksi-dan-pakaiStok rounded-2"
                                            type="checkbox"
                                            // defaultValue=""
                                            id="flexCheckTampilkanDiTransaksi"
                                            style={{ borderColor: "#FF0000" }}
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label mt-0"
                                            htmlFor="flexCheckTampilkanDiTransaksi"
                                        >
                                            Tampilkan di Transaksi
                                        </label>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input form-check-input-tampilkanDiTransaksi-dan-pakaiStok rounded-2"
                                            type="checkbox"
                                            // defaultValue=""
                                            id="flexCheckPakaiStok"
                                        />
                                        <label className="form-check-label mt-0" htmlFor="flexCheckPakaiStok">
                                            Pakai Stok
                                        </label>
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col-auto p-0" style={{ marginRight: 20 }}>
                                        <label htmlFor="inputStokBarang" className="form-label mt-0">
                                            Stok<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputStokBarang"
                                            placeholder="0"
                                            style={{ width: 193, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                        />
                                    </div>
                                    <div className="col p-0" style={{ marginRight: 10 }}>
                                        <label htmlFor="inputKodeBarang" className="form-label mt-0">
                                            Kode Barang<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputKodeBarang"
                                            placeholder="Masukkan kode"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                    <div className="col-auto p-0 align-self-end">
                                        <input
                                            type="text"
                                            className="form-control rounded-3 font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputRefreshDisabled"
                                            style={{ width: 45, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputHargaDasar" className="form-label mt-0">
                                            Harga Dasar<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputHargaDasar"
                                            placeholder="Rp 0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label htmlFor="inputHargaJual" className="form-label mt-0">
                                            Harga Jual<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputHargaJual"
                                            placeholder="Rp 0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mt-0">Kategori</label>
                                    <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                        <option value={1}>Kebutuhan Rumah Tangga</option>
                                        <option value={2}>Kebutuhan Rumah Orang</option>
                                    </select>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputBatasMinimumStok" className="form-label mt-0">
                                            Batas Minimum Stok
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputBatasMinimumStok"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label htmlFor="inputLetakRak" className="form-label mt-0">
                                            Letak Rak
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputLetakRak"
                                            placeholder="Masukkan letak"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputBeratRincianBarang" className="form-label mt-0">
                                            Berat
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputBeratRincianBarang"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label className="form-label mt-0">Satuan</label>
                                        <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                            <option value={1}>Gram</option>
                                            <option value={2}>Pcs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputDiskonHargaBarang" className="form-label mt-0">
                                            Diskon
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputDiskonHargaBarang"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 10 }} />
                                    <div className="col-auto p-0 align-self-end">
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="options-outlined-diskon-persen-atau-rp"
                                            id="radioDiskonPersenAtauRp-1"
                                            autoComplete="off"
                                            defaultChecked
                                        />
                                        <label
                                            className="btn fw-medium rounded-start-3 border-end-0 rounded-end-0 class-diskon-persen-atau-rp my-0"
                                            htmlFor="radioDiskonPersenAtauRp-1"
                                            style={{ marginRight: "-5px", padding: "9.5px 18.15px" }}
                                        >
                                            %
                                        </label>
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="options-outlined-diskon-persen-atau-rp"
                                            id="radioDiskonPersenAtauRp-2"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="btn fw-medium rounded-end-3 border-start-0 rounded-start-0 class-diskon-persen-atau-rp my-0"
                                            htmlFor="radioDiskonPersenAtauRp-2"
                                            style={{ padding: "9.5px 14.02px" }}
                                        >
                                            Rp
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="inputKeteranganBarang" className="form-label mt-0">
                                        Keterangan
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputKeteranganBarang"
                                        placeholder="Masukkan keterangan"
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    />
                                </div>
                            </div>
                            <div
                                className="modal-footer border-0"
                                style={{ padding: "25px 32px 32px 32px" }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-simpan-data-barang fw-semibold w-100 border-0 rounded-3 m-0"
                                >
                                    Tambah
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Edit Barang */}
                <div
                    className="modal fade"
                    id="modalEditRincianDataBarang"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-scrollable" style={{ width: 605 }}>
                        <div className="modal-content shadow rounded-4 p-0" style={{ width: 605 }}>
                            <div
                                className="modal-header"
                                style={{ margin: "32px 32px 0 32px", padding: "0 0 18px 0" }}
                            >
                                <img src={logoEditManajemenDark22} className="me-2" />
                                <span className="fw-medium" style={{ fontSize: 18 }}>
                                    Edit Barang
                                </span>
                                <button
                                    type="button"
                                    className="btn-close focus-ring-none-manajemen"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div
                                className="modal-body overflow-auto-custom-card-manajemen"
                                style={{ padding: "20px 23px 20px 32px", margin: "0px 3px 0px 0px" }}
                            >
                                <div className="text-center mb-3">
                                    <img
                                        src={tisuPaseo}
                                        style={{ width: 100, height: 100, marginBottom: 10 }}
                                        className="border rounded-4 mt-1"
                                    />
                                    <div className="">
                                        <label
                                            htmlFor="uploadImage"
                                            className="btn btn-sm fw-medium text-white border-0 rounded-3 mt-0 mb-0"
                                            style={{ backgroundColor: "#FF0000", padding: "4.5px 20.32px" }}
                                        >
                                            <img src={logoEditRincianBarangWhite} />
                                            Ubah
                                        </label>
                                        <input
                                            type="file"
                                            id="uploadImage"
                                            accept="image/*"
                                            className="d-none"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputNamaBarang" className="form-label mt-0">
                                        Nama<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputNamaBarang"
                                        placeholder="Masukan nama.."
                                        // value="Tissue Paseo 2 Lapis 250 Lembar"
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mt-0">Tipe Barang</label>
                                    <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                        <option value={1}>Default</option>
                                        <option value={2}>Paket</option>
                                        <option value={3}>Multisatuan</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: 20 }}>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input form-check-input-tampilkanDiTransaksi-dan-pakaiStok focus-ring-none-manajemen rounded-2"
                                            type="checkbox"
                                            // defaultValue=""
                                            id="flexCheckTampilkanDiTransaksi"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label mt-0"
                                            htmlFor="flexCheckTampilkanDiTransaksi"
                                        >
                                            Tampilkan di Transaksi
                                        </label>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input form-check-input-tampilkanDiTransaksi-dan-pakaiStok focus-ring-none-manajemen rounded-2"
                                            type="checkbox"
                                            // defaultValue=""
                                            id="flexCheckPakaiStok"
                                        />
                                        <label className="form-check-label mt-0" htmlFor="flexCheckPakaiStok">
                                            Pakai Stok
                                        </label>
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col-auto p-0" style={{ marginRight: 20 }}>
                                        <label htmlFor="inputStokBarang" className="form-label mt-0">
                                            Stok<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputStokBarang"
                                            placeholder="0"
                                            style={{ width: 193, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                        // value="145"
                                        />
                                    </div>
                                    <div className="col p-0" style={{ marginRight: 10 }}>
                                        <label htmlFor="inputKodeBarang" className="form-label mt-0">
                                            Kode Barang<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputKodeBarang"
                                            placeholder="Masukkan kode"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="000002"
                                        />
                                    </div>
                                    <div className="col-auto p-0 align-self-end">
                                        <input
                                            type="text"
                                            className="form-control rounded-3 font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputRefreshDisabled"
                                            style={{ width: 45, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputHargaDasar" className="form-label mt-0">
                                            Harga Dasar<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputHargaDasar"
                                            placeholder="Rp 0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="Rp 9.000"
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label htmlFor="inputHargaJual" className="form-label mt-0">
                                            Harga Jual<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputHargaJual"
                                            placeholder="Rp 0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="Rp 11.000"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mt-0">Kategori</label>
                                    <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                        <option value={1}>Kebutuhan Rumah Tangga</option>
                                        <option value={2}>Kebutuhan Rumah Orang</option>
                                    </select>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputBatasMinimumStok" className="form-label mt-0">
                                            Batas Minimum Stok
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputBatasMinimumStok"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="50"
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label htmlFor="inputLetakRak" className="form-label mt-0">
                                            Letak Rak
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputLetakRak"
                                            placeholder="Masukkan letak"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="Rak B"
                                        />
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputBeratRincianBarang" className="form-label mt-0">
                                            Berat
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputBeratRincianBarang"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="25"
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                    <div className="col p-0">
                                        <label className="form-label mt-0">Satuan</label>
                                        <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                            <option value={1}>Gram</option>
                                            <option value={2}>Pcs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row m-0 mb-3">
                                    <div className="col p-0">
                                        <label htmlFor="inputDiskonHargaBarang" className="form-label mt-0">
                                            Diskon
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputDiskonHargaBarang"
                                            placeholder="0"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                        // value="20"
                                        />
                                    </div>
                                    <div className="col-auto p-0" style={{ marginRight: 10 }} />
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
                                <div className="mb-2">
                                    <label htmlFor="inputKeteranganBarang" className="form-label mt-0">
                                        Keterangan
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                        id="inputKeteranganBarang"
                                        placeholder="Masukkan keterangan"
                                        style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                    // value="-"
                                    />
                                </div>
                            </div>
                            <div
                                className="modal-footer border-0"
                                style={{ padding: "25px 32px 32px 32px" }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-simpan-data-barang fw-semibold w-100 border-0 rounded-3 m-0"
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default DataBarang;
