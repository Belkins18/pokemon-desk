import React from 'react';
import s from './Pokedex.module.scss';
// eslint-disable-next-line import/no-unresolved
import PokemonCard from '../../components/PokemonCard';
import { POKEMONS } from '../../api/pokemons';

const Pokedex = () => {
  return (
    <div>
      <div className={s.wrap}>
        <div className={s.title}>
          800 <b>Pokemons</b> for you to choose your favorite
        </div>
        <ul className={s.cardList}>
          {POKEMONS.map(({ id, name, stats, types, img }) => (
            <li className={s.cardListItem} key={id}>
              <PokemonCard id={id} name={name} stats={stats} types={types} img={img} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
