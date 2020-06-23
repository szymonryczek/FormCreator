import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  createStyles,
} from '@material-ui/core';
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

export const RadioField = ({ formField: { values } }: Props) => {
  const classes = useStyles();

  const [radio, setRadio] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={radio}
        onChange={handleChange}
      >
        {values.map((value) => {
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
  );
};

export default RadioField;
