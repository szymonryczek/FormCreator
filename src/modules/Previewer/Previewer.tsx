import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import {
  createStyles,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
                <div style={{ height: '56px' }}>
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
                      {/*{console.log('formField', formField.value)}*/}
                      <MenuItem value={'m'}>Dobrze, good</MenuItem>
                      {/*<MenuItem value={'k'}>:C</MenuItem>*/}
                      {/*<MenuItem value={'i'}>Nie wiem</MenuItem>*/}
                    </Select>
                  </FormControl>
                </div>
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
