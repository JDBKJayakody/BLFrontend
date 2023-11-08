import React, { useState, useEffect } from 'react';

function YearsSince2015() {
  const [yearsSince2005, setYearsSince2015] = useState(0);

  useEffect(() => {
    const calculateYearsSince2005 = () => {
      const currentDate = new Date();
      const year2005 = new Date(2005, 0, 1).getTime(); // Convert to timestamp

      const timeDifference = currentDate.getTime() - year2005; // Convert to timestamp and then subtract
      const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25); // Average year length

      setYearsSince2015(Math.floor(yearsDifference));
    };

    calculateYearsSince2005();
  }, []);

  return (
    <div>
      <p> <div style={{fontSize: '25px'}}>{yearsSince2005}</div> Years since 2005</p>
    </div>
  );
}

export default YearsSince2015;
