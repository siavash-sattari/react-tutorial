import React, { Component } from 'react';
import Header from './Header';
import AddForm from './AddForm';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-4'>
        <Header />
        <AddForm />
      </div>
    );
  }
}
