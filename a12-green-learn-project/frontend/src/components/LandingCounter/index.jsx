import React, { useEffect, useState } from 'react';

const LandingCounter = ({ count }) => {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter(prevCount => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);

  return <span class='landing-status__count'>{courseCounter}</span>;
};

export default LandingCounter;
