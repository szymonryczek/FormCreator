import React from 'react';
import { useSelector } from 'react-redux';

import { Divider, Grid } from '@material-ui/core';

import { FormField } from '~/modules/Builder/FormField';
import { getFormFields } from '~/store';

export const Builder = () => {
  const formFields = useSelector(getFormFields);

  return (
    <>
      {formFields.length ? (
        formFields.map((formField, index) => (
          <>
            <Grid
              key={`builder-field-${index}`}
              container
              item
              alignItems="center"
              justify="space-around"
            >
              <FormField id={index} formField={formField} />
            </Grid>

            <Divider />
          </>
        ))
      ) : (
        <p>Empty, Add new field</p>
      )}
    </>
  );
};
