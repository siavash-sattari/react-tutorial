import React, { Component } from 'react';
import User from './User';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'mohammad' },
        { id: 2, name: 'Amir' },
        { id: 3, name: 'Reza' },
        { id: 4, name: 'Nazanin' }
      ]
    };
    this.userRemoveHandler = this.userRemoveHandler.bind(this);
  }

  userRemoveHandler(userId) {
    let newUsers = [...this.state.users];
    let mainUserIndex = newUsers.findIndex(user => user.id === userId);
    newUsers.splice(mainUserIndex, 1);
    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <>
        {this.state.users.map(user => (
          <User key={user.id} onRemove={this.userRemoveHandler} {...user} />
        ))}
      </>
    );
  }
}
