// import "./styleAllManajemen.css";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import logoExportDataWhite from "../../assets/imagesAllManajemen/logo-export-data-white.svg";
import logoImportData from "../../assets/imagesAllManajemen/logo-import-data.svg";
import searchNormalManajemen from "../../assets/imagesAllManajemen/logo-search-normal-manajemen.svg";
import logoEditManajemenGreen from "../../assets/imagesAllManajemen/logo-edit-manajemen-green.svg";
// import chitato from "../../assets/imagesAllManajemen/chitato.png";
import imageNoData from "../../assets/imagesAllManajemen/gambar-no-data-manajemen.svg";
import EditStokBarang from "./editStokBarang";
import apiName from "../../api/api";
import PaginationFix from "../../components/pagination-fix/paginationFix";

interface Product {
  ID: number;
  Name: string;
  ProductType: string;
  ProductFileName: string;
  BasePrice: number;
  SellingPrice: number;
  Stock: number;
  CodeProduct: string;
  CategoryID: number;
  MinimumStock: number;
  Shelf: string;
  Weight: number;
  Discount: number;
  Information: string;
}

interface Stock {
  id: number;
  product_id: number;
  quantity: number;
  base_price: number;
  selling_price: number;
  date: string;
  description: string;
  product: Product; // Relasi dengan Product
}

function StockBarang() {
  const [dataStock, setDataStock] = useState<Stock[]>([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
  // category
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  // search
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Stock[]>([]);
  // edit stok barang
  const [selectedStockId, setSelectedStockId] = useState<number>(0);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // fetching data form api(stocks)
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await apiName.get("/stocks", {
          params: {
            limit: dataPerPage,
            offset: (currentPage - 1) * dataPerPage,
          }
        });
        console.log(response.data.data);

        // ambil data pagination dari response be
        const { data: stocks, pagination } = response.data.data;
        // Set data stocks langsung ke state
        setDataStock(stocks);
        setTotalPages(pagination.total_pages);
        setCurrentPage(pagination.current_page)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchingData();
  }, [currentPage, dataPerPage])

  // fetching data form api (category)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiName.get("/categories");
        setCategories(response.data.data); // Simpan daftar kategori
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // menmcari category id === category name
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  // search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(dataStock);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = dataStock.filter((stock) =>
        stock.product.Name.toLowerCase().includes(lowercaseQuery) ||
        stock.product.CodeProduct.toLowerCase().includes(lowercaseQuery) ||
        stock.product.ProductType.toLowerCase().includes(lowercaseQuery) ||
        stock.product.ProductFileName.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, dataStock])



  return (
    <Layout titlePage="Stok Barang">
      <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
        <div className="row m-0" style={{ columnGap: "12px" }}>
          <div className="col-auto p-0">
            <button type="button" className="btn focus-ring-none-stok-barang-manajemen fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 27.66px", backgroundColor: "#FF0000", color: "#ffff" }}>
              <img src={logoExportDataWhite} style={{ marginTop: "-4px", marginRight: "10px" }} />
              Export Data
            </button>
          </div>
          <div className="col-auto p-0">
            <button type="button" className="btn focus-ring-none-stok-barang-manajemen bg-white fw-medium rounded-3" style={{ borderColor: "#EDEDED", padding: "11px 25.41px" }}>
              <img src={logoImportData} style={{ marginTop: "-4px", marginRight: "10px" }} />
              Import Data
            </button>
          </div>
          <div className="col-auto p-0 ms-auto">
            <div className="input-group flex-nowrap mt-0" style={{ width: "350px" }}>
              <img src={searchNormalManajemen} className="input-group-text bg-white rounded-start-3" style={{ borderColor: "#EDEDED" }} />
              <input
                type="text"
                className="form-control focus-ring-none-stok-barang-manajemen font-size-16px-stok-barang-manajemen placeholder-font-size-16px-color-8E8E8E-stok-barang-manajemen border-start-0 rounded-end-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Barang.."
                style={{ borderColor: "#EDEDED", padding: "11px 12px 11px 0px" }}
              />
            </div>
          </div>
        </div>
        <div className="card rounded-4" style={{ borderColor: "#EDEDED", height: "calc(100vh - 233px)", margin: "30px 0px 4px 0px" }}>
          <div className="rounded-4" style={{ background: "linear-gradient(to bottom, #ECEFF8 68px, transparent 68px)", padding: "22px 31px 22px 31px" }}>
            <table className="table mb-0">
              <thead>
                <tr>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopLeftRadius: "15px" }}>
                    Nama Barang
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Kode
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Kategori
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Stok
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Harga Jual(Rp)
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px" }}>
                    Harga Dasar(Rp)
                  </th>
                  <th className="fw-medium" style={{ padding: "0px 0px 22px 0px", backgroundColor: "transparent", borderBottom: "0px", borderTopRightRadius: "15px" }} scope="col-auto">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: "15px 0", display: "flex", alignItems: "center" }}>
                      {/* Menampilkan gambar di samping nama barang */}
                      <img src={item.product.ProductFileName ? `http://68.183.103.154/${item.product.ProductFileName}` : ""} alt={item.product.Name} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                      {item.product.Name}
                    </td>
                    <td style={{ padding: "15px 0" }}>{item.product.CodeProduct}</td>
                    <td style={{ padding: "15px 0" }}>{getCategoryName(item.product.CategoryID)}</td>
                    <td style={{ padding: "15px 0" }}>{item.product.Stock}</td>
                    <td style={{ padding: "15px 0" }}>{item.product.SellingPrice}</td>
                    <td style={{ padding: "15px 0" }}>{item.product.BasePrice}</td>
                    <td style={{ padding: "15px 0", textAlign: "center" }}>
                      <button
                        type="button"
                        className="btn btn-sm border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditDataSupplierDimanajemenDataSupplier"
                        style={{ backgroundColor: "#E6FDF4", color: "#00C17A", marginRight: "10px" }}
                        onClick={() => setSelectedStockId(item.id)} // Set ID stok yang akan diedit
                      >
                        <img src={logoEditManajemenGreen} alt="edit" /> Edit
                      </button>

                      <button type="button" className="btn btn-sm border-0" style={{ backgroundColor: "#F2F4FA", fontWeight: "500" }}>
                        Log
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredData.every((item) => !item.product.Name && !item.product.CodeProduct && !item.product.CategoryID && !item.product.Stock && !item.product.SellingPrice && !item.product.BasePrice) && (
                  <td className="text-center ps-0 align-middle" colSpan={7} style={{ height: "calc(100vh - 305px)" }}>
                    <img src={imageNoData} />
                    <p className="mb-0 fw-medium" style={{ color: "#CECECE", fontSize: 18 }}>
                      Data tidak ditemukan
                    </p>
                  </td>
                )}
              </tbody>
            </table>
          </div>
          {/* pagination */}
          <PaginationFix
            currentPage={currentPage}
            totalPages={totalPages}
            dataPerPage={dataPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onDataPerPageChange={(limit) => {
              setDataPerPage(limit);
              setCurrentPage(1); // Reset ke halaman 1 setiap kali jumlah data per halaman berubah
            }}
          />

        </div>
      </div>
      {selectedStockId !== null && <EditStokBarang stockId={selectedStockId} />}
    </Layout>
  );
}

export default StockBarang;
