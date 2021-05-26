import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Pokédex from './pages/Pokedex';
// eslint-disable-next-line import/no-unresolved
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  title: string;
  link: LinkTo;
  component: (props: React.PropsWithChildren<any>) => JSX.Element;
}
// eslint-disable-next-line no-shadow
export enum LinkTo {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkTo.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkTo.POKEDEX,
    component: () => <Pokédex />,
  },
  {
    title: 'Legendaries',
    link: LinkTo.LEGENDARES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkTo.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkTo.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: React.PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
