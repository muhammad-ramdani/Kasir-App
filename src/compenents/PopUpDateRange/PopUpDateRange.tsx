// PopupDateRange.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PopUpDateRange.css';

interface PopupDateRangeProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupDateRange: React.FC<PopupDateRangeProps> = ({ isOpen, onClose }) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [startTime, setStartTime] = useState('07:00');
    const [endTime, setEndTime] = useState('23:59');

    const handleProcess = () => {
        console.log('Rentang Tanggal:', startDate, 'hingga', endDate);
        console.log('Rentang Waktu:', startTime, 'hingga', endTime);
        onClose();
    };

    return (
        <div className={`modal modal-calender fade ${isOpen ? 'show d-block' : ''}`} tabIndex={-1}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-2 col-sidebar">
                                <div className="sidebar-modal">
                                    <ul className='ul-modal-sidebar'>
                                        <li className='item-sidebar-modal'>Hari Ini</li>
                                        <li className='item-sidebar-modal'>Kemarin</li>
                                        <li className='item-sidebar-modal'>Minggu Ini</li>
                                        <li className='item-sidebar-modal'>Minggu Lalu</li>
                                        <li className='item-sidebar-modal'>Bulan ini</li>
                                        <li className='item-sidebar-modal'>Bulan lalu</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-6 date-picker-border d-flex justify-content-center">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd MMMM yyyy"
                                            inline
                                        />
                                    </div>
                                    <div className="col-6 d-flex justify-content-center">
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            dateFormat="dd MMMM yyyy"
                                            inline
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-0 p-0 row-time">
                                    <div className="col-3">
                                        <label className="form-label mt-0 text-dark">Dari Tanggal</label>
                                        <p className='date-from'>ini tanggal</p>
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label mt-0 text-dark">Dari Pukul</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label mt-0 text-dark">Hingga Tanggal</label>
                                        <p className='date-to'>ini tanggal</p>
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label mt-0 text-dark">Hingga Pukul</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="button-modal">
                                            <button type="button" className="btn btn-batal" onClick={onClose}>
                                                Batal
                                            </button>
                                            <button type="button" className="btn btn-proses" onClick={handleProcess}>
                                                Proses
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupDateRange;
