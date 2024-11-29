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
import apiName from "../../api/api";
import PaginationFix from "../../components/pagination-fix/paginationFix";

interface Customer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}


function DataPelanggan() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
    const [dataCustomer, setDataCustomer] = useState<Customer[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [customerToEdit, setCustomerToEdit] = useState<Customer | null>(null);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
    const [filteredData, setFilteredData] = useState<Customer[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10); // Default data per page

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    // fetching add customers
    const handleSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const requestData = {
                Name: name,
                Email: email,
                Address: address,
                Phone: phone,
            };

            console.log("Sending data:", requestData); // Debugging log

            const response = await apiName.post('/customers', requestData);

            console.log("Response from API:", response.data); // Debugging log

            // Tambahkan data baru ke state
            setDataCustomer([...dataCustomer, response.data.data]);

            alert("Data customer berhasil ditambahkan");

            // Tutup modal dan reset input
            setIsModalOpen(false);
            setName("");
            setEmail("");
            setAddress("");
            setPhone("");
        } catch (err: any) {
            console.error("Error adding customer:", err.response?.data || err.message);
            alert("Gagal menambahkan data. Silakan cek kembali.");
        }
    };


    // fetching data from api
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await apiName.get("/customers", {
                    params: {
                        limit: dataPerPage,
                        offset: (currentPage - 1) * dataPerPage,
                    },
                });

                // Ambil data dan pagination dari response sesuai struktur BE
                const { data: customerData, pagination } = response.data.data;
                setDataCustomer(customerData); // Set data pelanggan
                setTotalPages(pagination.total_pages); // Total halaman
                setCurrentPage(pagination.current_page); // Halaman saat ini
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };
        fetchingData();
    }, [currentPage, dataPerPage]); // Refetch data ketika page atau limit berubah

    // Delete Customer
    const handleSubmitDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsDeleting(true);

        if (!customerToDelete) {
            alert("Pelanggan tidak ditemukan.");
            setIsDeleting(false);
            return;
        }

        try {
            await apiName.delete(`/customers/${customerToDelete}`);
            setDataCustomer(dataCustomer.filter(customer => customer.id !== customerToDelete));
            setIsModalDelete(false);
            setCustomerToDelete(null);
        } catch (err) {
            console.error("Error deleting customer:", err);
            alert("Gagal menghapus data. Silakan coba lagi.");
        } finally {
            setIsDeleting(false);
        }
    };

    // edit customer
    // Menangani pembukaan modal edit pelanggan
    const handleEditCustomer = (customer: Customer) => {
        setCustomerToEdit(customer);
        setIsModalEditOpen(true);
    };

    // Menyimpan perubahan pelanggan
    const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!customerToEdit) return;

        try {
            // Kirim data yang diubah ke API
            const response = await apiName.put(`/customers/${customerToEdit.id}`, customerToEdit);

            // Dapatkan data yang diperbarui dari API
            const updatedCustomer = response.data.data;

            // Perbarui state dataCustomer dengan data yang diperbarui
            setDataCustomer((prevData) =>
                prevData.map((customer) =>
                    customer.id === updatedCustomer.id ? updatedCustomer : customer
                )
            );

            // Tutup modal
            setIsModalEditOpen(false);
            setCustomerToEdit(null);

            // Berikan notifikasi sukses
            alert("Data berhasil diperbarui!");
        } catch (error) {
            console.error("Error updating data:", error);
            alert("Gagal memperbarui data.");
        }
    };

    // handle search
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredData(dataCustomer);
        } else {
            const lowercasedQuery = searchQuery.toLowerCase();
            const filtered = dataCustomer.filter((customer) =>
                customer.name.toLowerCase().includes(lowercasedQuery) ||
                customer.email.toLowerCase().includes(lowercasedQuery) ||
                customer.phone.includes(lowercasedQuery) ||
                customer.address.toLowerCase().includes(lowercasedQuery)
            );
            setFilteredData(filtered);
        }
    }, [searchQuery, dataCustomer]);


    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1440);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // State untuk mendeteksi apakah mobile atau tidak
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    // Gunakan useEffect untuk memantau perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        // Tambahkan event listener untuk resize
        window.addEventListener('resize', handleResize);

        // Bersihkan event listener ketika komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout titlePage="Data Pelanggan">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "12px" }}>
                    <div className="d-grid col-12 col-sm-auto p-0" style={{ marginBottom: "10px" }}>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            type="button" className="btn focus-ring-none-manajemen border-0 text-white fw-semibold rounded-3" data-bs-toggle="modal" data-bs-target="#modalTambahPelangganDimanajemenDataPelanggan" style={{ backgroundColor: "#FF0000", padding: "12px 26.45px" }}>
                            + Tambah Pelanggan
                        </button>
                    </div>
                    <div className="d-grid col-12 col-sm-auto p-0" style={{ marginBottom: "10px" }}>
                        <button type="button" className="btn focus-ring-none-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 27.66px" }}>
                            <img src={logoExportData} style={{ marginTop: "-4px", marginRight: "10px" }} />Export Data
                        </button>
                    </div>
                    <div className="d-grid col-12 col-sm-auto p-0" style={{ marginBottom: "10px" }}>
                        <button type="button" className="btn focus-ring-none-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 25.41px" }}>
                            <img src={logoImportData} style={{ marginTop: "-4px", marginRight: "10px" }} />Import Data
                        </button>
                    </div>
                    <div className="col col-sm-auto p-0 ms-auto" style={{ marginBottom: "10px" }}>
                        <div className="input-group flex-nowrap mt-0" style={{ width: isMobile ? "100%" : "350px" }}>
                            <img src={searchNormalManajemen} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED", maxWidth: "46px" }} />
                            <input
                                type="text"
                                className="form-control focus-ring-none-manajemen font-size-16px-manajemen placeholder-font-size-16px-color-8E8E8E-manajemen border-start-0 rounded-end-3"
                                placeholder="Cari pelanggan.."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ borderColor: "#EDEDED", padding: "11px 12px 11px 0px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="card rounded-4" style={{ borderColor: "#EDEDED", height: "calc(100vh - 223px)", margin: "20px 0px 4px 0px" }}>
                    <div className="rounded-4 overflow-x-auto" style={{ background: "linear-gradient(to bottom, #ECEFF8 68px, transparent 68px)", padding: "22px 31px 22px 31px" }}>
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopLeftRadius: "15px" }}>Nama</th>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Email</th>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>No Telepon</th>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Alamat</th>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Point</th>
                                    <th className="fw-medium" style={{ padding: "0px 15px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>Kode</th>
                                    <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopRightRadius: "15px" }} scope="col-auto">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((content, index) => (
                                    content.name || content.email || content.phone || content.address ? ( // poin dan kode belum tau dari mana 
                                        <tr key={index}>
                                            {content.name && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.name}</td>}
                                            {content.email && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.email}</td>}
                                            {content.phone && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.phone}</td>}
                                            {content.address && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.address}</td>}
                                            {/* {content.pointDimanajemenDataPelanggan && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.pointDimanajemenDataPelanggan}</td>}
                                            {content.kodeDimanajemenDataPelanggan && <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}>{content.kodeDimanajemenDataPelanggan}</td>} */}
                                            <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}></td>
                                            <td className="align-middle text-nowrap" style={{ padding: "15px 15px 15px 0px", color: "#646464" }}></td>

                                            <td className="align-middle" style={{ padding: "15px 0px", color: "#646464", whiteSpace: "nowrap", width: "1%" }}>
                                                <button
                                                    onClick={() => { handleEditCustomer(content) }}
                                                    type="button" className="btn border-0 rounded-3 fw-medium" style={{ fontSize: "14px", color: "#00C17A", backgroundColor: "#E6FDF4", padding: "7px 11.641px" }} data-bs-toggle="modal" data-bs-target="#modalEditDataPelangganDimanajemenDataPelanggan">
                                                    <img src={logoEditManajemenGreen} className="me-2" />
                                                    <span>Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setCustomerToDelete(content.id);
                                                        setIsModalDelete(true)
                                                    }}
                                                    type="button" className="btn border-0 rounded-3" style={{ backgroundColor: "#FFE6E6", padding: "5.5px 8.5px", marginLeft: "10px" }} data-bs-toggle="modal" data-bs-target="#modalHapusPelangganDimanajemenDataPelanggan">
                                                    <img src={logoHapusManajemenRed} />
                                                </button>
                                            </td>
                                        </tr>
                                    ) : null
                                ))}

                                {filteredData.every(content => !content.name && !content.email && !content.phone && !content.address) &&
                                    <td className="text-center ps-0 align-middle" colSpan={7} style={{ height: "calc(100vh - 295px)" }}>
                                        <img src={imageNoData} />
                                        <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>Data tidak ditemukan</p>
                                    </td>
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* pagination */}
                    <PaginationFix
                        currentPage={currentPage}
                        totalPages={totalPages}
                        dataPerPage={dataPerPage}
                        onPageChange={(page) => setCurrentPage(page)}
                        onDataPerPageChange={(limit) => {
                            setDataPerPage(limit);
                            setCurrentPage(1); // Reset ke halaman 1 setiap kali jumlah data per halaman berubah
                        }}
                    />


                </div>
            </div>

            {/* Modal Tambah Pelanggan Dimanajemen Data Pelanggan */}
            {isModalOpen && (
                <div className="modal fade" id="modalTambahPelangganDimanajemenDataPelanggan" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ maxWidth: 605 }}>
                        <div className="modal-content shadow rounded-4" style={{ maxWidth: 605 }}>
                            <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                                <img src={logoTambahDipopupTambahManajemenBlack22} className="me-2" />
                                <span className="fw-medium" style={{ fontSize: 18 }}>
                                    Tambah Pelanggan
                                </span>
                                <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={handleSubmitAdd}>
                                <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                                    <div style={{ marginBottom: 17 }}>
                                        <label htmlFor="inputNamaLengkapPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Nama Lengkap</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputNamaLengkapPelangganDimanajemenDataPelanggan"
                                            placeholder="Masukan nama.."
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: 17 }}>
                                        <label htmlFor="inputNoTeleponPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>No Telepon</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputNoTeleponPelangganDimanajemenDataPelanggan"
                                            placeholder="081234567890"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            required
                                            onKeyDown={(e) => {
                                                const target = e.target as HTMLInputElement; // Casting to HTMLInputElement
                                                const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
                                                const isNumberKey = /^[0-9]$/.test(e.key);
                                                const isPlusAtStart = e.key === '+' && target.value === '';

                                                // Block any other character except numbers and + only at the start
                                                if (!isNumberKey && !isPlusAtStart && !allowedKeys.includes(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
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
                                            required
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmailPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>Email (Opsional)</label>
                                        <input
                                            type="email"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputEmailPelangganDimanajemenDataPelanggan"
                                            placeholder="Masukkan email.."
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer border-0" style={{ padding: "50px 32px 27px 32px" }}>
                                    <button type="submit" className="btn fw-semibold w-100 border-0 rounded-3 m-0 text-white p-0" style={{ backgroundColor: "#FF0000", fontSize: "18px", height: "50px" }}>
                                        Tambah
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* Akhir --- Modal Tambah Pelanggan Dimanajemen Data Pelanggan */}

            {/* Modal Edit Data Pelanggan Dimanajemen Data Pelanggan */}
            {isModalEditOpen && customerToEdit && (
                <div className="modal fade show" id="modalEditDataPelangganDimanajemenDataPelanggan" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" style={{ maxWidth: 605 }}>
                        <div className="modal-content shadow rounded-4" style={{ maxWidth: 605 }}>
                            <div className="modal-header" style={{ margin: "19px 32px 0 32px", padding: "0 0 18px 0" }}>
                                <img src={logoEditManajemenDark22} className="me-2" />
                                <span className="fw-medium" style={{ fontSize: 18 }}>
                                    Edit Data Pelanggan
                                </span>
                                <button
                                    onClick={() => setCustomerToEdit(null)}
                                    type="button"
                                    className="btn-close focus-ring-none-manajemen"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <form onSubmit={handleSubmitEdit}>
                                <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 29px 0px 32px", margin: "0px 3px 0px 0px" }}>
                                    <div style={{ marginBottom: 17 }}>
                                        <label htmlFor="inputNamaLengkapPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputNamaLengkapPelangganDimanajemenDataPelanggan"
                                            placeholder="Masukan nama.."
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            required
                                            value={customerToEdit.name}
                                            onChange={(e) =>
                                                setCustomerToEdit({
                                                    ...customerToEdit,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div style={{ marginBottom: 17 }}>
                                        <label htmlFor="inputNoTeleponPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>
                                            No Telepon
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputNoTeleponPelangganDimanajemenDataPelanggan"
                                            placeholder="081234567890"
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            required
                                            value={customerToEdit.phone}
                                            onChange={(e) =>
                                                setCustomerToEdit({
                                                    ...customerToEdit,
                                                    phone: e.target.value,
                                                })
                                            }
                                            onKeyDown={(e) => {
                                                const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
                                                const isNumberKey = /^[0-9]$/.test(e.key);
                                                const isPlusAtStart = e.key === "+" && customerToEdit.phone === "";

                                                if (!isNumberKey && !isPlusAtStart && !allowedKeys.includes(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: 17 }}>
                                        <label htmlFor="inputAlamatPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>
                                            Alamat
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputAlamatPelangganDimanajemenDataPelanggan"
                                            placeholder="Masukkan alamat.."
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            required
                                            value={customerToEdit.address}
                                            onChange={(e) =>
                                                setCustomerToEdit({
                                                    ...customerToEdit,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmailPelangganDimanajemenDataPelanggan" className="form-label mt-0" style={{ marginBottom: 10, color: "#252525" }}>
                                            Email (Opsional)
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                            id="inputEmailPelangganDimanajemenDataPelanggan"
                                            placeholder="Masukkan email.."
                                            style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                            value={customerToEdit.email}
                                            onChange={(e) =>
                                                setCustomerToEdit({
                                                    ...customerToEdit,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer border-0" style={{ padding: "50px 32px 27px 32px" }}>
                                    <button
                                        type="button"
                                        className="btn fw-medium w-50 border-0 rounded-3 m-0 text-black"
                                        style={{ backgroundColor: "#EDEDED", fontSize: "18px", height: "50px" }}
                                        onClick={() => setCustomerToEdit(null)}
                                    >
                                        Batalkan
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn fw-semibold w-50 border-0 rounded-3 m-0 text-white"
                                        style={{ backgroundColor: "#FF0000", fontSize: "18px", height: "50px" }}
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Akhir --- Modal Edit Data Pelanggan Dimanajemen Data Pelanggan */}

            {/* Modal Hapus Pelanggan */}
            {isModalDelete && (
                <div
                    className="modal fade show"
                    tabIndex={-1}
                    role="dialog"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Overlay manual karena modal tidak ditutup otomatis
                >
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 473 }}>
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-body" style={{ padding: 23 }}>
                                <p>Apakah Anda yakin ingin menghapus pelanggan ini?</p>
                                <div className="text-end" style={{ marginTop: 44 }}>
                                    <form onSubmit={handleSubmitDelete}>
                                        <button
                                            onClick={() => setIsModalDelete(false)}
                                            type="button"
                                            className="btn border-0 fw-medium me-2"
                                        >
                                            Batalkan
                                        </button>
                                        <button
                                            disabled={isDeleting}
                                            type="submit"
                                            className="btn border-0 fw-semibold rounded-3 text-white"
                                            style={{ backgroundColor: "#FF0000", padding: "8px 23.78px" }}
                                        >
                                            {isDeleting ? "Menghapus..." : "Hapus"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Akhir --- Modal Hapus Pelanggan Dimanajemen Data Pelanggan */}
        </Layout>
    );
}

export default DataPelanggan;
