import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import {
  Checkbox,
  createStyles,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const [radio] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string;

    setFieldType(type);
  };

  return (
    <Grid container spacing={1}>
      {formFields &&
        formFields.map((formField, index) => {
          return (
            <Grid item xs={12} key={index}>
              {!formField.type && (
                <>
                  <div
                    style={{
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography>Select field type to display</Typography>
                  </div>
                  <Divider />
                </>
              )}

              {formField.type === 'Select' && (
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      {formField.label}
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={fieldType}
                      onChange={handleChange}
                    >
                      {formField.values.map((value) => (
                        <MenuItem value={value}>{value}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}

              {formField.type === 'Checkbox' && (
                <div>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormGroup>
                      {formField.values.map((value) => {
                        if (value.length) {
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={true}
                                  onChange={handleChange}
                                  name={value}
                                />
                              }
                              label={value}
                            />
                          );
                        }

                        return 'empty';
                      })}
                    </FormGroup>
                  </FormControl>
                </div>
              )}

              {formField.type === 'Radio' && (
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

              {formField.type === 'Email' && (
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

              {formField.type === 'TextField' && (
                <TextField
                  id="standard-textarea"
                  label="Single Placeholder"
                  placeholder="Placeholder"
                />
              )}

              {formField.type === 'TextArea' && (
                <TextField
                  id="standard-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                />
              )}

              {formField.type === 'Date' && (
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
