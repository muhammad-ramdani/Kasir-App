import './Laporan.css'
import Layout from "../../Layout/Layout"
import CardTotal from '../../compenents/CardTotal/CardTotal';
import SearchLaporan from '../../compenents/SearchLaporan/SearchLaporan';
import { Link } from 'react-router-dom';
import images from '../../Image';

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
                        <SearchLaporan />
                    </div>
                    <div className="col-3">
                        <button className='btn btn-danger w-100'>Rentang Tanggal</button>
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
                                    <Link to="/" className="dropdown-item">
                                        PDF
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="dropdown-item">
                                        Excel
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
        </Layout>
    )
}

export default LaporanTransaksi;