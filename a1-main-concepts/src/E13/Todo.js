import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const { onRemove, onEdit, id } = this.props;
    return (
      <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
        <li className='todo-item'>{this.props.title}</li>

        <button className='check-btn' onClick={onEdit.bind(this, id)}>
          <i className='fas fa-check' aria-hidden='true'></i>
        </button>

        <button className='trash-btn' onClick={onRemove.bind(this, id)}>
          <i className='fas fa-trash' aria-hidden='true'></i>
        </button>
      </div>
    );
  }
}
