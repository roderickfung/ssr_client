import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducers';

const serverStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};

export default serverStore;
