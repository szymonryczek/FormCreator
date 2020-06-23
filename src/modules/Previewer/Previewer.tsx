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

              {type === EMAIL && (
                <>
                  <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    type="email"
                  />
                </>
              )}

              {type === TEXT_FIELD && (
                <TextField
                  id="standard-textarea"
                  label="Single Placeholder"
                  placeholder="Placeholder"
                />
              )}

              {type === TEXT_AREA && (
                <TextField
                  id="standard-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                />
              )}

              {type === DATE && (
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
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
