import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { InputText } from '~/modules/Builder/FormBuilderCase/components/SelectField/InputText';
import { addSelectValue } from '~/store';

type Props = {
  formCaseID: number;
  formCaseValues: any;
};

export const SelectField = ({ formCaseID, formCaseValues }: Props) => {
  const dispatch = useDispatch();

  const addValue = () => {
    dispatch(addSelectValue(formCaseID));
  };

  return (
    <Grid container spacing={1} alignItems="center">
      {formCaseValues?.map((formValue: any, index: number) => (
        <Grid item key={index}>
          <InputText
            key={index}
            formFieldId={formCaseID}
            fieldValueId={index}
            fieldValue={formValue}
          />
        </Grid>
      ))}

      <Grid item>
        <Button variant="contained" color="primary" onClick={addValue}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
