import { HomePage } from '@pages/home';
import { Provider } from 'react-redux';
import { appStore } from './app-store';

const App = () => {
  return (
    <Provider store={appStore}>
      <HomePage />
    </Provider>
  );
};

export default App;
