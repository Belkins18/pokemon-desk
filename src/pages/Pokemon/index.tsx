import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { PokemonsRequest } from '../../interface/pokemons';
import Loader from '../../components/Loader';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

import s from './Pokemon.module.scss';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });
  const [pokemon, setPokemon] = useState<PokemonsRequest | null>(null);

  useEffect(() => {
    setPokemon(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      {pokemon ? (
        <div className={s.pokemonCard}>
          <div className={s.pokemonImage}>
            <img className={s.pokemonPic} src={pokemon.img} alt="pokemon" />
            <div className={s.pokemonAbilities}>
              <div className={s.labelWrap}>
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    // @ts-ignore
                    className={cn(s.label, s[type])}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.pokemonStats}>
            <div className={s.pokemonInfo}>
              <Heading className={s.pokemonName} type="h3">
                {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              </Heading>
              <div className={s.pokemonGenAndCircle}>
                <Heading className={s.pokemonGeneration} type="h4">
                  Generation 1
                </Heading>
                <div className={s.pokemonCircle}>
                  <p className={s.pokemonState}>578</p>
                </div>
              </div>
            </div>
            <div className={s.pokemonAbilitiesText}>
              <div className={s.pokemonState}>Abilities</div>
              <div className={s.pokemonStateText}>Overgrow - Chlorophyll</div>
            </div>
            <div className={s.pokemonHealthAndExp}>
              <div className={s.pokemonHealth}>
                <div className={s.pokemonState}>Healthy Points</div>

                <div className={s.pokemonNums}>1 000 000</div>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '80%',
                      background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
                    }}
                  />
                </div>
              </div>
              <div className={s.pokemonExp}>
                <div className={s.pokemonState}>Experience</div>

                <div className={s.pokemonNums}>1 000 000</div>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '96%',
                      background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={s.pokemonDefAndAttack}>
              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>49</span>
                </dd>
                <dt>Defence</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>165</span>
                </dd>
                <dt>Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>130</span>
                </dd>
                <dt>Sp Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>271</span>
                </dd>
                <dt>Sp Defence</dt>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Pokemon;
