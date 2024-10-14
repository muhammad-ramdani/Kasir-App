import "./styleManajemenKategoriBarang.css";
import Layout from "../../Layout/Layout";
import { useState, useEffect } from "react";

function KategoriBarang() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1440);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Layout titlePage="Kategori Barang">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "30px" }}>
                    <div className="col p-0">
                        <div className="card rounded-4 height-calc-100vh-151px">
                            <div className="card-body card-body-padding-23px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="card rounded-4 height-calc-100vh-151px">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default KategoriBarang
