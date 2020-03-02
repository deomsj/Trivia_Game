import React from 'react';
interface Button {
  text: string;
  callback: () => void;
}

const Button = ({ callback, text }: Button) => (
  <button className='button' onClick={callback}>
    {text}
  </button>
);

export default Button;
