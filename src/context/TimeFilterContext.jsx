import React, { createContext, useContext, useState } from 'react';

const TimeFilterContext = createContext({ timeFilter: '30D', setTimeFilter: () => {} });

export const TimeFilterProvider = ({ children }) => {
  const [timeFilter, setTimeFilter] = useState('30D');
  return (
    <TimeFilterContext.Provider value={{ timeFilter, setTimeFilter }}>
      {children}
    </TimeFilterContext.Provider>
  );
};

export const useTimeFilter = () => useContext(TimeFilterContext);
