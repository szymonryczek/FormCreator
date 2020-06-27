import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { IFormField } from '~/types';

type Props = {
  formField: IFormField;
};

export const EmailField = ({ formField: { label } }: Props) => {
  const [error, setError] = useState(false);
  const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailRegex.test(event.target.value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <TextField
      error={error}
      label={label}
      helperText={error ? 'Niepoprawny adres email' : ''}
      type="email"
      onChange={handleChange}
    />
  );
};
