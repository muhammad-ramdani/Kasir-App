import './Pengaturan.css'
import Layout from '../../Layout/Layout';
import ToggleSwitch from '../../compenents/ToogleSwitch/ToogleSwitch';

const PengaturanStruk: React.FC = () => {
    return (
        <Layout titlePage='Pengaturan Struk'>
            <div className="container">
                <div className="row">
                    {/* sebelah kiri(toogle) */}
                    <div className="col-6 col-switch-struk mb-5">
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan Logo'
                            />
                            <div className="row d-flex justify-content-center">
                                <div className="col-10">
                                    <label htmlFor="panjang-logo" className="form-label label-logo-karakter">
                                        Panjang Logo (Karakter)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control input-logo-karakter"
                                        id="panjang-logo"
                                        placeholder="Masukkan panjang karakter..."
                                    />
                                </div>
                                <div className="col-10">
                                    <label htmlFor="panjang-canvas" className="form-label label-logo-karakter">
                                        Panjang Canvas Logo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control input-logo-karakter"
                                        id="panjang-canvas"
                                        placeholder="Masukkan panjang karakter..."
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Cetak Struk Otomatis'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan Kode Struk'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan No Urut'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan No Struk'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan Total Item'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan Total QTY'
                            />
                        </div>
                        <div className="switch-struk">
                            <ToggleSwitch
                                label='Tampilkan Total Harga'
                            />
                        </div>
                    </div>
                    {/* sebelah kanan(preview) */}
                    <div className="col-6 d-flex flex-column justify-content-between">
                        <div className="title-atas">
                            <h5 className='title-preview'>Preview Struk</h5>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="struk-preview">
                                <div className="col-10">
                                    <div className="title-struk border-dash-struk">
                                        <h2 className='text-center toko-brain'>Toko braincode</h2>
                                        <h5 className='text-center jalan-brain'>Jl. Sidamukti, No 122, Sokaraja kulon</h5>
                                        <p className='text-center kode-pos'>53209883</p>
                                    </div>
                                    <div className="item-struk border-dash-struk mt-2">
                                        <div className="row">
                                            <div className="col-10">
                                                <p className='item-left text-start mb-0'>2024-10-03</p>
                                                <p className='item-left text-start'>06:27:56</p>
                                            </div>
                                            <div className="col-2">
                                                <p className='item-right text-end'>Erida</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-desc border-dash-struk mt-2">
                                        <div className="row">
                                            <div className="col-9">
                                                <p className='item-left text-start mb-0'>Boom Deterjen Cair Lavender 150ml</p>
                                                <p className='item-left text-start'>1 × Rp 28.500</p>
                                            </div>
                                            <div className="col-3 d-flex flex-column justify-content-end">
                                                <p className='item-right text-end'>Rp 28.500</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-struk-total border-dash-struk mt-2">
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start mb-0'>TOTAL ITEM :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end mb-0'>2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start mb-0'>TOTAL QTY :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end mb-0'>2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start mb-0'>TOTAL HARGA :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end'>Rp. 57.000,00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-struk-total mt-2">
                                        <div className="row">
                                            <p className='pembayaran-label text-center'>PEMBAYARAN</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start mb-0'>CASH :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end mb-0'>Rp. 57.000,00</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start mb-0'>JUMLAH BAYAR :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end mb-0'>Rp. 57.000,00</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <p className='item-left text-start'>KEMBALI :</p>
                                            </div>
                                            <div className="col-5">
                                                <p className='item-right text-end'>Rp. 0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-footer mt-5">
                                        <div className="row text-center">
                                            <p className='terimakasih'>TERIMA KASIH SUDAH <br />BERBELANJA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-row justify-content-end mb-5">
                            <button type='button' className='btn btn-danger w-25'>Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PengaturanStruk;
