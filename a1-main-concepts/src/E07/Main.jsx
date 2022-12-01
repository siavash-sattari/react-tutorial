import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Tutorial'
    };
  }

  clickHandler(num1, num2, event) {
    console.log(`Num1 : ${num1} || Num2 : ${num2} || Sum : ${num1 + num2}`);
    console.log(event.target.innerHTML);
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        {/* <button onClick={this.clickHandler.bind(this, 3, 7)}>click on me</button> */}
        <button onClick={event => this.clickHandler(3, 7, event)}>click on me</button>
      </>
    );
  }
}
