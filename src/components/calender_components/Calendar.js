import React, { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState({});

  useEffect(() => {
    // You can fetch the data here if needed
  }, []);

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const calendarRows = [];

  let dayCount = 1;
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      let keyForDay;
      if ((i === 0 && j < date.getDay()) || dayCount > daysInMonth) {
        keyForDay = `empty-${i}-${j}`;
        row.push(<div key={keyForDay} className="calendar-day empty">{""}</div>);
      } else {
        keyForDay = `day-${i}-${j}-${dayCount}`;
        row.push(
          <div key={keyForDay} className="calendar-day">
            {dayCount}
          </div>
        );
        dayCount++;
      }
    }
    calendarRows.push(<div key={`row-${i}`} className="calendar-row">{row}</div>);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>&lt;</button>
        <span>{date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>&gt;</button>
      </div>
      <div className="calendar-days-header">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div className="calendar-day-header" key={index}>{day}</div>
        ))}
      </div>
      <div className="calendar-body">{calendarRows}</div>
    </div>
  );
}

export default Calendar;
