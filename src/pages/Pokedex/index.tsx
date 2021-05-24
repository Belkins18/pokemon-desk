/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
// eslint-disable-next-line import/no-unresolved
import PokemonCard from '../../components/PokemonCard';
import { IPokemons } from '../../api/pokemons';
import req from '../../utils/request';

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
    // req().then(data => console.log('#### data: ', data))
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        const result = await req('getPokemons');
        console.log(result);
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

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
