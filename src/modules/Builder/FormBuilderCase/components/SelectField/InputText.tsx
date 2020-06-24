import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateFieldValues } from '~/store';

type Props = {
  fieldValueId: number;
  formFieldId: number;
  fieldValue: any;
};

export const InputText = ({ formFieldId, fieldValue, fieldValueId }: Props) => {
  const [option, setOption] = React.useState(fieldValue.label || '');
  const dispatch = useDispatch();

  const handleOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);

    dispatch(
      updateFieldValues({
        id: formFieldId,
        fieldValueId,
        fieldValue: event.target.value,
      }),
    );
  };

  return (
    <Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Option"
          variant="outlined"
          value={option}
          onChange={handleOption}
        />
      </Grid>
    </Grid>
  );
};
