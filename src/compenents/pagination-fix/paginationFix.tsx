// import { useEffect, useState } from "react";
// Import the arrow images
import backArrow from "../../assets/assetPagination/Vector-arrow-back.svg"; 
import nextArrow from "../../assets/assetPagination/Vector-arrow-next.svg"; 
// import Layout from "../../Layout/Layout";
import "./pagination-fix.css";

function PaginationFix() {
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth > 1440);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

  return (
  
    //   <div className={isLargeScreen ? "container" : "container-fluid"} style={{ padding: "14px 18px 30px 18px" }}>
    //     <div className="pagination-component-card">
          <div className="pagination-component-rounded-card">
            <div className="pagination-component-content-grid">
              {/* Left side: "Tampilkan" with dropdown and "Ditampilkan 0 dari 0 data" */}
              <div className="pagination-component-dropdown-container">
                <p className="pagination-component-dropdown-label">Tampilkan:</p>
                <select
                  className="pagination-component-dropdown"
                  onFocus={(e) => (e.target.style.border = "none")}
                  onBlur={(e) => (e.target.style.border = "1px solid #FFFF")}
                >
                  <option value={1}>1</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <p className="pagination-component-data-display">Ditampilkan 0 dari 0 data</p>
              </div>

              {/* Right side: Pagination Buttons */}
              <div className="pagination-component-pagination-buttons">
                <button className="pagination-component-pagination-arrow-btn">
                  <img src={backArrow} alt="Back" className="pagination-component-arrow-icon" />
                </button>
                <button className="pagination-component-pagination-page-btn">1</button>
                <button className="pagination-component-pagination-arrow-btn">
                  <img src={nextArrow} alt="Next" className="pagination-component-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
    //     </div>
    //   </div>
  );
}

export default PaginationFix;
