import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./kalenderchoose.css";

const CalenderComponent: React.FC<{ open: boolean; onClose: () => void }> = ({ open }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());

  // Check if the calendar should be rendered
  if (!open) return null; 

  // Get today's date for comparison
  const today = new Date();
  const isToday = (day: Date) =>
    day.getFullYear() === today.getFullYear() &&
    day.getMonth() === today.getMonth() &&
    day.getDate() === today.getDate();

  // State for dropdown
  const [showMonthDropdown, setShowMonthDropdown] = useState <boolean>(false);
  const [showYearDropdown, setShowYearDropdown] = useState <boolean>(false);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Menutup dropdown setelah pemilihan
  const handleYearChange = (newYear: number) => {
    setYear(newYear);
    setDate(new Date(newYear, month, date.getDate()));
    setShowYearDropdown(false); 
  };

  // Menutup dropdown setelah pemilihan
  const handleMonthChange = (newMonth: number) => {
    setMonth(newMonth);
    setDate(new Date(year, newMonth, date.getDate()));
    setShowMonthDropdown(false); 
  };

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i);

      const isSelected = i === date.getDate();
       // Check if it's today
      const isCurrentDay = isToday(day); 

      days.push(
        <div
          key={i}
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isCurrentDay ? 'today' : ''}`}
          onClick={() => setDate(day)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const handlePreviousMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
    setDate(new Date(year, month === 0 ? 11 : month - 1, date.getDate()));
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
    setDate(new Date(year, month === 11 ? 0 : month + 1, date.getDate()));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {/* Elemen bulan dan tahun yang bisa diklik */}
        <div className="month-year">
          <span onClick={() => setShowMonthDropdown(!showMonthDropdown)}>
            {`${['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'][month]}`}
          </span>
          {' '}
          <span onClick={() => setShowYearDropdown(!showYearDropdown)}>
            {year}
          </span>
        </div>

        <div className="nav-buttons">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="nav-icon"
            onClick={handlePreviousMonth}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="nav-icon"
            onClick={handleNextMonth}
          />
        </div>
      </div>

      {/* Dropdown Bulan */}
      {showMonthDropdown && (
        <ul className="dropdown-month-list">
          {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((monthName, index) => (
            <li key={index} onClick={() => handleMonthChange(index)}>
              {monthName}
            </li>
          ))}
        </ul>
      )}

      {/* Dropdown Tahun */}
      {showYearDropdown && (
        <ul className="dropdown-year-list">
          {[...Array(12)].map((_, index) => (
            <li key={2021 + index} onClick={() => handleYearChange(2021 + index)}>
              {2021 + index}
            </li>
          ))}
        </ul>
      )}

      <div className="calendar-grid">
        {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, index) => (
          <div key={index} className="calendar-header-day">{day}</div>
        ))}

        {Array(firstDay).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}

        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default CalenderComponent;
