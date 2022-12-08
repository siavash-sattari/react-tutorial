import { useState, useTransition } from 'react';

const Main = () => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);

    startTransition(() => {
      const numbersList = [];
      let count = 0;

      while (count <= 20000) {
        numbersList.push(e.target.value);
        count++;
      }

      setList(numbersList);
    });
  };

  return (
    <div>
      <input type='number' value={value} onChange={handleChange} />
      {isPending ? (
        'Loading ...'
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>Number is : {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
