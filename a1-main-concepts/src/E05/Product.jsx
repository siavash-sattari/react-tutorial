import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { title, price, image } = this.props;
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
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
