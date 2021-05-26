import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  // eslint-disable-next-line no-console
  console.log(uri);

  const reqData = await fetch(uri).then((responce) => responce.json());
  return reqData;
}

export default req;
