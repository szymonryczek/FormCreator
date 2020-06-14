export type FormFieldValue = {
  value: string;
  label: string;
};

export type IFormField = {
  id: number;
  type?: string;
  name?: '';
  label?: string;
  values: FormFieldValue[];
};
