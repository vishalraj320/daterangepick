import React, { useState } from 'react';

const DatePicker = ({ predefinedRanges }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRange, setSelectedRange] = useState([]);
  const [weekendDates, setWeekendDates] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRangeChange = () => {
    const newSelectedRange = [startDate, endDate];
    setSelectedRange(newSelectedRange);

    const newWeekendDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        newWeekendDates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setWeekendDates(newWeekendDates);
  };

  const handlePredefinedRangeChange = (range) => {
    setStartDate(range.startDate);
    setEndDate(range.endDate);
  };

  return (
    <div>
      <input type="date" value={startDate} onChange={(e) => handleStartDateChange(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => handleEndDateChange(e.target.value)} />
      <button onClick={handleRangeChange}>Apply</button>

      <div>
        <h2>Selected Date Range:</h2>
        <p>{selectedRange.join(' to ')}</p>
      </div>

      <div>
        <h2>Weekend Dates:</h2>
        <ul>
          {weekendDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Predefined Ranges:</h2>
        <select onChange={(e) => handlePredefinedRangeChange(JSON.parse(e.target.value))}>
          <option value="">Select a predefined range</option>
          {predefinedRanges.map((range, index) => (
            <option key={index} value={JSON.stringify(range)}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
