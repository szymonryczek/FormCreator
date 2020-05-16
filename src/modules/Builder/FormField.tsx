import React from 'react';

import {
  createStyles,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import { IFormField } from '~/types';
import { useDispatch } from 'react-redux';
import { removeFormField } from '~/store';

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

type Props = {
  id: number;
  formField: IFormField;
};

export const FormField = ({ id, formField }: Props) => {
  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onRemoveField = () => {
    dispatch(removeFormField(id));
  };

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
      <TextField required label="Nazwa" value={`Field#${id}`} />
      <TextField required label="Etykieta" />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Typ pola</InputLabel>
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

      <TextField required label="Wartość" />

      <IconButton aria-label="delete" color="secondary" onClick={onRemoveField}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};
