/* eslint-disable camelcase */
import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import Loader from '../../components/Loader';

interface iQuery {
  name?: string;
  limit?: number;
  offset?: number;
}

const Pokedex = () => {
  // useState
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<iQuery>({
    limit: 12,
    offset: 2,
  });
  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);
  const debouncedValue = useDebounce(searchValue, 500);

  // custom hook
  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something Wrang!!!</div>;
  }

  return (
    <div>
      <div className={s.wrap}>
        <div className={s.title}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </div>
        <div className={s.searchContainer}>
          <input
            className={s.search}
            placeholder="Choose pokemon"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
        <ul className={s.cardList}>
          {isLoading ? (
            <Loader />
          ) : (
            data &&
            data.pokemons.map((pokemon: PokemonsRequest) => (
              <li className={s.cardListItem} key={pokemon.id}>
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  stats={pokemon.stats}
                  types={pokemon.types}
                  img={pokemon.img}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
