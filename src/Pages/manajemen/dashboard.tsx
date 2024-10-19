import './dashboard-css.css';
import dataBarang from "../../assets/imagesManagemenAll/img-data-barang.svg";
import kategoriBarang from "../../assets/imagesManagemenAll/kategori-barang.svg";
import dataPelanggan from "../../assets/imagesManagemenAll/data-pelanggan.svg";
import dataSupplier from "../../assets/imagesManagemenAll/data-supplier.svg";
import diskonBarang from "../../assets/imagesManagemenAll/diskon-barang.svg";
import stokBarang from "../../assets/imagesManagemenAll/stok-barang.svg";
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const onClickToPageManajemenDataBarang = () => {
        navigate("/databarang");
    };

    const onClickToPageManajemenKategoriBarang = () => {
        navigate("/kategori-barang");
    };

    const onClickToPageManajemenDataPelanggan = () => {
        navigate("/data-pelanggan");
    };

    const onClickToPageManajemenDataSupplier = () => {
        navigate("/data-supplier");
    };

    const onClickToPageManajemenDiskonBarang = () => {
        navigate("/diskon-barang");
    };

    return (
        <>
            <Layout titlePage='Manajemen'>
                <div className="container  py-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col col-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Data Barang / Produk</h5>
                                            <p className="card-text mb-5">
                                                Tambahkan barang atau jasa yang anda miliki untuk pengelolaan yang lebih akurat.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={dataBarang} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button" onClick={onClickToPageManajemenDataBarang}>
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Kategori Barang</h5>
                                            <p className="card-text mb-5">
                                                Kelola barang dengan kategori tertentu untuk memudahkan manajemen produk.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={kategoriBarang} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button" onClick={onClickToPageManajemenKategoriBarang}>
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Data Pelanggan</h5>
                                            <p className="card-text mb-5">
                                                Kelola informasi pelanggan atau member dengan mudah dan pantau dengan efisien.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={dataPelanggan} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button" onClick={onClickToPageManajemenDataPelanggan}>
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Data Supplier</h5>
                                            <p className="card-text mb-5">
                                                Simpan data supplier anda secara teratur, untuk memastikan alur pasokan tetap lancar.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={dataSupplier} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button" onClick={onClickToPageManajemenDataSupplier}>
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Diskon Barang</h5>
                                            <p className="card-text mb-5">
                                                Buat potongan harga/diskon produk, baik berupa persentase atau nominal.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={diskonBarang} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button" onClick={onClickToPageManajemenDiskonBarang}>
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="card-title">Stok Barang</h5>
                                            <p className="card-text mb-5">
                                                Kelola stok barang anda dengan mudah dan pantau stok secara real-time disini.
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <img src={stokBarang} className="float-end" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-danger fw-semibold mt-2" role="button">
                                            Atur sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;
