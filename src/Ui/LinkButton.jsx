import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const className =
    'hover:underline" text-sm text-blue-500 hover:text-blue-800';

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
