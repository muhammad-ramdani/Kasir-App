import Card from "../../components/Card/Card";
import images from "../../Image";
import Layout from "../../Layout/Layout";

const Laporan = () => {
    const CardData = [
        {
            title: "Laporan Transaksi",
            description: "Pantau dan unduh laporan transaksi harian, mingguan, atau bulanan dengan mudah untuk analisis penjualan yang lebih akurat.",
            icon: <img src={images.laporan1} alt="Icon 1" />,
            link: '/laporan-transaksi'
        },
        {
            title: "Laporan Pembelian Barang",
            description: "Lihat ringkasan pembelian dari supplier secara real-time, dan unduh laporan untuk analisis lebih lanjut",
            icon: <img src={images.laporan2} alt="Icon 2" />,
            link: '/laporan-pembelian-barang'
        },
        {
            title: "Laporan Persediaan Barang",
            description: "Pantau persediaan barang secara efisien dengan laporan terperinci yang memastikan stok tetap optimal sesuai kebutuha.",
            icon: <img src={images.laporan3} alt="Icon 3" />,
            link: '/laporan-persediaan-barang'
        },
        {
            title: "Laporan Pelanggan",
            description: "Laporan pelanggan membantu Anda melacak interaksi dan riwayat pembelian.",
            icon: <img src={images.laporan4} alt="Icon 4" />,
            link: '/laporan-pelanggan'
        }
    ];

    return (
        <Layout titlePage="Laporan">
            <div className="container">
                {/* Grid system Bootstrap */}
                <div className="row g-4">
                    {CardData.map((card, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <Card
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                                link={card.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Laporan;
