import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: 'Mohammad', age: 21 },
    { id: 2, name: 'Ali', age: 20 },
    { id: 3, name: 'Amin', age: 28 },
    { id: 4, name: 'Amir', age: 32 }
  ]);

  const increase = () => {
    // setCount(count + 1);
    setCount(prevState => prevState + 1);
  };

  const decrease = () => {
    // setCount(count - 1);
    setCount(prevState => prevState - 1);
  };

  const removeUser = userId => {
    // setUsers(users.filter(user => user.id !== userId));
    
    // setUsers(prevState => prevState.filter(user => user.id !== userId));

    const newUsers = [...users];
    const mainUserIndex = newUsers.findIndex(user => user.id === userId);
    newUsers.splice(mainUserIndex, 1);
    setUsers(newUsers);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
      <hr />
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {`${user.name} is ${user.age} years old`}
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
