import React from "react";
import "./Layout.css";
import images from "../Image";
import { Link } from "react-router-dom";

interface LayoutProps {
    children: React.ReactNode;
    titlePage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, titlePage }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isProfileModalVisible, setProfileModalVisible] = React.useState(false);

    // function handle click notification
    const handleNotificationClick = () => {
        setModalVisible(!isModalVisible);
    };

    // function handle click profile
    const handleClickProfile = () => {
        setProfileModalVisible(!isProfileModalVisible);
    };

    // Fungsi untuk menutup modal profil ketika klik di luar modal
    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("modal")) {
            setProfileModalVisible(false);
        }
    };

    return (
        <div className="container-fluid container-main">
            <div className="row">
                <div className="col-1 bg-light sidebar  d-flex justify-content-center">
                    <div className="icon-sidebar">
                        <section className="section-logo mb-3">
                            <img src={images.logo} alt="" className="image-logo" />
                        </section>
                        {/* section main */}
                        <section className="section-main mb-3">
                            <p className="p-section-main">Main</p>

                            <div className="logo-sidebar">
                                <Link to="/dashboard">
                                    <img src={images.coin} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/transaksi">
                                    <img src={images.dollar} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/laporan">
                                    <img src={images.laporan} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/shift">
                                    <img src={images.shift} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/stock-opname">
                                    <img src={images.stock} alt="" className="img-logo" />
                                </Link>
                            </div>
                        </section>
                        <hr />

                        {/* section more */}
                        <section className="section-main mb-2">
                            <p className="p-section-main">More</p>

                            <div className="logo-sidebar">
                                <Link to="/">
                                    <img src={images.user} alt="" className="img-logo" />
                                </Link>
                            </div>

                            <div className="logo-sidebar">
                                <Link to="/pengaturan">
                                    <img src={images.setting} alt="" className="img-logo" />
                                </Link>
                            </div>
                        </section>

                        {/* section logout */}
                        <section className="section-main logout-section">
                            <div className="logo-sidebar">
                                <Link to="/">
                                    <img src={images.logout} alt="" className="img-logo" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="col">
                    <header className="header-menu" style={{ padding: "0px 18px", margin: "5px 0px" }}>
                        <div className="header-left">
                            {/* Hamburger Button */}
                            <button className="btn button-hamburger px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                                <img src={images.hamburger} alt="hamburger menu" className="hamburger-menu" />
                            </button>
                            <span className="title-page">{titlePage}</span>
                        </div>
                        <div className="header-right">
                            <button
                                className="btn btn-notification"
                                onClick={handleNotificationClick}
                            >
                                <img src={images.notification} alt="" className="me-2" />
                                Notifikasi <span>(0)</span>
                            </button>

                            <img src={images.person} alt="user" className="ms-3" onClick={handleClickProfile} />
                        </div>
                    </header>
                    <hr style={{ margin: "0px 18px 16px 18px" }} />

                    {/* Offcanvas Sidebar */}
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
                        <div className="offcanvas-header d-flex align-items-center justify-content-start">
                            <section className="section-logo mb-3 d-flex align-items-center justify-content-center">
                                <img src={images.logo} alt="" className="image-logo mt-0 mb-0 me-2" />
                                <span className="header-logo mt-0 mb-0">Kasir Jempolan</span>
                            </section>
                        </div>
                        <div className="offcanvas-body">
                            {/* Sidebar content inside Offcanvas */}
                            <section className="section-main-offcanvas mb-3">
                                <div className="">
                                    <p className="p-section-main-offcanvas">Main</p>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/dashboard" className="text-decoration-none text-dark">
                                        <img src={images.coin} alt="" className="img-logo" />
                                        <span className="ms-2">Manajemen</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/transaksi" className="text-decoration-none text-dark">
                                        <img src={images.dollar} alt="" className="img-logo" />
                                        <span className="ms-2">Transaksi</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/laporan" className="text-decoration-none text-dark">
                                        <img src={images.laporan} alt="" className="img-logo" />
                                        <span className="ms-2">Laporan</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/shift" className="text-decoration-none text-dark">
                                        <img src={images.shift} alt="" className="img-logo" />
                                        <span className="ms-2">Shifts</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/stock-opname" className="text-decoration-none text-dark">
                                        <img src={images.stock} alt="" className="img-logo" />
                                        <span className="ms-2">Stock Opname</span>
                                    </Link>
                                </div>
                                <hr />
                            </section>

                            <section className="section-main-offcanvas mb-2">
                                <p className="p-section-main-offcanvas">More</p>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={images.user} alt="" className="img-logo" />
                                        <span className="ms-2">Akun Saya</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/pengaturan" className="text-decoration-none text-dark">
                                        <img src={images.setting} alt="" className="img-logo" />
                                        <span className="ms-2">Pengaturan</span>
                                    </Link>
                                </div>
                            </section>
                            {/* section logout */}
                            <section className="section-main-offcanvas logout-section-offcanvas">
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={images.logout} alt="" className="img-logo" />
                                        <span className="ms-2">Keluar</span>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Modal Notifikasi */}
                    <div className={`modal fade ${isModalVisible ? "show" : ""}`} style={{ display: isModalVisible ? "block" : "none" }} tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-scrollable modal-notification" style={{ position: "absolute", top: "60px", right: "20px" }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <img src={images.notification} alt="" className="me-2" />
                                        Notifikasi Anda<span>(0)</span>
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <p>Ini adalah contoh notifikasi.</p>
                                    <p>Notifikasi lain dapat ditambahkan di sini.</p>
                                </div>
                                <div className="modal-footer footer-modal-notification">
                                    <button type="button" className="btn-close" onClick={handleNotificationClick}></button> Tutup
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Profil */}
                    <div
                        className={`modal fade ${isProfileModalVisible ? "show" : ""}`}
                        style={{ display: isProfileModalVisible ? "block" : "none" }}
                        tabIndex={-1}
                        onClick={handleCloseModal} // Add this line
                    >
                        <div className="modal-dialog modal-dialog-scrollable modal-profile" style={{ position: "absolute", top: "60px", right: "20px" }}>
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="mb-3 profile-wrap">
                                        <h5 className="h5-profile">Akun Saya</h5>
                                        <img src={images.person} alt="user" className="img-fluid rounded-circle img-profile" style={{ width: "50px", height: "50px" }} />
                                        <p className="mb-0 name-profile">John Doe</p>
                                        <p className="mb-0">johndoe@example.com</p>
                                    </div>
                                    <div className="modal-footer">
                                        <Link to="/" className="text-decoration-none text-dark">
                                            <div className="edit-modal">
                                                <img src={images.edit} alt="edit icon" className="me-3" />
                                                <p className="mt-0 mb-0">Edit Profile</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="modal-footer">
                                        <Link to="/" className="text-decoration-none text-dark">
                                            <div className="logout-modal">
                                                <img src={images.logout} alt="logout icon" className="me-3" />
                                                <p className="mt-0 mb-0">Keluar</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
