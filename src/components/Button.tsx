import React from 'react';
import { Link } from 'react-router-dom';

interface IButton {
  url: string;
  text: string;
}

const Button = ({ url, text }: IButton) => (
  <Link to={url}>
    <button className='button'>{text}</button>
  </Link>
);

export default Button;
