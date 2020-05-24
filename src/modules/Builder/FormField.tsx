import React from 'react';

import {
  createStyles,
  FormControl,
  Grid,
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
import { changeInputType, removeFormField } from '~/store';

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
  const [label, setLabel] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onRemoveField = () => {
    dispatch(removeFormField(id));
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string;

    setFieldType(type);
    dispatch(
      changeInputType({
        id,
        type,
      }),
    );
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
            <MenuItem value={'Checkbox'}>Checkbox</MenuItem>
            <MenuItem value={'Select'}>Select</MenuItem>
            <MenuItem value={'Area'}>Text area</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {fieldType === 'Select' && (
        <>
          <TextField id="outlined-basic" label="Option" variant="outlined" />
        </>
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
