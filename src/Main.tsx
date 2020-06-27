import React, { useEffect } from 'react';
import {
  Card,
  createStyles,
  Grid,
  Theme,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppHeader, Fabs } from '~/components';
import { Builder, Previewer } from '~/modules';
import { getForm } from './utils';
import { loadForm } from './store';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100vh - 90px)',
    },
    fullWidth: {
      width: '100%',
    },
  }),
);

export const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const documentQueryID = urlParams.get('id');

  useEffect(() => {
    if (documentQueryID) {
      const newForm = getForm(documentQueryID);
      dispatch(loadForm(newForm));
    }
  }, [dispatch, documentQueryID]);

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
          <Card className={classes.fullWidth}>
            <CardContent>
              <Builder />
            </CardContent>
          </Card>
        </Grid>

        <Grid container item xs={6}>
          <Card className={classes.fullWidth}>
            <CardContent>
              <Previewer />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Fabs />
    </>
  );
};
