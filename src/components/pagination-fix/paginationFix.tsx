import "./pagination-fix.css";
import backArrow from "../../assets/assetPagination/Vector-arrow-back.svg";
import nextArrow from "../../assets/assetPagination/Vector-arrow-next.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  dataPerPage: number;
  onPageChange: (page: number) => void;
  onDataPerPageChange: (limit: number) => void;
}

function PaginationFix({
  currentPage,
  totalPages,
  dataPerPage,
  onPageChange,
  onDataPerPageChange,
}: PaginationProps) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-component-rounded-card">
      <div className="pagination-component-content-grid">
        {/* Dropdown for selecting number of items per page */}
        <div className="pagination-component-dropdown-container">
          <p className="pagination-component-dropdown-label">Tampilkan:</p>
          <select
            className="pagination-component-dropdown"
            value={dataPerPage}
            onChange={(e) => onDataPerPageChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <p className="pagination-component-data-display">
            Halaman {currentPage} dari {totalPages}
          </p>
        </div>

        {/* Pagination buttons */}
        <div className="pagination-component-pagination-buttons">
          <button
            className="pagination-component-pagination-arrow-btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <img src={backArrow} alt="Back" className="pagination-component-arrow-icon" />
          </button>
          <button className="pagination-component-pagination-page-btn">{currentPage}</button>
          <button
            className="pagination-component-pagination-arrow-btn"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <img src={nextArrow} alt="Next" className="pagination-component-arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginationFix;
