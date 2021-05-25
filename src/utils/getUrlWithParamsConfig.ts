import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {
  const url = {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].uri,
  };

  return url;
}

export default getUrlWithParamsConfig;
