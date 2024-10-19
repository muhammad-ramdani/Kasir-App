import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import "./kalenderchoose.css";

// Define props for the CalendarModal component
interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KalenderChoose: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="calendar-modal-overlay">
      <div className="calendar-modal-content">
        <div className="calendar-header">
          <h5>Pick a Date</h5>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default KalenderChoose;
