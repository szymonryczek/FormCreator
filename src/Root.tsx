import React from 'react';
// import clsx from 'clsx';
import { hot } from 'react-hot-loader/root';
import SwipeableViews from 'react-swipeable-views';
import {
  Box,
  Container,
  createStyles,
  // Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Theme,
  Typography,
  useTheme,
  // Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';

import { AppHeader, AppBar } from '~/components';
import { createStore } from '~/store/configure';
import { Provider } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(-3),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  }),
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

type Props = {
  store: ReturnType<typeof createStore>;
};

const Root = ({ store }: Props) => {
  const classes = useStyles();
  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldType(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
              <Grid container item alignItems="center" justify="space-around">
                <TextField required id="name" label="Nazwa" />
                <TextField required id="etykieta" label="Etykieta" />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Typ pola
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={fieldType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Checkbox</MenuItem>
                    <MenuItem value={20}>Select</MenuItem>
                    <MenuItem value={30}>Text area</MenuItem>
                  </Select>
                </FormControl>
                <TextField required id="wartosc" label="Wartość" />
              </Grid>

              <Grid container item alignItems="center" justify="space-around">
                <TextField required id="name" label="Nazwa" />
                <TextField required id="etykieta" label="Etykieta" />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Typ pola
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={fieldType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Checkbox</MenuItem>
                    <MenuItem value={20}>Select</MenuItem>
                    <MenuItem value={30}>Text area</MenuItem>
                  </Select>
                </FormControl>
                <TextField required id="wartosc" label="Wartość" />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Previewer
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Saved forms list
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
