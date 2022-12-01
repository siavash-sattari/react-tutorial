import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { id, name, onRemove } = this.props;
    return (
      <h1>
        {name} <button onClick={onRemove.bind(this, id)}>Delete</button>
      </h1>
    );
  }
}
