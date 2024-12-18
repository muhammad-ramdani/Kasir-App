import React from "react";
import SearchLaporan from "../../components/SearchLaporan/SearchLaporan";
import images from "../../Image";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import CalenderPopup from "../../components/CalenderPopup/CalenderPopup";
import EksporModalLaporanPersediaanBarang from "../../components/ModalEksporLaporan/ModalEksporLaporanPersediaanBarang";
import PaginationWithItemsPerPage from "../../components/Pagination/Pagination";

const LaporanPersediaanBarang = () => {

    const transactions = [
        {
            namaProduk: 'Rice Cooker',
            sku: 'RC001',
            kategori: 'Peralatan Dapur',
            kuantitas: 25,
            satuan: 'pcs',
            hargaModal: 250000,
            totalNilaiPersediaan: 6250000,
        },
        {
            namaProduk: 'Blender',
            sku: 'BL002',
            kategori: 'Peralatan Dapur',
            kuantitas: 30,
            satuan: 'pcs',
            hargaModal: 150000,
            totalNilaiPersediaan: 4500000,
        },
        {
            namaProduk: 'Panci Set',
            sku: 'PS003',
            kategori: 'Peralatan Dapur',
            kuantitas: 15,
            satuan: 'pcs',
            hargaModal: 350000,
            totalNilaiPersediaan: 5250000,
        },
        {
            namaProduk: 'Kompor Gas',
            sku: 'KG004',
            kategori: 'Peralatan Dapur',
            kuantitas: 10,
            satuan: 'pcs',
            hargaModal: 700000,
            totalNilaiPersediaan: 7000000,
        },
        {
            namaProduk: 'Set Sendok Makan',
            sku: 'SS005',
            kategori: 'Peralatan Makan',
            kuantitas: 50,
            satuan: 'pcs',
            hargaModal: 50000,
            totalNilaiPersediaan: 2500000,
        },
        {
            namaProduk: 'Kursi Makan',
            sku: 'KM006',
            kategori: 'Furniture',
            kuantitas: 20,
            satuan: 'pcs',
            hargaModal: 300000,
            totalNilaiPersediaan: 6000000,
        },
    ];

    // state popup open modal ekspor laporan
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [formatEkspor, setFormatEkspor] = React.useState<'PDF' | 'Excel'>('PDF');

    // state untuk tanggal yang dipilih
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date()); // Inisialisasi dengan tanggal saat ini
    const [showCalendar, setShowCalendar] = React.useState(false);

    // paginataion
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = React.useState<number>(3); // Default items per page
    const itemsPerPageOptions = [3, 5, 10, 20]; // Pilihan jumlah item per halaman

    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when items per page is changed
    };

    // handle open modal ekspor laporan
    const handleOpenModal = (format: 'PDF' | 'Excel') => {
        setFormatEkspor(format);
        setModalOpen(true);
    };

    const handleConfirmExport = () => {
        setModalOpen(false);
        // Handle the export logic here
        console.log(`Exporting in ${formatEkspor} format...`);
    };


    return (
        <Layout titlePage="Laporan Persediaan Barang">
            {/* component filter */}
            <div className="component-filter mb-3">
                <div className="row d-flex flex-row">
                    <div className="col-sm-12 col-md-6 d-flex justifiy-content-start gap-2">
                        <div className="w-100">
                            <div className="col-sm-12 col-md-4 mb-2">
                                <SearchLaporan
                                    placeholder="cari struk..."
                                />
                            </div>
                            <div className="col-sm-12 col-md-4 mb-2">
                                <button
                                    className='btn btn-rentan-tanggal w-100 d-flex justify-content-around align-items-center'
                                    onClick={() => setShowCalendar(!showCalendar)} // Toggle tampilkan kalender
                                >
                                    <img src={images.calender} alt="" />
                                    {selectedDate ? ` ${selectedDate.toLocaleDateString()}` : 'Pilih Tanggal'}
                                </button>
                            </div>
                            <div className="col-sm-12 col-md-4 mb-2">
                                <div className="dropdown">
                                    <button
                                        className="btn dropdown-toggle w-100 btn-order"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Waktu Order
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Semua Kategori
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Minuman
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Makanan Instan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Snack
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Sembako
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                Perawatan Tubuh
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 d-flex justify-content-end gap-2 mt-2">
                        <div className="col-12 col-md-4">
                            <div className="dropdown w-100">
                                <button
                                    className="btn w-100 btn-ekspor-laporan"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src={images.ekspor} alt="" className='me-3' />
                                    <span className='label-ekspor-laporan'>Ekspor Laporan</span>
                                </button>
                                <ul className="dropdown-menu w-100">
                                    <li>
                                        <button type='button' className="dropdown-item"
                                            onClick={() => handleOpenModal('PDF')}>
                                            PDF
                                        </button>
                                    </li>
                                    <li>
                                        <button type='button' className='dropdown-item'
                                            onClick={() => handleOpenModal('Excel')}>
                                            Excel
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tabel persediaan barang */}
            <div className="wrap-table-content-whitout-card">
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className='table-head'>
                                    <th>Nama Produk</th>
                                    <th>SKU</th>
                                    <th>Kategori</th>
                                    <th>Kuantitas</th>
                                    <th>Satuan</th>
                                    <th>Harga Modal</th>
                                    <th>Total Nilai Persediaan</th>
                                </tr>
                            </thead>
                            <tbody className='custom-tbody'>
                                {transactions.length > 0 ? (
                                    currentTransactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td>{transaction.namaProduk}</td>
                                            <td>{transaction.sku}</td>
                                            <td>{transaction.kategori}</td>
                                            <td>{transaction.kuantitas}</td>
                                            <td>{transaction.satuan}</td>
                                            <td>{transaction.hargaModal.toLocaleString()} IDR</td>
                                            <td>{transaction.totalNilaiPersediaan.toLocaleString()} IDR</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center">
                                            <img src={images.notFound} alt="image not found" className='mt-5' />
                                            <h6 className='h6-notfound'>Data tidak tersedia</h6>
                                            <p className='p-notfound mb-5'>Belum ada data yang dapat ditampilkan di halaman ini</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Komponen PaginationWithItemsPerPage */}
                <PaginationWithItemsPerPage
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    itemsPerPageOptions={itemsPerPageOptions}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />


            </div>
            {/* modal ekspor laporan */}
            <EksporModalLaporanPersediaanBarang
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                format={formatEkspor}
                onConfirm={handleConfirmExport}
                jenisLaporan="Persediaan Barang"
                selectedDate={selectedDate ? selectedDate.toLocaleDateString() : ''}
            />

            {/* Tampilkan kalender jika showCalendar true */}
            {showCalendar && (
                <div className="calendar-popup">
                    <CalenderPopup
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        onClose={() => setShowCalendar(false)}
                    />
                    <div className="mt-2">
                        <p>Tanggal yang dipilih: {selectedDate ? selectedDate.toLocaleDateString() : 'Belum dipilih'}</p>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default LaporanPersediaanBarang;