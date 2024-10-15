import images from "../../Image";
import './LogoutButton.css'

const LogoutButton = () => {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button type="button" className="btn btn-logout-profile d-flex justify-content-center align-items-center">
                    <img src={images.logoutButtonImg} alt="" />
                    Logout Aplikasi
                </button>
            </div>
        </div>
    )
}

export default LogoutButton;