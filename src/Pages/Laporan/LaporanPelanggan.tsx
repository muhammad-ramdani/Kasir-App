import React from "react"
import PopupDateRange from "../../compenents/PopUpDateRange/PopUpDateRange"
import EksporModalLaporan from "../../compenents/ModalEksporLaporan/ModalEksporLaporan"
import SearchLaporan from "../../compenents/SearchLaporan/SearchLaporan"
import images from "../../Image"
import Layout from "../../Layout/Layout"
import Pagination from "../../compenents/Pagination/Pagination"

const LaporanPelanggan = () => {
    // state popup datePicker
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    // state popup open modal ekspor laporan
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [formatEkspor, setFormatEkspor] = React.useState<'PDF' | 'Excel'>('PDF');

    const transactions = [
        {
            nama: 'PT Maju Jaya',
            alamat: 'Jl. Merdeka No. 10, Jakarta',
            noTelepon: '081234567890',
            totalTransaksi: '10',
            totalPenjualan: 'Rp 50.000.000',
            kunjunganTerakhir: '2024-09-25'
        },
        {
            nama: 'CV Sukses Mandiri',
            alamat: 'Jl. Pahlawan No. 45, Bandung',
            noTelepon: '082345678901',
            totalTransaksi: '8',
            totalPenjualan: 'Rp 40.000.000',
            kunjunganTerakhir: '2024-09-20'
        },
        {
            nama: 'Toko Berkah',
            alamat: 'Jl. Jendral Sudirman No. 100, Surabaya',
            noTelepon: '083456789012',
            totalTransaksi: '12',
            totalPenjualan: 'Rp 60.000.000',
            kunjunganTerakhir: '2024-09-28'
        },
        {
            nama: 'UD Karya Abadi',
            alamat: 'Jl. Ahmad Yani No. 200, Yogyakarta',
            noTelepon: '084567890123',
            totalTransaksi: '5',
            totalPenjualan: 'Rp 25.000.000',
            kunjunganTerakhir: '2024-09-18'
        },
        {
            nama: 'PT Sentosa',
            alamat: 'Jl. Diponegoro No. 15, Medan',
            noTelepon: '085678901234',
            totalTransaksi: '9',
            totalPenjualan: 'Rp 45.000.000',
            kunjunganTerakhir: '2024-09-22'
        }
    ];


    // pagination
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const itemsPerPage = 5; // Sesuaikan jumlah item per halaman

    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
        <Layout titlePage="Laporan Pelanggan">
            {/* component filter */}
            <div className="component-filter">
                <div className="row d-flex flex-row">
                    <div className="col-6 d-flex justifiy-content-start gap-2">
                        <div className="col-6">
                            <SearchLaporan
                                placeholder="cari struk..."
                            />
                        </div>
                        <div className="col-6">
                            <button
                                className='btn btn-danger w-100'
                                onClick={() => setPopupOpen(true)}

                            >Rentang Tanggal</button>
                            <PopupDateRange isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end gap-2">
                        <div className="col-4">
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
            {/* tabel pelanggan */}
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="custom-thead">
                        <tr className='table-head'>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>No Telepon</th>
                            <th>Total Transaksi</th>
                            <th>Total Penjualan</th>
                            <th>Kunjungan Terakhir</th>
                        </tr>
                    </thead>
                    <tbody className='custom-tbody'>
                        {transactions.length > 0 ? (
                            currentTransactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.nama}</td>
                                    <td>{transaction.alamat}</td>
                                    <td>{transaction.noTelepon}</td>
                                    <td>{transaction.totalTransaksi}</td>
                                    <td>{transaction.totalPenjualan}</td>
                                    <td>{transaction.kunjunganTerakhir}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    <img src={images.notFound} alt="image not found" className='mt-5' />
                                    <h6 className='h6-notfound'>Data tidak tersedia</h6>
                                    <p className='p-notfound mb-5'>Belum ada data yang dapat ditampilkan di halaman ini</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {transactions.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>


            {/* modal ekspor laporan */}
            <EksporModalLaporan
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                format={formatEkspor}
                onConfirm={handleConfirmExport}
                jenisLaporan="Pelanggan"
            />
        </Layout>
    )
}

export default LaporanPelanggan