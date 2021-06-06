import { ConfigEndpointEnum } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('When call this methond then you get url', () => {
  test('Должна принимать 2 аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.getPokemons, {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemons" и { name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и query с полями name равное Pikachu', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.getPokemons, { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemons" и { id: 25" }, на выходе получить объект с полями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.getPokemon, { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "createPokemon" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.createPokemon, {});

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "updatePokemon" и { id: 42" }, на выходе получить объект с полями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.updatePokemon, { id: 42 });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/42',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "deletePokemon" и { id: 42" }, на выходе получить объект с полями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig(ConfigEndpointEnum.deletePokemon, { id: 42 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/42/delete',
        query: {},
      },
      body: {},
    });
  });
});
