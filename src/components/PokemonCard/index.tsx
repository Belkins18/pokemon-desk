import React from 'react';
import Heading from '../Heading';

// @ts-ignore
import s from './PokemonCard.module.scss';

// name_clean: 'charmander',
// abilities: ['blaze', 'solar-power'],
// stats: {
//   hp: 39,
//   attack: 52,
//   defense: 43,
//   'special-attack': 60,
//   'special-defense': 50,
//   speed: 65,
// },
// types: ['fire'],
// img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
// name: 'charmander',
// base_experience: 62,
// height: 6,
// id: 4,
// is_default: true,
// order: 5,
// weight: 85,

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

interface ITypeColors {
  [n: string]: string[];
}
const typeColors: ITypeColors = {
  '#A1A1A1': ['stile', 'dark', 'rock'],
  '#70A83B': ['grass', 'bug'],
  '#A2CFF0': ['ice', 'water'],
  '#F76545': ['fire', 'fighting', 'dragon'],
  '#76AADB': ['normal', 'gosth'],
  '#A974BC': ['poison', 'psychic', 'fairy', 'ghost'],
  '#9B897B': ['ground'],
  '#F7C545': ['electric'],
};

const getBgColorByPokemonType = (colors: ITypeColors, pokemonType: string[] | string) => {
  const keys = Object.keys(colors);
  let findType: string[] | string;

  // eslint-disable-next-line prefer-destructuring
  typeof pokemonType === 'string' ? (findType = pokemonType) : (findType = pokemonType[0]);

  const color = keys.find((key) => {
    const values = colors[key];
    return values.find((item) => item === findType);
  });
  return color?.toString();
};

const normalizeName = (name: string) => {
  const req = /(\w)/;
  return name.replace(req, name[0].toUpperCase());
};

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
            <span key={label} className={s.label} style={{ background: getBgColorByPokemonType(typeColors, label) }}>
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap} style={{ background: getBgColorByPokemonType(typeColors, types) }}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
