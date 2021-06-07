const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      getPokemonTypes: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },

      // FAKE API
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};

// eslint-disable-next-line no-shadow
export enum ConfigEndpointEnum {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
  getPokemonTypes = 'getPokemonTypes',
  createPokemon = 'createPokemon',
  updatePokemon = 'updatePokemon',
  deletePokemon = 'deletePokemon',
}
export type ConfigEndpointType =
  | ConfigEndpointEnum.getPokemons
  | ConfigEndpointEnum.getPokemon
  | ConfigEndpointEnum.getPokemonTypes
  | ConfigEndpointEnum.createPokemon
  | ConfigEndpointEnum.updatePokemon
  | ConfigEndpointEnum.deletePokemon;

export default config;
