import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import { MessageType } from '~/types';
import {
  CheckBoxField,
  EmptyField,
  SelectField,
  RadioField,
  EmailField,
} from './components';

export const Previewer = () => {
  const formFields = useSelector(getFormFields);

  const {
    CHECKBOX,
    DATE,
    EMAIL,
    RADIO,
    SELECT,
    TEXT_AREA,
    TEXT_FIELD,
  } = MessageType;

  return (
    <Grid container spacing={1}>
      {formFields &&
        formFields.map((formField) => {
          const { type } = formField;

          return (
            <Grid item xs={12} key={formField.id}>
              {!type && <EmptyField />}

              {type === SELECT && <SelectField formField={formField} />}

              {type === CHECKBOX && <CheckBoxField formField={formField} />}

              {type === RADIO && <RadioField formField={formField} />}

              {type === EMAIL && <EmailField formField={formField} />}

              {type === TEXT_FIELD && (
                <TextField label={formField.label} placeholder="Placeholder" />
              )}

              {type === TEXT_AREA && (
                <TextField label={formField.label} multiline />
              )}

              {type === DATE && (
                <TextField
                  label={formField.label}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
