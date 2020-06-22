import React from 'react';
import {
  createStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IFormField } from '~/types';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);

type Props = {
  formField: IFormField;
};

export const SelectField = ({ formField: { values, label } }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fieldType, setFieldType] = React.useState<string | number>('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string;

    setFieldType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fieldType}
          onChange={handleChange}
        >
          {values.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
