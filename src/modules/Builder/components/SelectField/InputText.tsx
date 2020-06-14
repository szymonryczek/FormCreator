import { Grid, TextField } from '@material-ui/core';
import React from 'react';

// const values = [
//   {
//     values: '1',
//     label: 'tak',
//   },
//   {
//     values: '2',
//     label: 'nie',
//   },
// ];

export const InputText = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  return (
    <Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Option"
          variant="outlined"
          value={value}
          onChange={handleValue}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Option"
          variant="outlined"
          value={label}
          onChange={handleLabel}
        />
      </Grid>
    </Grid>
  );
};
