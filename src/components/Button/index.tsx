import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

// eslint-disable-next-line no-shadow
export enum BtnBackgrounds {
  Green = '#73D677',
  Yellow = '#F2CB07',
}
interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  background: BtnBackgrounds.Green | BtnBackgrounds.Yellow;
  classNames?: string;
}

const Button: React.FC<Props> = ({ children, onClick, classNames, background }) => {
  return (
    <button type="button" className={cn(s.root, classNames)} onClick={onClick} style={{ backgroundColor: background }}>
      {children}
    </button>
  );
};

export default Button;
