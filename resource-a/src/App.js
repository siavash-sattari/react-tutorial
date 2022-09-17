import React from 'react';

const SayWelcome = () => {
  return React.createElement('div', { className: 'header' }, React.createElement('h1', {}, 'Welcome ;)'));
};

const App = () => {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'comment 1' },
    { id: 2, text: 'comment 2' },
    { id: 3, text: 'comment 3' }
  ];

  return (
    <div>
      <SayWelcome />
      <h1>{title}</h1>
      <p>{body}</p>
      <div className='comments'>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
