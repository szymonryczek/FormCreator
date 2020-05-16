import React from 'react';
// import clsx from 'clsx';
import { hot } from 'react-hot-loader/root';
import SwipeableViews from 'react-swipeable-views';
import {
  Container,
  createStyles,
  // Fab,
  Paper,
  Theme,
  useTheme,
  // Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { AppHeader, AppBar, TabPanel } from '~/components';
import { createStore } from '~/store/configure';
import { Provider } from 'react-redux';
import { Builder, FormsList, Previewer } from '~/modules';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      minHeight: 200,
    },
  }),
);

type Props = {
  store: ReturnType<typeof createStore>;
};

const Root = ({ store }: Props) => {
  const classes = useStyles();

  // const fabs = [
  //   {
  //     color: 'primary' as 'primary',
  //     className: classes.fab,
  //     icon: <AddIcon />,
  //     label: 'Add',
  //   },
  //   {
  //     color: 'secondary' as 'secondary',
  //     className: classes.fab,
  //     icon: <EditIcon />,
  //     label: 'Edit',
  //   },
  //   {
  //     color: 'inherit' as 'inherit',
  //     className: clsx(classes.fab, classes.fabGreen),
  //     icon: <UpIcon />,
  //     label: 'Expand',
  //   },
  // ];

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // const transitionDuration = {
  //   enter: theme.transitions.duration.enteringScreen,
  //   exit: theme.transitions.duration.leavingScreen,
  // };

  return (
    <Provider store={store}>
      <Container maxWidth="md" className={classes.root}>
        <AppHeader />
        <AppBar />

        <Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Builder />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Previewer />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <FormsList />
            </TabPanel>
          </SwipeableViews>

          {/*{fabs.map((fab, index) => (*/}
          {/*  <Zoom*/}
          {/*    key={fab.color}*/}
          {/*    in={value === index}*/}
          {/*    timeout={transitionDuration}*/}
          {/*    style={{*/}
          {/*      transitionDelay: `${*/}
          {/*        value === index ? transitionDuration.exit : 0*/}
          {/*      }ms`,*/}
          {/*    }}*/}
          {/*    unmountOnExit*/}
          {/*  >*/}
          {/*    <Fab*/}
          {/*      aria-label={fab.label}*/}
          {/*      className={fab.className}*/}
          {/*      color={fab.color}*/}
          {/*    >*/}
          {/*      {fab.icon}*/}
          {/*    </Fab>*/}
          {/*  </Zoom>*/}
          {/*))}*/}
        </Paper>
      </Container>
    </Provider>
  );
};

export default hot(Root);
