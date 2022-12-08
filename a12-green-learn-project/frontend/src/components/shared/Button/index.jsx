import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  const { to, href, className, type, onClick, disabled, children } = props;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={className} type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
};

export default Button;
