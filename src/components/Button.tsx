import React, { createRef, RefObject } from 'react';
interface Button {
  text: string;
  callback: () => void;
}

const Button = ({ callback, text }: Button) => {
  let button: RefObject<HTMLButtonElement> = createRef();
  const blur = () => {
    button.current && button.current.blur();
  };
  return (
    <button
      className='button--lifted'
      onClick={callback}
      onMouseUp={blur}
      ref={button}>
      {text}
    </button>
  );
};

export default Button;
