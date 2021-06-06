/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { A } from 'hookrouter';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import Loader from '../../components/Loader';
import { ConfigEndpointEnum } from '../../config';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemons';

interface iQuery {
  name?: string;
  limit?: number;
  offset?: number;
}

const Pokedex = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
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
  const { data, isLoading, isError } = useData<IPokemons>(ConfigEndpointEnum.getPokemons, query, [debouncedValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
        <div>{isTypesLoading ? <Loader /> : types?.map((item) => <div key={item}>{item}</div>)}</div>
        <ul className={s.cardList}>
          {isLoading ? (
            <Loader />
          ) : (
            data &&
            data.pokemons.map((pokemon: PokemonsRequest) => (
              <li className={s.cardListItem} key={pokemon.id}>
                <A className={s.pokemonLink} key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                  <PokemonCard
                    id={pokemon.id}
                    name={pokemon.name}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    img={pokemon.img}
                  />
                </A>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
