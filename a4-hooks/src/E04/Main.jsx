import React from 'react';
import JuniorLevel from './JuniorLevel';
import MidLevel from './MidLevel';
import './Main.css';

const Main = () => {
  return (
    <div>
      <h1>Junior Level Code :</h1>
      <JuniorLevel />
      <h1>Mid Level Code :</h1>
      <MidLevel />
    </div>
  );
};

export default Main;
