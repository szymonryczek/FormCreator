import { combineReducers } from 'redux';

import { appData } from './appData';

export const rootReducer = combineReducers({
  appData: appData,
});

export type State = ReturnType<typeof rootReducer>;
