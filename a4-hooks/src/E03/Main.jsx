import React, { useEffect, useState } from 'react';
import User from './User';
import './Main.css';

const Main = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Mohammad', age: 21 },
    { id: 2, name: 'Ali', age: 20 },
    { id: 3, name: 'Amin', age: 28 },
    { id: 4, name: 'Amir', age: 32 }
  ]);

  useEffect(() => {
    console.log('App.js => Component Mount'); // Mount
  }, []);

  useEffect(() => {
    console.log('App.js => Component Update'); // Update
  }, [users]);

  const removeUser = userId => setUsers(users.filter(user => user.id !== userId));

  return (
    <ul>
      {users.map(user => (
        <User key={user.id} onRemove={removeUser} {...user} />
      ))}
    </ul>
  );
};

export default Main;
