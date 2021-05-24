import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import './index.scss';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
