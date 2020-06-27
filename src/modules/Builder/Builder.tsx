import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FormBuilderCase } from '~/modules/Builder/FormBuilderCase';
import { getFormFields } from '~/store';

export const Builder = () => {
  const formFields = useSelector(getFormFields);

  return (
    <>
      {formFields.length ? (
        formFields.map((formField, index) => (
          <React.Fragment key={index}>
            <Grid
              key={`builder-field-${index}`}
              container
              item
              alignItems="center"
              justify="space-around"
            >
              <FormBuilderCase formField={formField} />
            </Grid>

            <Divider />
          </React.Fragment>
        ))
      ) : (
        <Typography>Empty form, add new field</Typography>
      )}
    </>
  );
};
