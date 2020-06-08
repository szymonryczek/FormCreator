import React from 'react';

import { Grid, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IFormField } from '~/types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputType, getFormField, removeFormField } from '~/store';
import { SelectField, ChoiceFieldType } from '~/modules/Builder/components';

type Props = {
  id: number;
  formField?: IFormField;
};

export const FormField = ({ id }: Props) => {
  const [label, setLabel] = React.useState<string | number>('');
  const dispatch = useDispatch();
  const formField = useSelector(getFormField(id));

  const onRemoveField = () => {
    dispatch(removeFormField(id));
  };

  const handleEtykieta = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    setLabel(label);

    dispatch(
      changeInputType({
        id,
        label,
      }),
    );
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2}>
        <TextField required label="Nazwa" value={`Field#${id}`} />
      </Grid>

      <Grid item xs={2}>
        <TextField
          required
          label="Etykieta"
          value={label}
          onChange={handleEtykieta}
        />
      </Grid>

      <Grid item xs={2}>
        <ChoiceFieldType id={id} />
      </Grid>

      {formField.type === 'Select' && <SelectField />}

      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={onRemoveField}
        style={{ marginLeft: 'auto' }}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
};
