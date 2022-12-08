import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

const Main = () => {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  const list = useMemo(() => {
    const numbersList = [];
    let count = 0;

    while (count <= 20000) {
      numbersList.push(<li key={count}>Number is : {deferredValue}</li>);
      count++;
    }

    return numbersList;
  }, [deferredValue]);

  useEffect(() => {
    console.log(`Value : ${value}`);
    console.log(`DeferredValue : ${deferredValue}`);
  });

  return (
    <div>
      <input type='number' value={value} onChange={e => setValue(e.target.value)} />
      {value !== 0 ? <ul>{list}</ul> : null}
    </div>
  );
};

export default Main;
