import React from 'react';

function Product({ title: productTitle, price, image = 'images/no-image.jpg' }) {
  const title = 'Product Card';

  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='card'>
        <img src={image} alt={title} />
        <h1>{productTitle}</h1>
        <p className='price'>${price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Add to card</button>
      </div>
    </div>
  );
}

// Product.defaultProps = {
//   image: 'images/no-image.jpg'
// };

export default Product;
