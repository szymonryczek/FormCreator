import React from 'react';
import {
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  FormGroup,
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

export const CheckBoxField = ({ formField: { values } }: Props) => {
  const classes = useStyles();

  const [checkbox, setCheckbox] = React.useState(
    values.map((value) => {
      if (value.length) {
        return {
          [value]: false,
        };
      }

      return false;
    }),
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {values.map((value) => {
            if (value.length) {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox[value] as boolean}
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
  );
};
