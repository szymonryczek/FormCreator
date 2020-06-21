import React from 'react';
import { Grid } from '@material-ui/core';
import { IFormField } from '~/types';
import { SelectField, CaseChoiceType } from '~/modules/Builder/components';
import {
  CaseDelete,
  CaseID,
  CaseLabel,
} from '~/modules/Builder/FormBuilderCase/components';

type Props = {
  formField: IFormField;
};

export const FormBuilderCase = ({ formField: { id, values, type } }: Props) => (
  <Grid container spacing={1} alignItems="center">
    <Grid item xs={2}>
      <CaseID formCaseID={id} />
    </Grid>

    <Grid item xs={2}>
      <CaseLabel formCaseID={id} />
    </Grid>

    <Grid item xs={2}>
      <CaseChoiceType formCaseID={id} />
    </Grid>

    {type === 'Select' && (
      <SelectField formCaseID={id} formCaseValues={values} />
    )}

    {type === 'Checkbox' && (
      <SelectField formCaseID={id} formCaseValues={values} />
    )}

    {type === 'Radio' && (
      <SelectField formCaseID={id} formCaseValues={values} />
    )}

    <CaseDelete formCaseID={id} />
  </Grid>
);
