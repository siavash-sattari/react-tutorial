import React from 'react';

const App = () => {
  const title = 'Blog Post';
  const comments = [
    { id: 1, text: 'comment 1' },
    { id: 2, text: 'comment 2' },
    { id: 3, text: 'comment 3' }
  ];

  const showComments = true;

  return (
    <div>
      <h1>{title}</h1>
      <div className='comments'>
        {showComments && (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
