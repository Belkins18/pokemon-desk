import React from 'react';
import s from './Button.module.scss';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
