import images from "../../Image";
import Layout from "../../Layout/Layout";
import './Pengaturan.css'

const PerangkatEdc = () => {
    return (
        <Layout titlePage="Perangkat EDC">
            <div className="perangkat-edc-wrap">
                <div className="perangkat-edc">
                    <div className="row d-flex justify-content-center">
                        <div className="header-perangkat-edc">
                            <p className="desc-edc mb-0">Belum pernah terhubung EDC? <span className="text-danger"> Ajukan di sini</span></p>
                            <img src={images.edc} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="data-edc">
                            <p className="data-edc-desc">belum ada data</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-add">
                            <button type="button" className="btn btn-edc">Tambahkan Perangkat</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PerangkatEdc;