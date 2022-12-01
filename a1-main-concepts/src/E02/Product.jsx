import React from 'react';

function Product({ title, price, image }) {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>${price}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Add to card</button>
    </div>
  );
}

export default Product;
