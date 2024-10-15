import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CalenderPopup.css';

interface CalenderPopupProps {
    selectedDate: Date | undefined; 
    setSelectedDate: (date: Date | undefined) => void;
    onClose: () => void;
}

const CalenderPopup: React.FC<CalenderPopupProps> = ({ selectedDate, setSelectedDate, onClose }) => {
    return (
        <div className="calendar-container">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date || undefined); 
                    onClose(); 
                }}
                inline
            />
        </div>
    );
};

export default CalenderPopup;
