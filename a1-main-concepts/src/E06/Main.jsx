import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: 'Hamid', age: 12 },
        { id: 2, name: 'Arsh', age: 17 },
        { id: 3, name: 'Mohammad', age: 29 }
      ]
    };

    this.changeUserHandler = this.changeUserHandler.bind(this);
  }

  clickHandler() {}

  changeUserHandler() {
    console.log(this);
    this.setState({
      users: [
        { id: 1, name: 'Siavash', age: 26 },
        { id: 2, name: 'Omid', age: 40 },
        { id: 3, name: 'Keyvan', age: 38 }
      ]
    });
  }

  render() {
    return (
      <>
        {/* <button onClick={this.changeUserHandler.bind(this)}>click on me</button> */}
        {/* <button onClick={() => this.changeUserHandler()}>click on me</button> */}
        <button onClick={this.changeUserHandler}>Click on me</button>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              Name : {user.name} - Age : {user.age}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
