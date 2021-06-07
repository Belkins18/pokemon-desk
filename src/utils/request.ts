import Url from 'url';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { ConfigEndpointType } from '../config';

interface IOprions {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endpoint: ConfigEndpointType, query: object): Promise<T> {
  const { method, uri, body }: IGetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);

  const options: IOprions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  const result = await fetch(Url.format(uri), options).then((response) => response.json());

  return result;
}

export default req;
