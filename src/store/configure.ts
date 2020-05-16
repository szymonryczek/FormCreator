import { configureStore } from 'deox';
import { rootReducer } from './reducers';

export const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      return store.replaceReducer(rootReducer);
    });
  }

  return store;
};
