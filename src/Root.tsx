import React from 'react';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Main } from '~/Main';
import { createStore } from '~/store/configure';

type Props = {
  store: ReturnType<typeof createStore>;
};

const Root = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
};

export default hot(Root);
