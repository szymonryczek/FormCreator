import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { InputText } from '~/modules/Builder/components/SelectField/InputText';
import { useDispatch } from 'react-redux';
import { addSelectValue } from '~/store';

type Props = {
  formFieldId: string;
  values: any;
};

export const SelectField = ({ formFieldId, values }: Props) => {
  const dispatch = useDispatch();

  const addValue = () => {
    dispatch(addSelectValue(formFieldId));
  };

  return (
    <Grid>
      {values && values.map((value: any) => <InputText />)}

      <Button onClick={addValue}>Add</Button>
    </Grid>
  );
};
