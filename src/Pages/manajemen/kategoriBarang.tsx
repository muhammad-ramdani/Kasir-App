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

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Layout titlePage="Kategori Barang">
            <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
                <div className="row m-0" style={{ columnGap: "30px" }}>
                    <div className="col p-0">
                        <div className="card rounded-4">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="card rounded-4">
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
