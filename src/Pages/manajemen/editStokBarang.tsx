import { useEffect, useState } from "react";
import logoEditManajemenDark22 from "../../assets/imagesAllManajemen/logo-edit-manajemen-dark-22.svg";
import "./styleAllManajemen.css";
import apiName from "../../api/api";

interface Product {
  id: number;
  name: string;
  product_type: string;
  image_url: string;
  base_price: number;
  selling_price: number;
  stock: number;
  code_product: string;
  category_id: number;
  minimum_stock: number;
  shelf: string;
  weight: number;
  discount: number;
  information: string;
  created_at: string;
  updated_at: string;
}

interface Stock {
  id: number;
  product_id: number;
  product: Product;
  quantity: number;
  base_price: number;
  selling_price: number;
  date: string;
  description: string;
}

interface EditStokBarangProps {
  stockId?: number;
}

function EditStokBarang({ stockId }: EditStokBarangProps) {
  const [stockData, setStockData] = useState<Stock | null>(null);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({
    date: "",
    base_price: 0,
    quantity: 0,
    description: "",
  });

  useEffect(() => {
    const fetchStockData = async () => {
      if (!stockId || stockId === 0) return;

      try {
        setLoading(true);
        const response = await apiName.get(`/stocks/${stockId}`);
        const stockResponse: Stock = {
          id: response.data.data.id,
          product_id: response.data.data.product_id,
          product: response.data.data.product,
          quantity: response.data.data.quantity,
          base_price: parseFloat(response.data.data.base_price),
          selling_price: parseFloat(response.data.data.selling_price),
          date: response.data.data.date,
          description: response.data.data.description,
        };
        setStockData(stockResponse);
        setFormValues({
          date: stockResponse.date,
          base_price: stockResponse.base_price,
          quantity: stockResponse.quantity,
          description: stockResponse.description,
        });
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [stockId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: id === "base_price" || id === "quantity" ? parseFloat(value) : value,
    }));
  };

  const handleUpdateStock = async () => {
    if (!stockId) return;

    try {
      setLoading(true);
      const formattedDate = `${formValues.date}T00:00:00Z`;
      const response = await apiName.put(`/stocks/${stockId}`, {
        product_id: stockData?.product_id,
        date: formattedDate, 
        base_price: formValues.base_price,
        quantity: formValues.quantity,
        description: formValues.description,
      });
      console.log("Stock updated successfully:", response.data);
      alert("Data stok berhasil diperbarui.");
    } catch (error) {
      console.error("Error updating stock:", error);
      alert("Gagal memperbarui data stok.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!stockData) {
    return <p className="text-center">Data tidak ditemukan.</p>;
  }

  const { product } = stockData;

  return (
    <div
      className="modal fade"
      id="modalEditDataSupplierDimanajemenDataSupplier"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-custom">
        <div className="modal-content shadow rounded-4">
          {/* Header */}
          <div className="modal-header" style={{ padding: "16px 24px", borderBottom: "none" }}>
            <h5 className="modal-title" style={{ fontSize: "18px", fontWeight: "500" }}>
              <img src={logoEditManajemenDark22} className="me-2" alt="Logo" />
              Edit Stok Barang
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body" style={{ padding: "20px 24px" }}>
            {/* Product Information Card */}
            <div className="card mb-4 p-3" style={{ borderRadius: "10px", borderColor: "#e5e5e5" }}>
              <div className="d-flex align-items-center">
                <img
                  src={product.image_url ? `http://68.183.103.154/${product.image_url}` : ""}
                  alt={product.name}
                  style={{ width: "80px", height: "100px", objectFit: "cover", marginRight: "20px" }}
                />

                {/* Product details */}
                <div style={{ flexGrow: 1 }}>
                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Nama barang
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: {product.name}</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Kategori
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: {product.category_id}</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Sisa Stok
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: {product.stock}</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-4">
                      <span className="text-muted" style={{ fontWeight: 400 }}>
                        Kode
                      </span>
                    </div>
                    <div className="col-8">
                      <span style={{ fontWeight: 500 }}>: {product.code_product}</span>
                    </div>
                  </div>
                </div>
                {/* Omitted for brevity */}
              </div>
            </div>

            {/* Form Fields */}
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Tanggal
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formValues.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="base_price" className="form-label">
                  Harga Beli
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="base_price"
                  value={formValues.base_price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="quantity" className="form-label">
                  Jumlah
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={formValues.quantity}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Keterangan
              </label>
              <textarea
                className="form-control"
                id="description"
                value={formValues.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer" style={{ borderTop: "none", padding: "20px 24px" }}>
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={handleUpdateStock}
              style={{ fontSize: "16px", padding: "10px", backgroundColor: "#FF0000", borderRadius: "12px" }}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStokBarang;
