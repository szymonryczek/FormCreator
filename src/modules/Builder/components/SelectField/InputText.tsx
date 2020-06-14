import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { FormFieldValue } from '~/types';
import { useDispatch } from 'react-redux';
import { updateFieldValues } from '~/store';

type Props = {
  formFieldId: number;
  fieldValue: FormFieldValue;
};

export const InputText = ({ formFieldId, fieldValue }: Props) => {
  const [value, setValue] = React.useState(fieldValue.value || '');
  const [label, setLabel] = React.useState(fieldValue.label || '');
  const dispatch = useDispatch();

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(
      updateFieldValues({
        id: formFieldId,
        fieldValue: {
          value,
          label,
        },
      }),
    );
  };

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
    dispatch(
      updateFieldValues({
        id: formFieldId,
        fieldValue: {
          value,
          label,
        },
      }),
    );
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
