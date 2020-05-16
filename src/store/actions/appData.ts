import { createAction } from 'deox';

export const changeTab = createAction(
  '[appData] change tab',
  (resolve) => (tabId: number) => resolve(tabId),
);
