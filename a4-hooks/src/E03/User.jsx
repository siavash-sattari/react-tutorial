import React, { useEffect } from 'react';

const User = ({ id, name, age, onRemove }) => {
  useEffect(() => {
    console.log('User.js => Component Mount'); // Mount
    return () => {
      console.log('User.js => Component UnMount'); // UnMount
    };
  }, []);

  return (
    <li>
      {`${name} is ${age} years old`}
      <button onClick={() => onRemove(id)}>Remove</button>
    </li>
  );
};

export default User;
