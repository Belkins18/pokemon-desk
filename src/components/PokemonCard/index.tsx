import React from 'react';
import cn from 'classnames';
// Components
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

const normalizeName = (name: string) => {
  const req = /(\w)/;
  return name.replace(req, name[0].toUpperCase());
};

interface IPokemonCard {
  id: number;
  name: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
}
const PokemonCard: React.FC<IPokemonCard> = ({ id, name, stats, types, img }) => {
  return (
    <div className={s.root} id={id.toString()}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
          {normalizeName(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((label) => (
            <span
              key={label}
              // @ts-ignore
              className={cn(s.label, s[label])}
              // style={{ background: getBgColorByPokemonType(typeColors, label)}}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div
        // @ts-ignore
        className={cn(s.pictureWrap, s[`${types[0]}`])}
        // style={{ background: getBgColorByPokemonType(typeColors, types) }}
      >
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
