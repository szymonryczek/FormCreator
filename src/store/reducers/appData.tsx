import { createReducer } from 'deox';

import {
  addFormField,
  changeInputType,
  changeTab,
  removeFormField,
} from '../actions';
import { IFormField } from '~/types';

const initialState = {
  tabId: 0,
  forms: [] as IFormField[],
};

export const appData = createReducer(initialState, (handleAction) => [
  handleAction(changeTab, (state, { payload: tabId }) => ({
    ...state,
    tabId,
  })),
  handleAction(addFormField, (state, { payload: formField }) => ({
    ...state,
    forms: [...state.forms, formField],
  })),
  handleAction(changeInputType, (state, { payload }) => {
    const newForms = [...state.forms];
    newForms[payload.id] = {
      ...state.forms[payload.id],
      ...payload,
    };

    return {
      ...state,
      forms: newForms,
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
