import React from 'react';
import cn from 'classnames';
import { A } from 'hookrouter';
// svg
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
// styles
import s from './Header.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}
const MENU: Array<IMenu> = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <a href={MENU[0].link} className={s.brand}>
          <div className={s.brand__logo}>
            <PokemonLogoSvg />
          </div>
        </a>
        <nav className={s.menuWrap}>
          {MENU.map(({ link, value, id }) => (
            <A
              key={id}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: id === 1,
              })}>
              {value}
            </A>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
