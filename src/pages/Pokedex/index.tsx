import React from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Pokemons from '../../api/pokemons.json';

console.log(Pokemons);
const Pokedex = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.title}>
          800 <b>Pokemons</b> for you to choose your favorite
        </div>

        <div className="cardContainer">
          <PokemonCard />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
