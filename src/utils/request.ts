import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  console.log(uri);
  // eslint-disable-next-line no-return-await
  return await fetch(uri).then((responce) => responce.json());
}

export default req;
