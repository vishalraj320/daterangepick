import React from 'react';
import DatePicker from './DatePicker';

function App() {
 
  const predefinedRanges = [
    {
      label: 'Last 7 days',
      startDate: calculateStartDate(7),
      endDate: new Date(),
    },
    {
      label: 'Last 30 days',
      startDate: calculateStartDate(30),
      endDate: new Date(),
    },
  
  ];

  
  function calculateStartDate(numDays) {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - numDays);
    return startDate;
  }

  return (
    <div className="App">
      <h1>Business Date Range Picker</h1>
      <DatePicker predefinedRanges={predefinedRanges} />
    </div>
  );
}

export default App;
