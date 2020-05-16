import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import { Main } from '~/Main';
import { createStore } from '~/store/configure';

type Props = {
  store: ReturnType<typeof createStore>;
};

const Root = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default hot(Root);
