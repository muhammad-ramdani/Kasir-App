import './SearchLaporan.css';
import images from '../../Image';
import React from 'react';

interface SearchLaporanProps {
    placeholder: string
}

const SearchLaporan: React.FC<SearchLaporanProps> = ({ placeholder }) => {
    return (
        <div className="col col-cari-data-barang">
            <div className="input-group flex-nowrap">
                <img src={images.search} className="input-group-text bg-white rounded-start-3" alt="" />
                <input type="text" className="form-control form-control-cari-data-barang border border-start-0 rounded-end-3" placeholder={placeholder} aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        </div>
    )
}

export default SearchLaporan;