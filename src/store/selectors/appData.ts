import { State } from '~/store';

export const getTabId = (state: State) => state.appData.tabId;
export const getFormFields = (state: State) => state.appData.forms;
