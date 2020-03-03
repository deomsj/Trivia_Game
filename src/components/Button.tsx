import React, { createRef, RefObject } from 'react';
interface Button {
  text: string;
  callback: () => void;
}

const Button = ({ callback, text }: Button) => {
  let button: RefObject<HTMLButtonElement> = createRef();
  const handleClick = () => {
    button.current && button.current.blur();
    callback();
  };
  return (
    <button className='button' onClick={handleClick} ref={button}>
      {text}
    </button>
  );
};

export default Button;
