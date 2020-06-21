import {
  createStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { changeInputType } from '~/store';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

type Props = {
  formCaseID: number;
};

export const CaseChoiceType = ({ formCaseID }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string;

    setFieldType(type);
    dispatch(
      changeInputType({
        id: formCaseID,
        type,
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
        <MenuItem value={'Checkbox'}>Checkbox</MenuItem>
        <MenuItem value={'Date'}>Data</MenuItem>
        <MenuItem value={'Email'}>Email</MenuItem>
        <MenuItem value={'Radio'}>Radio</MenuItem>
        <MenuItem value={'Select'}>Select</MenuItem>
        <MenuItem value={'TextArea'}>Text area</MenuItem>
        <MenuItem value={'TextField'}>Text field</MenuItem>
      </Select>
    </FormControl>
  );
};
