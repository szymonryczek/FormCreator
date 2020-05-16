import React from 'react';
import {
  Container,
  createStyles,
  Paper,
  Theme,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { AppBar, AppHeader, Fabs, TabPanel } from '~/components';
import { Builder, FormsList, Previewer } from '~/modules';
import { getTabId } from '~/store/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      minHeight: 200,
    },
  }),
);

export const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const tabId = useSelector(getTabId);

  return (
    <Container maxWidth="md" className={classes.root}>
      <AppHeader />
      <AppBar />

      <Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabId}
        >
          <TabPanel value={tabId} index={0} dir={theme.direction}>
            <Builder />
          </TabPanel>
          <TabPanel value={tabId} index={1} dir={theme.direction}>
            <Previewer />
          </TabPanel>
          <TabPanel value={tabId} index={2} dir={theme.direction}>
            <FormsList />
          </TabPanel>
        </SwipeableViews>

        <Fabs />
      </Paper>
    </Container>
  );
};
