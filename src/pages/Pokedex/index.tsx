/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
// eslint-disable-next-line import/no-unresolved
import PokemonCard from '../../components/PokemonCard';
import { IPokemons } from '../../api/pokemons';

import config from '../../config';

interface IData {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemons[];
  total: number;
}

const usePokemons = (): { isLoading: boolean; isError: boolean; data: IData } => {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.url.pathname}`;

      try {
        const responce = await fetch(url);
        const result = await responce.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  console.log('#### data: ', {
    data,
    isLoading,
    isError,
  });
  return {
    // @ts-ignore
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

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
