/* eslint-disable camelcase */
export interface IPokemons {
  count: number;
  limit: number;
  offset: number;
  pokemons: PokemonsRequest[];
  total: number;
}
export interface PokemonsRequest {
  name_clean: string;
  abilities: string[];
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
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: true;
  order: number;
  weight: number;
}

export type ITypesRequest = string[];
