import React, { Component } from 'react';
import Product from './Product';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: 'Asus', price: 120, image: 'images/products/01.png' },
        { id: 2, title: 'Acer', price: 170, image: 'images/products/02.jpg' },
        { id: 3, title: 'HP', price: 295, image: 'images/products/03.jpg' }
      ]
    };
  }

  clickHandler() {
    console.log(this); // undefined
    console.log('Click shod ;)');
  }

  keyDownHandler() {
    console.log('Type shod ;)');
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>click on me</button>
        <label htmlFor='name'>Name : </label>
        <input type='text' id='name' onKeyDown={this.keyDownHandler} />
        <div className='container'>
          {this.state.products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </>
    );
  }
}
