import React from 'react';
import { Card, createStyles, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AppHeader, Fabs } from '~/components';
import { Builder, Previewer } from '~/modules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100vh - 90px)',
    },
  }),
);

export const Main = () => {
  const classes = useStyles();

  return (
    <>
      <AppHeader />

      <Grid
        container
        item
        xs={12}
        justify="space-between"
        wrap="nowrap"
        className={classes.root}
      >
        <Grid container item xs={6}>
          <Card style={{ width: '100%' }}>
            <Builder />
          </Card>
        </Grid>

        <Grid container item xs={6}>
          <Card style={{ width: '100%' }}>
            <Previewer />
          </Card>
        </Grid>
      </Grid>

      <Fabs />
    </>
  );
};
