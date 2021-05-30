import config from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: any) => {
  const url = {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`${val}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };

  return url;
};

export default getUrlWithParamsConfig;
