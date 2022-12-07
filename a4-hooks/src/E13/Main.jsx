import React, { useId } from 'react';

const Main = () => {
  const usernameID = useId();
  const passwordID = useId();

  console.log('UserName ID:', usernameID);
  console.log('Password ID:', passwordID);

  return (
    <div>
      <form action='#'>
        <label htmlFor={usernameID}>Your Username: </label>
        <input type='text' id={usernameID} placeholder='Username' />
        <hr />
        <label htmlFor={passwordID}>Password: </label>
        <input type='text' id={passwordID} placeholder='Password' />
      </form>
    </div>
  );
};

export default Main;
