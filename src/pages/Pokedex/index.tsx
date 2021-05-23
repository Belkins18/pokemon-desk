/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
// eslint-disable-next-line import/no-unresolved
import PokemonCard from '../../components/PokemonCard';
import { IPokemons } from '../../api/pokemons';

// http://zar.hosthot.ru/api/v1/pokemons
const Pokedex = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((responce) => responce.json())
      .then((data) => {
        console.log('#### data: ', data);
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </div>
        <div>
          {pokemons.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>

        <ul className={s.cardList}>
          {pokemons.map(({ id, name, stats, types, img }) => (
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
