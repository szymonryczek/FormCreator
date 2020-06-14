import { createReducer } from 'deox';

import {
  addFormField,
  changeInputType,
  changeTab,
  removeFormField,
  addSelectValue,
  updateFieldValues,
} from '../actions';
import { IFormField } from '~/types';

const initialState = {
  tabId: 0,
  forms: [] as IFormField[],
};

let ids = 0;

export const appData = createReducer(initialState, (handleAction) => [
  handleAction(changeTab, (state, { payload: tabId }) => ({
    ...state,
    tabId,
  })),
  handleAction(addFormField, (state) => {
    const fields = [...state.forms];
    fields.push({
      id: ids++,
      values: [],
    });

    return {
      ...state,
      forms: [...fields],
    };
  }),
  handleAction(changeInputType, (state, { payload }) => {
    const newForms = [...state.forms];
    newForms[payload.id] = {
      ...newForms[payload.id],
      ...payload,
    };

    return {
      ...state,
      forms: [...newForms],
    };
  }),
  handleAction(addSelectValue, (state, { payload }) => {
    const newForms = state.forms.map((form) => {
      if (form.id === payload) {
        return {
          ...form,
          values: [
            ...form.values,
            {
              value: '',
              label: '',
            },
          ],
        };
      }

      return form;
    });

    return {
      ...state,
      forms: [...newForms],
    };
  }),
  handleAction(updateFieldValues, (state, { payload }) => {
    const newForms = state.forms.map((form) => {
      if (form.id === payload.id) {
        return {
          ...form,
          values: [payload.fieldValue],
        };
      }

      return form;
    });

    return {
      ...state,
      forms: [...newForms],
    };
  }),
  handleAction(removeFormField, (state, { payload: formFieldId }) => {
    let newForms = [...state.forms];
    newForms.splice(formFieldId, 1);

    return {
      ...state,
      forms: [...newForms],
    };
  }),
]);
