import Hapi from '@hapi/hapi';
import React from 'react';
import ReactDom from 'react-dom/server';
import { setPath } from 'hookrouter';

import App from '../App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handler: (request, h) => {
      setPath(request.path);
      const result = ReactDom.renderToString(<App />);
      return result;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
