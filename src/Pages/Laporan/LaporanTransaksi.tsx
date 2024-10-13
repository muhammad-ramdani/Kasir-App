import React from 'react';
import './Laporan.css'
import Layout from "../../Layout/Layout"
import CardTotal from '../../compenents/CardTotal/CardTotal';
import SearchLaporan from '../../compenents/SearchLaporan/SearchLaporan';
import { Link } from 'react-router-dom';
import images from '../../Image';
import Pagination from '../../compenents/Pagination/Pagination';
import PopupDateRange from '../../compenents/PopUpDateRange/PopUpDateRange';
import EksporModalLaporan from '../../compenents/ModalEksporLaporan/ModalEksporLaporan';


const LaporanTransaksi = () => {
    const CardTotalData = [
        {
            title: 'Total Penjualan',
            value: 'Rp.2.900.000'
        },
        {
            title: 'Total Transaksi',
            value: '10'
        },
        {
            title: 'Penjualan Bersih',
            value: 'Rp.2.900.000'
        },
        {
            title: 'Total Pembayaran',
            value: 'Rp.2.900.000'
        },
        {
            title: 'Total Piutang',
            value: 'Rp.2.900.000'
        }
    ];

    const [transactions] = React.useState([
        {
            nomor: "CS/01/241001/0001",
            waktuOrder: "01 Oktober 2024, 09:22",
            waktuBayar: "01 Oktober 2024, 09:32",
            outlet: "Toko Maju Jaya",
            jenisOrder: "Lainnya",
            penjualan: "Rp 125.000,00",
            metode: "Tunai"
        },
        {
            nomor: "CS/01/241001/0002",
            waktuOrder: "01 Oktober 2024, 10:59",
            waktuBayar: "01 Oktober 2024, 11:20",
            outlet: "Toko Maju Jaya",
            jenisOrder: "Lainnya",
            penjualan: "Rp 195.000,00",
            metode: "Tunai"
        },
        {
            nomor: "CS/01/241001/0003",
            waktuOrder: "01 Oktober 2024, 12:18",
            waktuBayar: "01 Oktober 2024, 12:38",
            outlet: "Toko Maju Jaya",
            jenisOrder: "Lainnya",
            penjualan: "Rp 285.000,00",
            metode: "Tunai"
        },
        {
            nomor: "CS/01/241001/0004",
            waktuOrder: "01 Oktober 2024, 13:40",
            waktuBayar: "01 Oktober 2024, 13:43",
            outlet: "Toko Maju Jaya",
            jenisOrder: "Lainnya",
            penjualan: "Rp 237.000,00",
            metode: "Tunai"
        },
        {
            nomor: "CS/01/241001/0005",
            waktuOrder: "01 Oktober 2024, 14:01",
            waktuBayar: "01 Oktober 2024, 14:10",
            outlet: "Toko Maju Jaya",
            jenisOrder: "Lainnya",
            penjualan: "Rp 130.000,00",
            metode: "Tunai"
        }
    ]);

    // state popup datePicker
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    // state popup open modal ekspor laporan
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [formatEkspor, setFormatEkspor] = React.useState<'PDF' | 'Excel'>('PDF');

    // paginataion
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
        <Layout titlePage="Laporan Transaksi">
            <div className="d-flex flex-wrap gap-1">
                {CardTotalData.map((card, index) => (
                    <div className="card-total-penjualan" key={index}>
                        <CardTotal
                            title={card.title}
                            value={card.value}
                        />
                    </div>
                ))}
            </div>
            <div className="component-filter">
                <div className="row">
                    <div className="col-2">
                        <SearchLaporan
                            placeholder='cari struk...'
                        />
                    </div>
                    <div className="col-3">
                        <button
                            className='btn btn-danger w-100'
                            onClick={() => setPopupOpen(true)}

                        >Rentang Tanggal</button>
                        <PopupDateRange isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
                    </div>
                    <div className="col-2">
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
                                        Waktu Order
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="dropdown-item">
                                        Waktu Bayar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-3">
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
                    <div className="col-2">
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

            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="custom-thead">
                        <tr className='table-head'>
                            <th>Nomor Transaksi </th>
                            <th>Waktu Order</th>
                            <th>Waktu Bayar</th>
                            <th>Outlet</th>
                            <th>Jenis Order</th>
                            <th>Penjualan (Rp.)</th>
                            <th>Metode Pembayaran</th>
                        </tr>
                    </thead>
                    <tbody className='custom-tbody'>
                        {transactions.length > 0 ? (
                            currentTransactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.nomor}</td>
                                    <td>{transaction.waktuOrder}</td>
                                    <td>{transaction.waktuBayar}</td>
                                    <td>{transaction.outlet}</td>
                                    <td>{transaction.jenisOrder}</td>
                                    <td>{transaction.penjualan}</td>
                                    <td>{transaction.metode}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7 as number} className="text-center">
                                    <img src={images.notFound} alt="iamge not found" className='mt-5' />
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
                jenisLaporan='Laporan'
            />
        </Layout>
    )
}

export default LaporanTransaksi;