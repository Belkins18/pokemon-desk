import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';
// svg
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
// styles
import s from './Header.module.scss';

const Header = () => {
  console.log('####  Header');

  const path = usePath();

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <a href={GENERAL_MENU[0].link} className={s.brand}>
          <div className={s.brand__logo}>
            <PokemonLogoSvg />
          </div>
        </a>
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default React.memo(Header);
