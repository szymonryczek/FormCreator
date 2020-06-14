import { createAction } from 'deox';
import { FormFieldValue } from '~/types';

export const changeTab = createAction(
  '[appData] change tab',
  (resolve) => (tabId: number) => resolve(tabId),
);

export const addFormField = createAction(
  '[appData] add form field',
  (resolve) => () => resolve(),
);

export const addSelectValue = createAction(
  '[appData] add select field option',
  (resolve) => (formFieldId: number) => resolve(formFieldId),
);
export const updateFieldValues = createAction(
  '[appData] update fields values',
  (resolve) => (payload: { id: number; fieldValue: FormFieldValue }) =>
    resolve(payload),
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
