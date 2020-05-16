import React from 'react';

import { Grid } from '@material-ui/core';

import { FormField } from '~/modules/Builder/FormField';

export const Builder = () => {
  return (
    <>
      <Grid container item alignItems="center" justify="space-around">
        <FormField />
      </Grid>
    </>
  );
};
