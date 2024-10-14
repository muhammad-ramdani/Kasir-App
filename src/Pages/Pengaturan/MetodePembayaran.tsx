import ToggleSwitch from "../../compenents/ToogleSwitch/ToogleSwitch";
import Layout from "../../Layout/Layout";

const MetodePembayaran = () => {
    return (
        <Layout titlePage="Metode Pembayaran">
            <div className="container d-flex justify-content-center">
                <div className="metode-pembayaran-wrap">
                    <div className="row metode-pembayaran-content d-flex flex-column align-items-center">
                        <div className="col-8">
                            <h5 className="title-metode-pembayaran">Tambah Metode Pembayaran</h5>
                            <div className="tambah-metode d-flex justify-content-between align-items-center mt-3">
                                <input
                                    type="text"
                                    className="form-control input-tambah-metode-pembayaran d-inline"
                                    id="text-tambah"
                                    placeholder=""
                                />
                                <button type="button" className="btn btn-tambah">Tambah</button>
                            </div>

                            <h5 className="title-metode-pembayaran mt-3">Metode Default</h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="pembayaran">
                                        <ToggleSwitch
                                            label="Cash"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pembayaran">
                                        <ToggleSwitch
                                            label="Cash"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="pembayaran">
                                        <ToggleSwitch
                                            label="Cash"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pembayaran">
                                        <ToggleSwitch
                                            label="Cash"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="pembayaran">
                                        <ToggleSwitch
                                            label="Cash"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pembayaran d-flex justify-content-between align-items-center ps-5">
                                        <div className="left-bca d-inline">
                                            EDC BCA
                                        </div>
                                        <div className="right-bca text-danger d-inline">
                                            Sambungkan
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="title-metode-pembayaran mt-3 metode-tambahan">Metode Tambahan</h5>
                        </div>
                        <div className="col-12 metode-pembayaran-button d-flex flex-row justify-content-center">
                            <button type="button" className="btn btn-metode-pembayaran">Simpan</button>
                        </div>
                    </div>

                </div>
            </div>

        </Layout >
    )
}

export default MetodePembayaran;