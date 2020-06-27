import React, { useEffect } from 'react';
import {
  Card,
  createStyles,
  Grid,
  Theme,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { AppHeader, Fabs } from '~/components';
import { Builder, Previewer } from '~/modules';
import { loadForm } from './store';
import { getForm } from './utils';

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
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const documentQueryID = searchParams.get('id');

  useEffect(() => {
    if (documentQueryID) {
      const newForm = getForm(documentQueryID);
      if (newForm) {
        dispatch(loadForm(newForm));
      } else {
        history.push(`/`);
      }
    }
  }, [dispatch, documentQueryID, history]);

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
