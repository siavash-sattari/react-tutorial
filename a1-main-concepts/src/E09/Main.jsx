import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.addToCounter = this.addToCounter.bind(this);
    this.minusFromCounter = this.minusFromCounter.bind(this);
  }

  addToCounter() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  minusFromCounter() {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  }

  render() {
    return (
      <>
        <div className='container'>
          <h2>Counter</h2>
          <h2>{this.state.counter}</h2>
          <div>
            <button onClick={this.addToCounter}>Add Count</button>
            <button onClick={this.minusFromCounter}>Lower Count</button>
          </div>
        </div>
      </>
    );
  }
}
