import { TextField } from '@material-ui/core';
import React from 'react';

const values = [
  {
    values: '1',
    label: 'tak',
  },
  {
    values: '2',
    label: 'nie',
  },
];

export const InputTextField = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Option"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};
