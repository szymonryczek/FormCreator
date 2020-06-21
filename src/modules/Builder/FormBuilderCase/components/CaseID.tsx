import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  formCaseID: number;
};

export const CaseID = ({ formCaseID }: Props) => (
  <TextField required label="ID Pola" value={`Pole#${formCaseID}`} />
);
