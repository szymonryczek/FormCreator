import { createReducer } from 'deox';

import { changeTab } from '../actions';

const initialState = {
  tabId: 0,
};

export const appData = createReducer(initialState, (handleAction) => [
  handleAction(changeTab, (state, { payload: tabId }) => ({
    ...state,
    tabId,
  })),
]);
