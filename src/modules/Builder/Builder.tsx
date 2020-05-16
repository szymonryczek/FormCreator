import React from 'react';

import {
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export const Builder = () => {
  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldType(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Grid container item alignItems="center" justify="space-around">
        <TextField required id="name" label="Nazwa" />
        <TextField required id="etykieta" label="Etykieta" />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Typ pola
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Checkbox</MenuItem>
            <MenuItem value={20}>Select</MenuItem>
            <MenuItem value={30}>Text area</MenuItem>
          </Select>
        </FormControl>
        <TextField required id="wartosc" label="Wartość" />
      </Grid>

      <Grid container item alignItems="center" justify="space-around">
        <TextField required id="name" label="Nazwa" />
        <TextField required id="etykieta" label="Etykieta" />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Typ pola
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Checkbox</MenuItem>
            <MenuItem value={20}>Select</MenuItem>
            <MenuItem value={30}>Text area</MenuItem>
          </Select>
        </FormControl>
        <TextField required id="wartosc" label="Wartość" />
      </Grid>
    </>
  );
};
