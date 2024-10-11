import Card from "../../compenents/card/card";
import images from "../../Image";
import Layout from "../../Layout/Layout";

const Laporan = () => {
    const CardData = [
        {
            title: "Laporan Transaksi",
            description: "Pantau dan unduh laporan transaksi harian, mingguan, atau bulanan dengan mudah untuk analisis penjualan yang lebih akurat.",
            icon: <img src={images.shopping} alt="Icon 1" />
        },
        {
            title: "Laporan Pembelian Barang",
            description: "Lihat ringkasan pembelian dari supplier secara real-time, dan unduh laporan untuk analisis lebih lanjut",
            icon: <img src={images.shopping} alt="Icon 2" />
        },
        {
            title: "Laporan Persediaan Barang",
            description: "Pantau persediaan barang secara efisien dengan laporan terperinci yang memastikan stok tetap optimal sesuai kebutuha.",
            icon: <img src={images.shopping} alt="Icon 3" />
        },
        {
            title: "Laporan Pelanggan",
            description: "Laporan pelanggan membantu Anda melacak interaksi dan riwayat pembelian.",
            icon: <img src={images.shopping} alt="Icon 4" />
        }
    ];

    return (
        <Layout titlePage="Laporan">
            <div className="container py-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {CardData.map((card, index) => (
                        <div className="col col-card" key={index}>
                            <Card
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Laporan;