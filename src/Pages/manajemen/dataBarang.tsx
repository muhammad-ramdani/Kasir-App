import { useEffect, useState, useMemo } from "react";
import './styleManajemenDataBarang.css';
import "./styleAllManajemen.css";
import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";
import logoEditRincianBarangWhite from "../../assets/imagesManajemenDataBarang/logo-edit-rincian-barang-white.svg";
import logoEditRincianBarang from "../../assets/imagesManajemenDataBarang/logo-edit-rincian-barang.svg";
import logoHapusBarangDirincianBarang from "../../assets/imagesManajemenDataBarang/logo-hapus-barang-dirincian-barang.svg";
import logoTambahDipopupTambahManajemenBlack22 from "../../assets/imagesAllManajemen/logo-tambah-di-popup-tambah-manajemen-black-22.svg";
import noImagesForTambahBarang from "../../assets/imagesManajemenDataBarang/no-images-for-tambah-barang.png";
import searchNormal from "../../assets/imagesManajemenDataBarang/search-normal.svg";
import logoFilterDropdownManajemen from "../../assets/imagesAllManajemen/logo-filter-dropdown-manajemen.svg";
import tidakAdaBarang from "../../assets/imagesManajemenDataBarang/tidak-ada-barang.svg";
// import tisuPaseo from "../../assets/imagesManajemenDataBarang/tisu-paseo.png";
import logoRefreshManajemen from "../../assets/imagesAllManajemen/logo-refresh-manajemen.svg";
import Layout from "../../Layout/Layout";
import React from "react";
import apiName from "../../api/api";

// Interface for product items
interface Item {
    id: number;
    name: string;
    product_type: string;
    image_url: string;
    base_price: number;
    selling_price: number;
    stock: number;
    code_product: string;
    category_id: number;
    minimum_stock: number;
    shelf: string;
    weight: number;
    discount: number;
    information: string;
    created_at: Date;
    updated_at: Date;
}

function DataBarang() {
    // Fetching data products
    const [dataProduct, setDataProduct] = useState<Item[]>([]);
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await apiName.get("/products");
                setDataProduct(response.data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };
        fetchingData();
    }, []);

    // Fetching categories data
    const [categoriesData, setCategoriesData] = useState<{ [key: number]: string }>({});
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiName.get("/categories");
                const categoryMapping = response.data.data.reduce(
                    (acc: { [key: number]: string }, { id, name }: { id: number; name: string }) => ({
                        ...acc,
                        [id]: name,
                    }),
                    {}
                );
                setCategoriesData(categoryMapping);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };
        fetchCategories();
    }, []);

    const [selectedImage, setSelectedImage] = useState<File | null>(null); // Menyimpan file gambar baru
    const [previewImage, setPreviewImage] = useState<string | null>(null); // Menyimpan URL gambar yang akan di-preview

    // Update preview saat file dipilih
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(file); // Simpan file gambar
            setPreviewImage(URL.createObjectURL(file)); // Tampilkan gambar yang baru dipilih
        }
    };

    // Filter and search functionality
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
    const handleCategoryClick = (category: string | number) => setActiveCategory(category.toString());
    const categories = ["Semua", ...new Set(dataProduct.map(item => categoriesData[item.category_id] || ''))];
    const filteredItems = dataProduct.filter(item => {
        const searchableContent = ` ${item.name?.toLowerCase() ?? ''} ${item.id ?? ''} ${item.base_price ?? ''} ${item.selling_price ?? ''} ${item.stock ?? ''} ${item.category_id ?? ''} `;
        const itemCategory = categoriesData[item.category_id] || "";
        return (activeCategory === "Semua" || itemCategory === activeCategory) && searchableContent.includes(searchQuery.toLowerCase());
    });

    // Sorting functionality
    const [sortCriteria, setSortCriteria] = useState<string | null>(null);
    const handleSort = (criteria: string) => setSortCriteria(criteria);
    const sortedItems = useMemo(() => {
        if (!sortCriteria) return filteredItems;
        const sortFunctions: { [key: string]: (a: Item, b: Item) => number } = {
            "Barang": (a, b) => a.name.localeCompare(b.name),
            "Kode": (a, b) => a.code_product.localeCompare(b.code_product),
            "Harga jual": (a, b) => a.selling_price - b.selling_price,
            "Stok": (a, b) => a.stock - b.stock,
            "Produk terbaru": (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        };
        return [...filteredItems].sort(sortFunctions[sortCriteria]);
    }, [sortCriteria, filteredItems]);

    // Card selection and details
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [selectedDetailBarang, setSelectedDetailBarang] = useState<Item | null>(null);
    const handleCardClick = (id: number | null) => {
        setActiveCard(id);
        setSelectedDetailBarang(dataProduct.find(item => item.id === id) ?? null);
    };

    // Edit product functionality
    const [editData, setEditData] = useState<Item | null>(null);
    const handleEditClick = async (id: number) => {
        const product = dataProduct.find((item) => item.id === id);
        if (product) {
            setEditData(product);
            setPreviewImage(`http://68.183.103.154/${product.image_url}`); // Update gambar preview
            setSelectedImage(null); // Reset file gambar sebelumnya
        }
    };

    // Update product and close modal
    const updateProduct = async () => {
        if (!editData) return;

        let updatedImageUrl = editData.image_url; // Gunakan URL gambar yang ada sebagai default

        // Jika ada gambar baru yang dipilih, unggah gambar terlebih dahulu
        if (selectedImage) {
            const formData = new FormData();
            formData.append("image", selectedImage);

            try {
                const response = await apiName.post(`/product-image/${editData.id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                updatedImageUrl = response.data.data.image_url; // Perbarui URL gambar setelah unggah berhasil
            } catch (error) {
                console.error("Error uploading image:", error);
                alert("Gagal mengunggah gambar. Coba lagi.");
                return; // Hentikan proses jika unggah gambar gagal
            }
        }

        // Perbarui data produk dengan URL gambar baru (jika ada)
        try {
            const response = await apiName.put(`/products/${editData.id}`, {
                ...editData,
                image_url: updatedImageUrl, // Set URL gambar baru
            });
            const updatedProduct = response.data.data;

            setDataProduct((prev) =>
                prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
            );
            setSelectedDetailBarang(updatedProduct);
            setEditData(null);

            const modalElement = document.getElementById("modalEditRincianDataBarang");
            if (modalElement) {
                modalElement.classList.remove("show");
                modalElement.setAttribute("aria-hidden", "true");
                modalElement.style.display = "none";
                document.body.classList.remove("modal-open");
                const modalBackdrop = document.querySelector(".modal-backdrop");
                modalBackdrop?.parentNode?.removeChild(modalBackdrop);
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Gagal memperbarui produk. Coba lagi.");
        }
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (editData) await updateProduct();
    };

    const [itemToDelete, setItemToDelete] = useState<number | null>(null);

    const getDiscountType = () => {
        if (editData) {
            console.log("Edit mode active. Discount value:", editData.discount);
            return editData.discount <= 100 ? "percent" : "rp";
        }

        console.log("Add mode active. Discount value:", newProduct.discount);
        return newProduct.discount <= 100 ? "percent" : "rp";
    };


    const deleteProduct = async () => {
        if (!itemToDelete) return;

        try {
            // Hapus barang dari server
            await apiName.delete(`/products/${itemToDelete}`);

            // Perbarui daftar barang secara lokal
            setDataProduct((prev) => prev.filter((item) => item.id !== itemToDelete));

            // Reset detail barang jika barang yang dihapus adalah barang yang sedang dipilih
            if (selectedDetailBarang?.id === itemToDelete) {
                setSelectedDetailBarang(null);
            }

            // Reset state
            setItemToDelete(null);

            // Tutup modal dan tampilkan pesan sukses
            const modalElement = document.getElementById("modalHapusRincianBarang");
            if (modalElement) {
                modalElement.classList.remove("show");
                modalElement.setAttribute("aria-hidden", "true");
                modalElement.style.display = "none";
                document.body.classList.remove("modal-open");
                const modalBackdrop = document.querySelector(".modal-backdrop");
                modalBackdrop?.parentNode?.removeChild(modalBackdrop);
            }

            alert("Barang berhasil dihapus!");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Gagal menghapus barang. Coba lagi.");
        }
    };

    // Tambah state untuk produk baru
    const [newProduct, setNewProduct] = useState<Item>({
        id: 0, // akan diabaikan saat pengiriman data
        name: "",
        product_type: "",
        image_url: "",
        base_price: 0,
        selling_price: 0,
        stock: 0,
        code_product: "",
        category_id: 0,
        minimum_stock: 0,
        shelf: "",
        weight: 0,
        discount: 0,
        information: "",
        created_at: new Date(),
        updated_at: new Date(),
    });

    // Handler untuk perubahan input pada form tambah produk
    const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]: name === "base_price" || name === "selling_price" || name === "stock" || name === "minimum_stock" || name === "weight" || name === "discount" || name === "category_id"
                ? parseInt(value) || 0 // Pastikan category_id juga dikonversi ke angka
                : value,
        }));
    };


    // Fungsi untuk menyimpan produk baru
    const addNewProduct = async () => {
        try {
            const response = await apiName.post("/products", {
                ...newProduct,
                image_url: "", // Kosongkan image_url karena gambar tidak diunggah
            });

            const createdProduct = response.data.data;

            // Tambahkan produk baru ke data lokal
            setDataProduct((prev) => [...prev, createdProduct]);

            // Reset form tambah produk
            setNewProduct({
                id: 0,
                name: "",
                product_type: "",
                image_url: "",
                base_price: 0,
                selling_price: 0,
                stock: 0,
                code_product: "",
                category_id: 0,
                minimum_stock: 0,
                shelf: "",
                weight: 0,
                discount: 0,
                information: "",
                created_at: new Date(),
                updated_at: new Date(),
            });

            alert("Produk berhasil ditambahkan!");
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Gagal menambahkan produk. Coba lagi.");
        }
    };

    // Handle submit untuk form tambah produk
    const handleNewProductSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Data produk yang akan ditambahkan:", newProduct);

        // Periksa apakah kategori sudah dipilih
        if (!newProduct.category_id || newProduct.category_id === 0) {
            alert("Harap pilih kategori yang valid.");
            return;
        }

        await addNewProduct();

        // Tutup modal (sudah ada di kode Anda)
        const modalElement = document.getElementById("modalTambahBarangDicardDataBarang");
        if (modalElement) {
            modalElement.classList.remove("show");
            modalElement.setAttribute("aria-hidden", "true");
            modalElement.style.display = "none";
            document.body.classList.remove("modal-open");
            const modalBackdrop = document.querySelector(".modal-backdrop");
            modalBackdrop?.parentNode?.removeChild(modalBackdrop);
        }
    };

    const calculateDiscountType = () => {
        return newProduct.discount <= 100 ? "percent" : "rp";
    };

    return (
        <>
            <Layout titlePage='Data Barang / Produk'>
                <div className="container py-4">
                    <div className="row g-4">
                        <div className="col-12 col-lg-6">
                            <div className="card rounded-4 card-data-barang-100vh">
                                <div className="card-body card-body-data-barang">
                                    <div className="row">

                                        {/* Button Sort Dropdown */}
                                        <div className="col-auto">
                                            <div className="dropdown me-1">
                                                <button type="button" className="btn btn-outline-light btn-filter-data-barang rounded-3" data-bs-toggle="dropdown" data-bs-offset="0,10" style={{ borderColor: "#E6E6E6", padding: "9.21px 9.5px" }}><img src={logoFilterDropdownManajemen} /></button>
                                                <ul className="dropdown-menu shadow dropdown-menu-filter-data-barang" style={{ borderColor: "#E6E6E6" }}>
                                                    {["Barang", "Kode", "Harga jual", "Stok", "Produk terbaru"].map((criteria, index) => (
                                                        <li key={index}>
                                                            <a className="dropdown-item dropdown-item-filter-data-barang" style={{ padding: "10px 21px", cursor: "pointer" }} onClick={() => handleSort(criteria)}>{criteria}</a>
                                                        </li>
                                                    ))}
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
                                    {filteredItems.length === 0 ? (
                                        <div className="content-fill-manajemen-data-barang-tidak-ada">
                                            <div className="text-center position-absolute top-50 start-50 translate-middle w-100 px-3">
                                                <img src={tidakAdaBarang} />
                                                <p className="text-tidak-ada-barang fw-medium mb-0">Tidak ada barang</p>
                                            </div>
                                        </div>
                                    ) : (
                                        // ketika content terisi
                                        <div>
                                            {/* Filter Kategori menggunakan button */}
                                            <div className="overflow-x-auto" style={{ margin: "20px 0 20px 0" }}>
                                                <div className="d-flex">
                                                    {categories.map((category, index) => (
                                                        <button key={index} type="button" className={`col-auto btn rounded-3 ${category === activeCategory ? "button-filter-kategori-barang-active" : "button-filter-kategori-barang"}`} onClick={() => handleCategoryClick(category)}>
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Daftar Barang */}
                                            <div className="content-fill-manajemen-data-barang overflow-auto-custom-card-manajemen overflow-auto">
                                                {sortedItems.map(item => (
                                                    <div key={item.id} className="card rounded-4 mb-3" style={{ border: activeCard === item.id ? "1px solid #FF0000" : "", cursor: "pointer", }} onClick={() => handleCardClick(item.id)}>
                                                        <div className="row m-0">
                                                            <div className="col-auto p-0"><img src={item.image_url ? `https://68.183.103.154/${item.image_url}` : ''} className="images-card-barang" style={{ maxWidth: "78px", minWidth: "78px", maxHeight: "81px", minHeight: "81px", objectFit: "cover" }} /></div>
                                                            <div className="col p-0">
                                                                <div className="card-body ps-0">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md">
                                                                            <span className="fw-medium">{item.name}</span><br />
                                                                            <span className="small" style={{ color: "#646464" }}>{item.code_product}</span>
                                                                        </div>
                                                                        <div className="col-12 col-md-auto text-md-end mt-3 mt-md-0">
                                                                            <span className="fw-medium" style={{ color: "#FF0000" }}>{item.stock.toLocaleString()}</span><br />
                                                                            <div style={{ color: "#646464" }}>
                                                                                <span>Rp {item.base_price.toLocaleString('id-ID')}</span><span> . </span><span>Rp {item.selling_price.toLocaleString('id-ID')}</span>
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
                                    <button type="button" className="btn btn-tambah-data-barang fw-semibold w-100 border-0 rounded-3" data-bs-toggle="modal" data-bs-target="#modalTambahBarangDicardDataBarang">+ Tambah Barang</button>
                                </div>
                            </div>
                        </div>

                        {/* Card Konten Rincian Barang */}
                        <div className="col-12 col-lg-6">
                            <div className="card rounded-4 card-data-barang-100vh">

                                {/* card-body ketika memilih rincian */}
                                {selectedDetailBarang ? (
                                    <React.Fragment>
                                        <div className="card-body card-body-rincian-barang">
                                            <div className="row">
                                                <div className="col-12 col-lg">
                                                    <h5 className="card-title">Rincian Barang :</h5>
                                                </div>

                                                <div className="col-12 col-lg-auto text-center">
                                                    <button type="button" className="btn button-edit-rincian-barang rounded-pill border-0" data-bs-toggle="modal" data-bs-target="#modalEditRincianDataBarang" onClick={() => handleEditClick(selectedDetailBarang.id)}>
                                                        <img src={logoEditRincianBarang} className="me-2" />
                                                        <span className="small fw-medium">Edit rincian</span>
                                                    </button>
                                                    <button className="btn button-hapus-barang-dirincian-barang rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#modalHapusRincianBarang" onClick={() => setItemToDelete(selectedDetailBarang?.id ?? null)}>
                                                        <img src={logoHapusBarangDirincianBarang} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 227px)" }}>
                                                <div>
                                                    {/* Gambar, nama, dan ID barang */}
                                                    <div className="row mx-0" style={{ marginTop: 15 }}>
                                                        {/* Gambar */}
                                                        <div className="col-auto px-0" style={{ marginRight: 30 }}>
                                                            <img src={selectedDetailBarang?.image_url ? `http://68.183.103.154/${selectedDetailBarang?.image_url}` : ''} className="images-card-rincian-barang" style={{ maxWidth: 125, minWidth: 125, maxHeight: 125, minHeight: 125, objectFit: "cover" }} />
                                                        </div>

                                                        {/* Nama dan ID */}
                                                        <div className="col px-0" style={{ display: "table" }}>
                                                            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                                                <p className="fw-medium mb-1" style={{ fontSize: 18 }}>{selectedDetailBarang?.name}</p>
                                                                <p className="text-secondary mb-0" style={{ fontSize: 18 }}>{selectedDetailBarang?.code_product}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Detail barang */}
                                                    <table className="table table-borderless mb-0 table-sm mt-3" style={{ fontSize: 15 }}>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "27%" }}>Harga Dasar</td><td>: Rp {selectedDetailBarang?.base_price.toLocaleString('id-ID')}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Harga Jual</td><td>: Rp {selectedDetailBarang?.selling_price.toLocaleString('id-ID')}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Diskon</td>
                                                                <td>
                                                                    : {selectedDetailBarang?.discount > 100
                                                                        ? `${Number.isInteger((selectedDetailBarang.discount / selectedDetailBarang.selling_price) * 100)
                                                                            ? (selectedDetailBarang.discount / selectedDetailBarang.selling_price) * 100
                                                                            : ((selectedDetailBarang.discount / selectedDetailBarang.selling_price) * 100).toFixed(2)}%`
                                                                        : `${Number.isInteger(selectedDetailBarang?.discount)
                                                                            ? selectedDetailBarang?.discount
                                                                            : selectedDetailBarang?.discount.toFixed(2)}%`}
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td>Berat</td><td>: {selectedDetailBarang?.weight.toLocaleString()} gram</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kode</td><td>: {selectedDetailBarang?.code_product}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}><p /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Stok</td><td>: {selectedDetailBarang?.stock.toLocaleString()}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Stok Minimum</td><td>: {selectedDetailBarang?.minimum_stock.toLocaleString()}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kategori</td><td>: {categoriesData[selectedDetailBarang?.category_id] || "Tidak diketahui"}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Letak Rak</td><td>: {selectedDetailBarang?.shelf}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Keterangan</td><td>: {selectedDetailBarang?.information}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </React.Fragment>
                                ) : (
                                    // card-body ketika tidak memilih rincian
                                    <div className="card-body card-body-rincian-barang">
                                        <h5 className="card-title">Rincian Barang :</h5>
                                        <p className="text-tidak-ada-barang-yang-dipilih fw-medium text-center position-absolute top-50 start-50 translate-middle w-100 px-3">Tidak ada barang yang dipilih</p>
                                    </div>
                                )}

                                {/* end | card-body ketika memilih rincian */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Edit Barang */}
                <form onSubmit={handleSubmit}>
                    <div className="modal fade" id="modalEditRincianDataBarang" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-scrollable" style={{ width: 605 }}>
                            <div className="modal-content shadow rounded-4 p-0" style={{ width: 605 }}>
                                <div className="modal-header" style={{ margin: "32px 32px 0 32px", padding: "0 0 18px 0" }}>
                                    <img src={logoEditManajemenDark22} className="me-2" />
                                    <span className="fw-medium" style={{ fontSize: 18 }}>Edit Barang</span>
                                    <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 23px 20px 32px", margin: "0px 3px 0px 0px" }}>
                                    <div className="text-center mb-3">
                                        <img src={previewImage || `http://68.183.103.154/${editData?.image_url}`} style={{ width: 100, height: 100, marginBottom: 10, objectFit: "cover" }} className="border rounded-4 mt-1" />
                                        <div>
                                            <label htmlFor="uploadImage" className="btn btn-sm fw-medium text-white border-0 rounded-3 mt-0 mb-0" style={{ backgroundColor: "#FF0000", padding: "4.5px 20.32px" }}>
                                                <img src={logoEditRincianBarangWhite} alt="Edit" /> Ubah
                                            </label>
                                            <input type="file" id="uploadImage" accept="image/*" className="d-none" onChange={handleImageChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputNamaBarang" className="form-label mt-0">Nama<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputNamaBarang" placeholder="Masukan nama.." value={editData?.name || ''} onChange={(e) => setEditData({ ...editData, name: e.target.value } as Item)} style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label mt-0">Tipe Barang</label>
                                        <select className="form-select rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={editData?.product_type} onChange={(e) => setEditData({ ...editData, product_type: e.target.value } as Item)}>
                                            <option value="Default">Default</option>
                                            <option value="Paket">Paket</option>
                                            <option value="Multisatuan">Multisatuan</option>
                                        </select>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col-auto p-0" style={{ marginRight: 20 }}>
                                            <label htmlFor="inputStokBarang" className="form-label mt-0">Stok<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputStokBarang" placeholder="0" style={{ width: 193, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={editData?.stock || ''} onChange={(e) => setEditData({ ...editData, stock: Number(e.target.value) } as Item)} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col p-0" style={{ marginRight: 10 }}>
                                            <label htmlFor="inputKodeBarang" className="form-label mt-0">Kode Barang<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputKodeBarang" placeholder="Masukkan kode" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.code_product || ''} onChange={(e) => setEditData({ ...editData, code_product: e.target.value } as Item)} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col-auto p-0 align-self-end">
                                            <button type="button" className="btn" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 12.5px", borderColor: "#E6E8ED" }} onClick={() => setEditData((prevData) => ({ ...prevData, stock: 0 } as Item))}><img src={logoRefreshManajemen} /></button>
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputHargaDasar" className="form-label mt-0">Harga Dasar<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputHargaDasar" placeholder="Rp 0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.base_price || ''} onChange={(e) => setEditData({ ...editData, base_price: Number(e.target.value) } as Item)} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label htmlFor="inputHargaJual" className="form-label mt-0">Harga Jual<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputHargaJual" placeholder="Rp 0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.selling_price || ''} onChange={(e) => setEditData({ ...editData, selling_price: Number(e.target.value) } as Item)} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label mt-0">Kategori</label>
                                        <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={editData?.category_id || ''} onChange={(e) => setEditData({ ...editData, category_id: Number(e.target.value) } as Item)}>
                                            {Object.entries(categoriesData).map(([id, name]) => ( // Iterasi categoriesData
                                                <option key={id} value={id}>{name}</option> // Menampilkan nama kategori dan mengembalikan id
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputBatasMinimumStok" className="form-label mt-0">Batas Minimum Stok</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputBatasMinimumStok" placeholder="0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.minimum_stock !== undefined ? String(editData.minimum_stock) : ''} onChange={(e) => { const value = e.target.value; if (/^\d*$/.test(value)) { setEditData({ ...editData, minimum_stock: value === '' ? 0 : Number(value) } as Item); } }} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} onBlur={() => { if (!editData?.minimum_stock) { setEditData({ ...editData, minimum_stock: 0 } as Item); } }} />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label htmlFor="inputLetakRak" className="form-label mt-0">Letak Rak</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputLetakRak" placeholder="Masukkan letak" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.shelf || ''} onChange={(e) => setEditData({ ...editData, shelf: e.target.value } as Item)} onKeyDown={(e) => { if (!(/^[a-zA-Z0-9 ]$/.test(e.key) || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} onBlur={() => { if (!editData?.shelf) { setEditData({ ...editData, shelf: '-' } as Item); } }} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputBeratRincianBarang" className="form-label mt-0">Berat</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputBeratRincianBarang" placeholder="0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.weight || ''} onChange={(e) => setEditData({ ...editData, weight: Number(e.target.value) } as Item)} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} onBlur={() => { if (!editData?.weight) { setEditData({ ...editData, weight: 1 } as Item); } }} />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label className="form-label mt-0">Satuan</label>
                                            <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                                <option>Gram</option>
                                                <option>Pcs</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputDiskonHargaBarang" className="form-label mt-0">Diskon</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputDiskonHargaBarang" placeholder="0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.discount !== undefined ? String(editData.discount) : ''} onChange={(e) => { const value = e.target.value; if (/^\d*$/.test(value)) { setEditData({ ...editData, discount: value === '' ? 0 : Number(value) } as Item); } }} onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} onBlur={() => { if (!editData?.discount) { setEditData({ ...editData, discount: 0 } as Item); } }} />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 10 }} />
                                        <div className="col-auto p-0 align-self-end">
                                            <input type="radio" className="btn-check" name="options-outlined-diskon-persen-atau-rp-edit" id="radioDiskonPersenAtauRp-edit-1" autoComplete="off" checked={getDiscountType() === "percent"} readOnly />
                                            <label className="btn fw-medium rounded-start-3 border-end-0 rounded-end-0 class-diskon-persen-atau-rp my-0" htmlFor="radioDiskonPersenAtauRp-edit-1" style={{ marginRight: "-5px", padding: "9.5px 18.15px" }}>%</label>
                                            <input type="radio" className="btn-check" name="options-outlined-diskon-persen-atau-rp-edit" id="radioDiskonPersenAtauRp-edit-2" autoComplete="off" checked={getDiscountType() === "rp"} readOnly />
                                            <label className="btn fw-medium rounded-end-3 border-start-0 rounded-start-0 class-diskon-persen-atau-rp my-0" htmlFor="radioDiskonPersenAtauRp-edit-2" style={{ padding: "9.5px 14.02px" }}>Rp</label>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="inputKeteranganBarang" className="form-label mt-0">Keterangan</label>
                                        <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputKeteranganBarang" placeholder="Masukkan keterangan" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={editData?.information || ''} onChange={(e) => setEditData({ ...editData, information: e.target.value } as Item)} onBlur={() => { if (!editData?.information) { setEditData({ ...editData, information: '-' } as Item); } }} />
                                    </div>
                                </div>
                                <div className="modal-footer border-0" style={{ padding: "25px 32px 32px 32px" }}>
                                    <button type="submit" className="btn btn-simpan-data-barang fw-semibold w-100 border-0 rounded-3 m-0">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Modal Hapus Barang */}
                <div className="modal fade" id="modalHapusRincianBarang" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog modal-dialog-centered" style={{ width: 438 }}>
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-body" style={{ padding: 20 }}>
                                Apakah anda yakin ingin menghapus barang ini?
                                <div className="text-end" style={{ marginTop: 44 }}>
                                    <button type="button" className="btn button-batalkan-hapus-barang fw-medium" data-bs-dismiss="modal">Batalkan</button>
                                    <button type="button" className="btn button-hapus-barang-lanjutan-dimodal border-0 fw-semibold rounded-3 text-white" onClick={deleteProduct}>Hapus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Tambah Barang */}
                <form onSubmit={handleNewProductSubmit}>
                    <div className="modal fade" id="modalTambahBarangDicardDataBarang" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-scrollable" style={{ width: 605 }}>
                            <div className="modal-content shadow rounded-4 p-0" style={{ width: 605 }}>
                                <div className="modal-header" style={{ margin: "32px 32px 0 32px", padding: "0 0 18px 0" }}>
                                    <img src={logoTambahDipopupTambahManajemenBlack22} className="me-2" />
                                    <span className="fw-medium" style={{ fontSize: 18 }}>Edit Barang</span>
                                    <button type="button" className="btn-close focus-ring-none-manajemen" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body overflow-auto-custom-card-manajemen" style={{ padding: "20px 23px 20px 32px", margin: "0px 3px 0px 0px" }}>
                                    <div className="text-center mb-3">
                                        <img src={noImagesForTambahBarang} style={{ width: 100, height: 100, marginBottom: 10, objectFit: "cover" }} className="border rounded-4 mt-1" />
                                        <div>
                                            <label htmlFor="uploadImage" className="btn btn-sm fw-medium text-white border-0 rounded-3 mt-0 mb-0" style={{ backgroundColor: "#FF0000", padding: "4.5px 20.32px" }}>
                                                <img src={logoEditRincianBarangWhite} alt="Edit" /> Ubah
                                            </label>
                                            <input type="file" id="uploadImage" accept="image/*" className="d-none" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputNamaBarang" className="form-label mt-0">Nama<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputNamaBarang" placeholder="Masukan nama.." style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.name} onChange={handleNewProductChange} name="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label mt-0">Tipe Barang</label>
                                        <select className="form-select rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={newProduct.product_type} onChange={handleNewProductChange} name="product_type">
                                            <option value="Default">Default</option>
                                            <option value="Paket">Paket</option>
                                            <option value="Multisatuan">Multisatuan</option>
                                        </select>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col-auto p-0" style={{ marginRight: 20 }}>
                                            <label htmlFor="inputStokBarang" className="form-label mt-0">Stok<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputStokBarang" placeholder="0" style={{ width: 193, backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={newProduct.stock} onChange={handleNewProductChange} name="stock" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col p-0" style={{ marginRight: 10 }}>
                                            <label htmlFor="inputKodeBarang" className="form-label mt-0">Kode Barang<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputKodeBarang" placeholder="Masukkan kode" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.code_product} onChange={handleNewProductChange} name="code_product" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col-auto p-0 align-self-end">
                                            <button type="button" className="btn" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 12.5px", borderColor: "#E6E8ED", width: "45px", height: "45px" }} disabled></button>
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputHargaDasar" className="form-label mt-0">Harga Dasar<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputHargaDasar" placeholder="Rp 0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.base_price} onChange={handleNewProductChange} name="base_price" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label htmlFor="inputHargaJual" className="form-label mt-0">Harga Jual<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputHargaJual" placeholder="Rp 0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.selling_price} onChange={handleNewProductChange} name="selling_price" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label mt-0">Kategori</label>
                                        <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }} value={newProduct.category_id} onChange={handleNewProductChange} name="category_id" >
                                            {Object.entries(categoriesData).map(([id, name]) => (
                                                <option key={id} value={id}>{name}</option> // Gunakan id sebagai value
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputBatasMinimumStok" className="form-label mt-0">Batas Minimum Stok</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputBatasMinimumStok" placeholder="0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.minimum_stock} onChange={handleNewProductChange} name="minimum_stock" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label htmlFor="inputLetakRak" className="form-label mt-0">Letak Rak</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputLetakRak" placeholder="Masukkan letak" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.shelf} onChange={handleNewProductChange} name="shelf" onKeyDown={(e) => { if (!(/^[a-zA-Z0-9 ]$/.test(e.key) || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} onBlur={() => { if (!newProduct.shelf) { setNewProduct((prev) => ({ ...prev, shelf: '-', })); } }} />
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputBeratRincianBarang" className="form-label mt-0">Berat</label>
                                            <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputBeratRincianBarang" placeholder="0" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.weight} onChange={handleNewProductChange} name="weight" onKeyDown={(e) => { if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Delete' || e.key === 'Tab')) { e.preventDefault() } }} />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 20 }} />
                                        <div className="col p-0">
                                            <label className="form-label mt-0">Satuan</label>
                                            <select className="form-select rounded-3 focus-ring-none-manajemen" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }}>
                                                <option>Gram</option>
                                                <option>Pcs</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row m-0 mb-3">
                                        <div className="col p-0">
                                            <label htmlFor="inputDiskonHargaBarang" className="form-label mt-0">Diskon</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen"
                                                id="inputDiskonHargaBarang"
                                                placeholder="0"
                                                style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px" }}
                                                value={newProduct.discount}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (/^\d*$/.test(value)) {
                                                        setNewProduct((prev) => ({
                                                            ...prev,
                                                            discount: parseInt(value) || 0,
                                                        }));
                                                    }
                                                }}
                                                name="discount"
                                                onKeyDown={(e) => {
                                                    if (
                                                        !(
                                                            (e.key >= "0" && e.key <= "9") ||
                                                            e.key === "Backspace" ||
                                                            e.key === "ArrowLeft" ||
                                                            e.key === "ArrowRight" ||
                                                            e.key === "Delete" ||
                                                            e.key === "Tab"
                                                        )
                                                    ) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="col-auto p-0" style={{ marginRight: 10 }} />
                                        <div className="col-auto p-0 align-self-end">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="discount-type"
                                                id="radioDiskonPersen"
                                                value="percent"
                                                checked={calculateDiscountType() === "percent"}
                                                readOnly
                                            />
                                            <label
                                                className="btn fw-medium rounded-start-3 border-end-0 rounded-end-0 class-diskon-persen-atau-rp my-0"
                                                htmlFor="radioDiskonPersen"
                                                style={{ marginRight: "-5px", padding: "9.5px 18.15px" }}
                                            >
                                                %
                                            </label>
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="discount-type"
                                                id="radioDiskonRp"
                                                value="rp"
                                                checked={calculateDiscountType() === "rp"}
                                                readOnly
                                            />
                                            <label
                                                className="btn fw-medium rounded-end-3 border-start-0 rounded-start-0 class-diskon-persen-atau-rp my-0"
                                                htmlFor="radioDiskonRp"
                                                style={{ padding: "9.5px 14.02px" }}
                                            >
                                                Rp
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="inputKeteranganBarang" className="form-label mt-0">Keterangan</label>
                                        <input type="text" className="form-control rounded-3 placeholder-font-size-16px-color-8E8E8E-manajemen font-size-16px-manajemen focus-ring-none-manajemen" id="inputKeteranganBarang" placeholder="Masukkan keterangan" style={{ backgroundColor: "#F2F4FA", padding: "9.5px 18px", }} value={newProduct.information} onChange={handleNewProductChange} name="information" onBlur={() => { if (!newProduct.information) { setNewProduct((prev) => ({ ...prev, information: '-', })); } }} />
                                    </div>
                                </div>
                                <div className="modal-footer border-0" style={{ padding: "25px 32px 32px 32px" }}>
                                    <button type="submit" className="btn btn-simpan-data-barang fw-semibold w-100 border-0 rounded-3 m-0">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </Layout >
        </>
    )
}

export default DataBarang;
