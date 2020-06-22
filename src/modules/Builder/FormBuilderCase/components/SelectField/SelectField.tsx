import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { addSelectValue } from '~/store';
import { InputText } from '~/modules/Builder/FormBuilderCase/components/SelectField/InputText';

type Props = {
  formCaseID: number;
  formCaseValues: any;
};

export const SelectField = ({ formCaseID, formCaseValues }: Props) => {
  const dispatch = useDispatch();

  const addValue = () => {
    dispatch(addSelectValue(formCaseID));
  };

  console.log('render');

  return (
    <Grid>
      {formCaseValues?.map((formValue: any, index: number) => (
        <InputText
          key={index}
          formFieldId={formCaseID}
          fieldValueId={index}
          fieldValue={formValue}
        />
      ))}

      <Button onClick={addValue}>Add</Button>
    </Grid>
  );
};
