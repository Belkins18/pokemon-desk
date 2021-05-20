import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import './index.scss';
import NotFound from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFound />;
};

export default App;
