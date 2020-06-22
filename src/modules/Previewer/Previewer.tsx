import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import {
  createStyles,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MessageType } from '~/types';
import { CheckBoxField, EmptyField, SelectField } from './components';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);

export const Previewer = () => {
  const classes = useStyles();
  const formFields = useSelector(getFormFields);
  // const [setFieldType] = React.useState<string | number>('');
  const [radio] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // const type = event.target.value as string;
    // setFieldType(type);
  };

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
        formFields.map((formField, index) => {
          const { type } = formField;

          return (
            <Grid item xs={12} key={index}>
              {!type && <EmptyField />}

              {type === SELECT && <SelectField formField={formField} />}

              {type === CHECKBOX && <CheckBoxField formField={formField} />}

              {type === RADIO && (
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={radio}
                    onChange={handleChange}
                  >
                    {formField.values.map((value) => {
                      if (value.length) {
                        return (
                          <FormControlLabel
                            value={value}
                            control={<Radio />}
                            label={value}
                          />
                        );
                      }

                      return 'empty';
                    })}
                  </RadioGroup>
                </FormControl>
              )}

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
