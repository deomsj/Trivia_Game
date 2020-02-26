import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ url, text }) => (
  <Link to={url}>
    <button class='button'>{text}</button>
  </Link>
);

export default Button;
