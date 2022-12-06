import React, { useEffect, useRef } from 'react';
import './Main.css';

const Main = () => {
  const titleRef = useRef();
  const usernameInputRef = useRef();

  useEffect(() => {
    console.log(usernameInputRef);
    usernameInputRef.current.focus();
  }, []);

  const addNewValue = () => {
    usernameInputRef.current.value = 'React.js';
  };

  const addNewClass = () => {
    titleRef.current.classList.add('color-blue');
    usernameInputRef.current.classList.add('bg-red');
  };

  return (
    <div>
      <h3 ref={titleRef}>SabzLearn.ir</h3>
      <input ref={usernameInputRef} type='text' placeholder='Username' />
      <button onClick={addNewValue}>Add New Value</button>
      <button onClick={addNewClass}>Add New Class</button>
    </div>
  );
};

export default Main;
