/* eslint-disable camelcase */
import React from 'react';
import s from './Pokedex.module.scss';
// eslint-disable-next-line import/no-unresolved
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';

const Pokedex = () => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Something Wrang!!!</div>;
  }

  return (
    <div>
      <div className={s.wrap}>
        <div className={s.title}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </div>
        <ul className={s.cardList}>
          {data.pokemons.map(({ id, name, stats, types, img }) => (
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
