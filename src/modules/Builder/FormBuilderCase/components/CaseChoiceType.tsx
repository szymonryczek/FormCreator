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
import { MessageType } from '~/types/MessageType';

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
        <MenuItem value={CHECKBOX}>{CHECKBOX}</MenuItem>
        <MenuItem value={DATE}>{DATE}</MenuItem>
        <MenuItem value={EMAIL}>{EMAIL}</MenuItem>
        <MenuItem value={RADIO}>{RADIO}</MenuItem>
        <MenuItem value={SELECT}>{SELECT}</MenuItem>
        <MenuItem value={TEXT_AREA}>{TEXT_AREA}</MenuItem>
        <MenuItem value={TEXT_FIELD}>{TEXT_FIELD}</MenuItem>
      </Select>
    </FormControl>
  );
};
