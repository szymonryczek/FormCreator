export const DoumentsNames = 'FormCreator';

const saveToDocumentsList = (documentName: string) => {
  try {
    let serializedState = localStorage.getItem(DoumentsNames);
    if (serializedState === null) serializedState = '[]';

    const state = JSON.parse(serializedState);
    state.push(documentName);

    localStorage.setItem(DoumentsNames, JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
};

export const saveDocument = (store: any) => {
  const storeSchema = store.getState().appData;
  try {
    const serializedState = JSON.stringify(storeSchema);
    const documentName = `document-${Date.now()}`;
    localStorage.setItem(documentName, serializedState);
    saveToDocumentsList(documentName);
  } catch (err) {
    console.log(err);
  }
};

export const deleteForm = (formId: string) => {
  try {
    const serializedState = localStorage.getItem(DoumentsNames);
    if (serializedState === null) {
      return undefined;
    }

    const forms = JSON.parse(serializedState);
    forms.splice(forms.indexOf(formId), 1);

    localStorage.setItem(DoumentsNames, JSON.stringify(forms));
    localStorage.removeItem(formId);
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getForm = (formId: string) => {
  try {
    const serializedState = localStorage.getItem(formId);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const loadDocumentList = () => {
  try {
    const serializedState = localStorage.getItem(DoumentsNames);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return null;
  }
};
