import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { InputText } from '~/modules/Builder/components/SelectField/InputText';
import { useDispatch } from 'react-redux';
import { addSelectValue } from '~/store';
import { FormFieldValue } from '~/types';

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
      {values?.length &&
        values?.map((formValue: FormFieldValue, index: number) => (
          <InputText
            key={index}
            formFieldId={formFieldId}
            fieldValue={formValue}
          />
        ))}

      <Button onClick={addValue}>Add</Button>
    </Grid>
  );
};
