import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CalenderPopup.css';

interface CalenderPopupProps {
    selectedDate: Date | undefined; // Ubah ini dari Date | null ke Date | undefined
    setSelectedDate: (date: Date | undefined) => void; // Ubah dari Date | null
    onClose: () => void;
}

const CalenderPopup: React.FC<CalenderPopupProps> = ({ selectedDate, setSelectedDate, onClose }) => {
    return (
        <div className="calendar-container">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date || undefined); // Pastikan untuk mengatur ke undefined jika date adalah null
                    onClose(); // Tutup kalender setelah memilih
                }}
                inline
            />
        </div>
    );
};

export default CalenderPopup;
