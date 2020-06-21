import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { InputText } from '~/modules/Builder/components/SelectField/InputText';
import { useDispatch } from 'react-redux';
import { addSelectValue } from '~/store';

type Props = {
  formFieldId: number;
  values: any;
};

export const SelectField = ({ formFieldId, values }: Props) => {
  const dispatch = useDispatch();

  const addValue = () => {
    dispatch(addSelectValue(formFieldId));
  };

  return (
    <Grid>
      {values?.map((formValue: any, index: number) => (
        <InputText
          key={index}
          formFieldId={formFieldId}
          fieldValueId={index}
          fieldValue={formValue}
        />
      ))}

      <Button onClick={addValue}>Add</Button>
    </Grid>
  );
};
