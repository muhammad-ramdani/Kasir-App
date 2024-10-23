import CardPengaturan from "../../compenents/CardPengaturan/CardPengaturan";
import LogoutButton from "../../compenents/LogoutButton/LogoutButton";
import images from "../../Image";
import Layout from "../../Layout/Layout";
import './Pengaturan.css'


const Pengaturan = () => {
    const DataCardPengaturan = [
        {
            iconPengaturan: images.pengaturan1,
            description: "Informasi Toko",
            link: '/informasi-toko'
        },
        {
            iconPengaturan: images.pengaturan2,
            description: "Metode Pembayaran",
            link: '/metode-pembayaran'
        },
        {
            iconPengaturan: images.pengaturan3,
            description: "Profil",
            link: '/profile'
        },
        {
            iconPengaturan: images.pengaturan4,
            description: "Perangkat EDC",
            link: '/perangkat-edc'
        },
        {
            iconPengaturan: images.pengaturan5,
            description: "Pengaturan Struk",
            link: '/pengaturan-struk'
        },
    ]
    return (
        <Layout titlePage="Pengaturan">
            <div className="container container-pengaturan mt-4">
                <div className="row">
                    {DataCardPengaturan.map((item, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <CardPengaturan
                                iconPengaturan={item.iconPengaturan}
                                description={item.description}
                                link={item.link}
                            />
                        </div>
                    ))}
                </div>

                <div className="logout-btn mt-4">
                    <LogoutButton />
                </div>
            </div>
        </Layout>
    );
}

export default Pengaturan;