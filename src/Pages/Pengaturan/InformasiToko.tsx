import images from "../../Image";
import Layout from "../../Layout/Layout";

const InformasiToko = () => {
    return (
        <Layout titlePage="Informasi Toko">
            <div className="wrap-image-profile d-flex justify-content-center">
                <img src={images.profileToko} alt="" className="image-profile-toko" />
            </div>
            <div className="wrap-card d-flex justify-content-center mt-3">
                <div className="card card-informasi-toko">
                    <div className="card-body">
                        <div className="informasi-label">
                            <p className="label-info mb-0">Jenis Usaha:</p>
                            <h5 className="value-info">Barang Rumah Tangga</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Nama Toko:</p>
                            <h5 className="value-info">Ramdani Toko</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Nama Pemilik:</p>
                            <h5 className="value-info">Muhammad Ramdani</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Nomor Telepon:</p>
                            <h5 className="value-info">+62  748 87428 </h5>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button type="button" className="btn btn-edit-info d-flex justify-content-center align-items-center">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-card d-flex justify-content-center mt-3">
                <div className="card card-informasi-toko">
                    <div className="card-body">
                        <div className="informasi-label">
                            <p className="label-info mb-0">Lokasi Toko:</p>
                            <h5 className="value-info">Mandailing Natal, Sumut, Indonesia</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Metode Akuntansi:</p>
                            <h5 className="value-info">FIFO</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Status Olshopin:</p>
                            <h5 className="value-info">Tampilkan Katalog & Terima Order</h5>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button type="button" className="btn btn-edit-info d-flex justify-content-center align-items-center">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default InformasiToko;