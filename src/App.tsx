import { useRoutes } from 'hookrouter';
import routes from './routes';
import './index.scss';

const App = () => {
  const match = useRoutes(routes);

  return match;
};

export default App;
