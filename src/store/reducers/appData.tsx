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
  handleAction(removeFormField, (state, { payload: formFieldId }) => {
    let newForms = [...state.forms];
    newForms.splice(formFieldId, 1);

    return {
      ...state,
      forms: [...newForms],
    };
  }),
]);
