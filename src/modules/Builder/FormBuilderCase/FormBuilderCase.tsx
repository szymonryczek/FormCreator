import React from 'react';
import { Grid } from '@material-ui/core';
import {
  CaseChoiceType,
  CaseDelete,
  CaseID,
  CaseLabel,
  ExternalFields,
} from '~/modules/Builder/FormBuilderCase/components';
import { IFormField } from '~/types';

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

    <Grid item>
      <ExternalFields id={id} type={type} values={values} />
    </Grid>

    <CaseDelete formCaseID={id} />
  </Grid>
);
