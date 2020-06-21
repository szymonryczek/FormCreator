import React from 'react';

import { Grid, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IFormField } from '~/types';
import { useDispatch } from 'react-redux';
import { changeInputType, removeFormField } from '~/store';
import { SelectField, ChoiceFieldType } from '~/modules/Builder/components';

type Props = {
  formField: IFormField;
};

export const FormField = ({ formField }: Props) => {
  const [label, setLabel] = React.useState<string | number>('');
  const dispatch = useDispatch();

  const onRemoveField = () => {
    dispatch(removeFormField(formField.id));
  };

  const handleEtykieta = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    setLabel(label);

    dispatch(
      changeInputType({
        id: formField.id,
        label,
      }),
    );
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2}>
        <TextField required label="Nazwa" value={`Field#${formField.id}`} />
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
        <ChoiceFieldType id={formField.id} />
      </Grid>

      {formField.type === 'Select' && (
        <SelectField formFieldId={formField.id} values={formField.values} />
      )}

      {formField.type === 'Checkbox' && (
        <SelectField formFieldId={formField.id} values={formField.values} />
      )}

      {formField.type === 'Radio' && (
        <SelectField formFieldId={formField.id} values={formField.values} />
      )}

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
