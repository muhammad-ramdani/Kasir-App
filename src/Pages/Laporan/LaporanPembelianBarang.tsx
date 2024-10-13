import React from "react";
import PopupDateRange from "../../compenents/PopUpDateRange/PopUpDateRange";
import CardTotal from "../../compenents/CardTotal/CardTotal";
import EksporModalLaporan from "../../compenents/ModalEksporLaporan/ModalEksporLaporan";
import SearchLaporan from "../../compenents/SearchLaporan/SearchLaporan";
import images from "../../Image";
import Layout from "../../Layout/Layout";
import Pagination from "../../compenents/Pagination/Pagination";

const LaporanPembelianBarang = () => {
    // state popup datePicker
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    // state popup open modal ekspor laporan
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [formatEkspor, setFormatEkspor] = React.useState<'PDF' | 'Excel'>('PDF');

    const CardTotalPembelian = [
        {
            title: 'Total Pembelian',
            value: 'Rp 6.530.000,00'
        },
        {
            title: 'Total Piutang',
            value: 'Rp 6.530.000,00'
        },
        {
            title: 'Yang Dibayarkan',
            value: 'Rp 6.530.000,00'
        }
    ]

    // data tabel
    const transactions = [
        {
            namaSupplier: 'S001',
            namaBarang: 'Beras 5kg',
            tanggalPembelian: '2024-10-01',
            kuantitas: '10 pcs',
            satuan: 'Rp.12.000.000',
            totalHarga: 'Rp.2.000.000',
            totalPengeluaran: 'Rp.2.000.000'
        },
        {
            namaSupplier: 'S002',
            namaBarang: 'Minyak Goreng 1L',
            tanggalPembelian: '2024-10-02',
            kuantitas: '10 pcs',
            satuan: 'Rp.12.000.000',
            totalHarga: 'Rp.1.500.000',
            totalPengeluaran: 'Rp.1.500.000'
        },
        {
            namaSupplier: 'S003',
            namaBarang: 'Gula Pasir 1kg',
            tanggalPembelian: '2024-10-03',
            kuantitas: '10 pcs',
            satuan: 'Rp.12.000.000',
            totalHarga: 'Rp.1.000.000',
            totalPengeluaran: 'Rp.1.000.000'
        },
        {
            namaSupplier: 'S004',
            namaBarang: 'Tepung Terigu 1kg',
            tanggalPembelian: '2024-10-04',
            kuantitas: '10 pcs',
            satuan: 'Rp.12.000.000',
            totalHarga: 'Rp.1.200.000',
            totalPengeluaran: 'Rp.1.200.000'
        },
        {
            namaSupplier: 'S005',
            namaBarang: 'Kecap Manis 500ml',
            tanggalPembelian: '2024-10-05',
            kuantitas: '10 pcs',
            satuan: 'Rp.12.000.000',
            totalHarga: 'Rp.800.000',
            totalPengeluaran: 'Rp.800.000'
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
        <Layout titlePage="Laporan Pembelian Barang">
            <div className="row">
                {CardTotalPembelian.map((item, index) => (
                    <div className="col-4" key={index}>
                        <CardTotal
                            title={item.title}
                            value={item.value}
                        />
                    </div>
                ))}
            </div>
            {/* component filter */}
            <div className="component-filter">
                <div className="row d-flex flex-row">
                    <div className="col-6 d-flex justifiy-content-start gap-2">
                        <div className="col-5">
                            <SearchLaporan
                                placeholder="cari struk..."
                            />
                        </div>
                        <div className="col-5">
                            <button
                                className='btn btn-danger w-100'
                                onClick={() => setPopupOpen(true)}

                            >Rentang Tanggal</button>
                            <PopupDateRange isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end gap-2">
                        <div className="col-5">
                            <div className="dropdown w-100">
                                <button
                                    className="btn w-100 btn-status-pembayaran"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src={images.redFilter} alt="" className='me-3' />
                                    <span className='label-status-pembayaran'>Status Pembayaran</span>
                                </button>
                                <ul className="dropdown-menu w-100">
                                    <li className="dropdown-item item-status">
                                        <input type="checkbox" id="statusSemua" className='me-2' />
                                        <label htmlFor="statusSemua" className='mt-0 mb-0 label-status'>Semua status pembayaran</label>
                                    </li>
                                    <li className="dropdown-item item-status">
                                        <input type="checkbox" id="statusBelumLunas" className='me-2' />
                                        <label htmlFor="statusBelumLunas" className='mt-0 mb-0 label-status'>Belum lunas</label>
                                    </li>
                                    <li className="dropdown-item item-status">
                                        <input type="checkbox" id="statusLunas" className='me-2' />
                                        <label htmlFor="statusLunas" className='mt-0 mb-0 label-status'>Lunas</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="custom-thead">
                        <tr className='table-head'>
                            <th>Nama Supplier</th>
                            <th>Nama Barang</th>
                            <th>Tanggal Pembelian</th>
                            <th>Kuantitas</th>
                            <th>Satuan</th>
                            <th>Total Harga</th>
                            <th>Total Pengeluaran</th>
                        </tr>
                    </thead>
                    <tbody className='custom-tbody'>
                        {transactions.length > 0 ? (
                            currentTransactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.namaSupplier}</td>
                                    <td>{transaction.namaBarang}</td>
                                    <td>{transaction.tanggalPembelian}</td>
                                    <td>{transaction.kuantitas}</td>
                                    <td>{transaction.satuan}</td>
                                    <td>{transaction.totalHarga}</td>
                                    <td>{transaction.totalPengeluaran}</td>
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
                jenisLaporan="Pembelian Barang"
            />
        </Layout>
    );
}

export default LaporanPembelianBarang