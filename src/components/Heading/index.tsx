import React from 'react';
import s from './Heading.module.scss';

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
// @ts-ignore
// eslint-disable-next-line consistent-return
const Heading: React.FC<Props> = ({ children, type }): JSX.Element => {
  switch (type) {
    case 'h1':
      return <h1 className={s.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={s.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={s.h3}>{children}</h3>;
    case 'h4':
      return <h4 className={s.h4}>{children}</h4>;
    case 'h5':
      return <h5 className={s.h5}>{children}</h5>;
    case 'h6':
      return <h6 className={s.h6}>{children}</h6>;
  }
  //
  //
  // if (type === 'h1') return <h1 className={s.h1}>{children}</h1>;
  // if (type === 'h2') return <h2 className={s.h2}>{children}</h2>;
  // if (type === 'h3') return <h3 className={s.h3}>{children}</h3>;
  // if (type === 'h4') return <h4 className={s.h4}>{children}</h4>;
  // if (type === 'h5') return <h5 className={s.h5}>{children}</h5>;
  // if (type === 'h6') return <h6 className={s.h6}>{children}</h6>;
};

export default Heading;
