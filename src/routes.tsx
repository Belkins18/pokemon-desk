import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';

interface IGeneralMenu {
  title: string;
  link: LinkTo;
  component: () => JSX.Element;
}
// eslint-disable-next-line no-shadow
export enum LinkTo {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARES = '/legendaries',
  DOCUMENTATION = '/documentation',
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
    component: () => <EmptyPage title="Pokédex" />,
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

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
