import React from 'react';
import Product from './Product';
import './Main.css';

function Main() {
  return (
    <div className='container'>
      <Product title='Asus' price={120} image='images/products/01.png' />
      <Product title='Acer' price={170} image='images/products/02.jpg' />
      <Product title='HP' price={295} image='images/products/03.jpg' />
    </div>
  );
}

export default Main;
