import { createAction } from 'deox';

import { IFormField } from '~/types';

export const changeTab = createAction(
  '[appData] change tab',
  (resolve) => (tabId: number) => resolve(tabId),
);

export const addFormField = createAction(
  '[appData] add form field',
  (resolve) => (formField: IFormField) => resolve(formField),
);

export const removeFormField = createAction(
  '[appData] remove form field',
  (resolve) => (formFieldId: number) => resolve(formFieldId),
);
