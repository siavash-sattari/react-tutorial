import React from 'react';
import Product from './Product';
import './Main.css';

function Main() {
  const products = [
    { id: 1, title: 'Asus', price: 120 },
    { id: 2, title: 'Acer', price: 170, image: 'images/products/02.jpg' },
    { id: 3, title: 'HP', price: 295, image: 'images/products/03.jpg' }
  ];
  return (
    <div className='container'>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Main;
