import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Main.css';

const Main = () => {
  const [number, setNumber] = useState(0);
  const [divStyle, setDivStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const randomValue = Math.floor(Math.random() * 200);

    for (let i = 0; i <= 1000000000; i++) {
      if (i === 1000000000) {
        setDivStyle({ paddingTop: `${randomValue}px` });
      }
    }
  }, [number]);

  return (
    <section ref={sectionRef} style={divStyle}>
      <p>{number}</p>
      <div>
        <button onClick={() => setNumber(prevNumber => prevNumber - 1)}>Decrease</button>
        <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increase</button>
      </div>
    </section>
  );
};

export default Main;
