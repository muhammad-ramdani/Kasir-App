import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./stock-opname.css";
import calenderGrey from "../../assets/assetStockOpname/calendar-grey.svg";
import calenderWhite from "../../assets/assetStockOpname/calendar-search-white.svg";

function StockOpname() {
  return (
    <Layout titlePage="Stock Opname">
      <div className="container-fluid container-stock-opname">
        {/* Header button */}
        <div className="row mb-4 mt-5">
          <div className="col-12 text-start">
            <button className="btn btn-danger btn-tambah-stok-stock-opname">+ Tambah Stok Barang</button>
          </div>
        </div>

        {/* Card Section for Filter and Table */}
        <div className="card card-stock-opname m-5">
          <div className="card-body">
            {/* Filter Section */}
            <div className="row ">
              <div className="col-md-6 col-sm-12 d-flex align-items-center filter-stock-opname">
                {/* Button for Date Range */}
                <button className="btn btn-outline-secondary btn-date-range-stock-opname">
                  <img src={calenderGrey} alt="calender-grey" className="calender-grey" />
                  2 October 2024 - 2 October 2024
                </button>
                {/* Button for Calendar */}
                <button className="btn btn-outline-secondary btn-kalender-stock-opname ms-3">
                  <img src={calenderWhite} alt="calender-white" className="calender-white"/>
                  Kalender
                  </button>
              </div>
            </div>

            {/* Table Section */}
            <div className="table-responsive table-container-stock-opname">
              <table className=" table-stock-opname">
                <thead className="table-light">
                  <tr>
                    <th>Tanggal</th>
                    <th>Nama Staff</th>
                    <th>Sebagai</th>
                    <th>Keterangan</th>
                    <th>Tanggal Disesuaikan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>02-10-2024</td>
                    <td>Andi Mulyadi</td>
                    <td>Admin</td>
                    <td>Beng Beng 25 Gr 100 Stok</td>
                    <td>02-10-2024</td>
                    <td className="actions-stock-opname">
                      <Link to="/detail-stock-opname">
                        <button className="btn btn-success btn-sm me-2">Detail</button>
                      </Link>

                      <button className="btn btn-secondary btn-sm me-2">Download</button>
                      <button className="btn btn-danger btn-sm">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>02-10-2024</td>
                    <td>Andi Mulyadi</td>
                    <td>Admin</td>
                    <td>Beng Beng 25 Gr 100 Stok</td>
                    <td>02-10-2024</td>
                    <td className="actions-stock-opname">
                      <button className="btn btn-success btn-sm me-2">Detail</button>
                      <button className="btn btn-secondary btn-sm me-2">Download</button>
                      <button className="btn btn-danger btn-sm">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>02-10-2024</td>
                    <td>Andi Mulyadi</td>
                    <td>Admin</td>
                    <td>Beng Beng 25 Gr 100 Stok</td>
                    <td>02-10-2024</td>
                    <td className="actions-stock-opname">
                      <button className="btn btn-success btn-sm me-2">Detail</button>
                      <button className="btn btn-secondary btn-sm me-2">Download</button>
                      <button className="btn btn-danger btn-sm">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>02-10-2024</td>
                    <td>Andi Mulyadi</td>
                    <td>Admin</td>
                    <td>Beng Beng 25 Gr 100 Stok</td>
                    <td>02-10-2024</td>
                    <td className="actions-stock-opname">
                      <button className="btn btn-success btn-sm me-2">Detail</button>
                      <button className="btn btn-secondary btn-sm me-2">Download</button>
                      <button className="btn btn-danger btn-sm">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>02-10-2024</td>
                    <td>Andi Mulyadi</td>
                    <td>Admin</td>
                    <td>Beng Beng 25 Gr 100 Stok</td>
                    <td>02-10-2024</td>
                    <td className="actions-stock-opname">
                      <button className="btn btn-success btn-sm me-2">Detail</button>
                      <button className="btn btn-secondary btn-sm me-2">Download</button>
                      <button className="btn btn-danger btn-sm">Hapus</button>
                    </td>
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

export default StockOpname;
