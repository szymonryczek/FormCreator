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

export const updateFieldValues = createAction(
  '[appData] update fields values',
  (resolve) => (fieldValues: any) => resolve(fieldValues),
);

interface Itest {
  id: number;
  label?: string;
  type?: string;
}

export const changeInputType = createAction(
  '[appData] change form type',
  (resolve) => (payload: Itest) => resolve(payload),
);

export const removeFormField = createAction(
  '[appData] remove form field',
  (resolve) => (formFieldId: number) => resolve(formFieldId),
);
