import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 10,
      tempClass: 'cold'
    };
    this.addToTemp = this.addToTemp.bind(this);
    this.minusFromTemp = this.minusFromTemp.bind(this);
  }

  addToTemp() {
    if (this.state.temp > 30) return;

    if (this.state.temp + 1 >= 15) {
      this.setState(prevState => {
        return { temp: prevState.temp + 1, tempClass: 'hot' };
      });
    } else {
      this.setState(prevState => {
        return { temp: prevState.temp + 1 };
      });
    }
  }

  minusFromTemp() {
    if (this.state.temp < 0) return;

    if (this.state.temp - 1 < 15) {
      this.setState(prevState => {
        return { temp: prevState.temp - 1, tempClass: 'cold' };
      });
    } else {
      this.setState(prevState => {
        return { temp: prevState.temp - 1 };
      });
    }
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className={`temperature ${this.state.tempClass}`}>{this.state.temp}c</div>
          <div className='btns-wrapper'>
            <button onClick={this.addToTemp}>+</button>
            <button onClick={this.minusFromTemp}>-</button>
          </div>
        </div>
      </>
    );
  }
}
