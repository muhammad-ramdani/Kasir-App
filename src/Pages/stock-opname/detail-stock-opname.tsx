
import Layout from "../../Layout/Layout";
import "./stock-opname.css";


function DetailStockOpname() {
  return (
    <Layout titlePage="Detail Stock Opname">
      <div className="container-fluid container-detail-stock-opname">
        {/* Header button */}
        <div className="row mb-4 mt-5">
          <div className="col-12 text-start">
            <button className="btn btn-danger btn-tambah-stok-detail-stock-opname">
            Sesuaikan Stok
            </button>
            <p className="text-detail-stock-opname mt-3" style={{ color: "#897777", fontSize: "14px"}}>
              *Barang Varian & IMEI Tidak Bisa melakukan penyesuaian stok
            </p>
          </div>
        </div>

        {/* Card Section for Filter and Table */}
        <div className="card card-detail-stock-opname m-5">
          <div className="card-body card-body-detail-stock-opname">
            {/* Filter Section */}
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center filter-detail-stock-opname">
                {/* Button for Date Range */}
                <button className="btn btn-outline-secondary btn-date-range-detail-stock-opname">
                  Keterangan :beng beng 25 gr 100 stok
                </button>
              </div>
            </div>

            {/* Table Section */}
            <div className="table-responsive table-container-detail-stock-opname">
              <table className="table-detail-stock-opname">
                <thead className="table-light">
                  <tr>
                    <th>Kode</th>
                    <th>Nama Barang</th>
                    <th>Tipe Barang</th>
                    <th>Stok sistem</th>
                    <th>Stok fisik</th>
                    <th>Selisih</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>004</td>
                    <td>Boom Deterjen Cair Lavender 510 ml</td>
                    <td>Default</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Boom Deterjen Cair Lavender 510 ml</td>
                    <td>Default</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Boom Deterjen Cair Lavender 510 ml</td>
                    <td>Default</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailStockOpname;
