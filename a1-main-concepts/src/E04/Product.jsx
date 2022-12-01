import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const title = 'Product Card';
    const { title: productTitle, price, image } = this.props;
    return (
      <div className='wrapper'>
        <h1>{title}</h1>
        <div className='card'>
          <img src={image} alt={productTitle} />
          <h1>{productTitle}</h1>
          <p className='price'>${price}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Add to card</button>
        </div>
      </div>
    );
  }
}

Product.defaultProps = {
  image: 'images/no-image.jpg'
};
