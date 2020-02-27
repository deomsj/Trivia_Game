import React from 'react';
import { Link } from 'react-router-dom';
import { Button as ButtonProps } from '../interfaces';

const Button = ({ url, text, dispatch = () => null }: ButtonProps) => (
  <Link to={url}>
    <button className='button' onClick={dispatch}>
      {text}
    </button>
  </Link>
);

export default Button;
