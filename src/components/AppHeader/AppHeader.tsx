import React from 'react';

import { Avatar, Grid } from '@material-ui/core';

export const AppHeader = () => (
  <Grid container item spacing={1} alignItems="center">
    <Grid item>
      <Avatar alt="Form Creator" src="/public/form-creator.png" />
    </Grid>

    <Grid item>
      <h1>Magic Form</h1>
    </Grid>
  </Grid>
);
