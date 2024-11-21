import LogoutButton from "../../components/LogoutButton/LogoutButton";
import images from "../../Image";
import Layout from "../../Layout/Layout";

const Profile = () => {
    return (
        <Layout titlePage="Profil">
            <div className="wrap-image-profile d-flex justify-content-center">
                <img src={images.profileToko} alt="" className="image-profile-toko" />
            </div>
            <div className="wrap-card d-flex justify-content-center mt-3">
                <div className="card card-informasi-toko">
                    <div className="card-body">
                        <div className="informasi-label">
                            <p className="label-info mb-0">Nama:</p>
                            <h5 className="value-info">Muhammad Ramdani</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Kode Refferal:</p>
                            <h5 className="value-info">11232432</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Role:</p>
                            <h5 className="value-info">Admin</h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Email:</p>
                            <h5 className="value-info">ramdani@gmail.com </h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Telepon:</p>
                            <h5 className="value-info">+62  748 87428 </h5>
                        </div>
                        <div className="informasi-label">
                            <p className="label-info mb-0">Alamat:</p>
                            <h5 className="value-info">Banyumas, Jawa Tengah </h5>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;