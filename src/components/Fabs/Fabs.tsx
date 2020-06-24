import React from 'react';
import { createStyles, Fab, Theme, useTheme, Zoom } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addFormField } from '~/store/actions';
import { getTabId } from '~/store/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export const Fabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabId = useSelector(getTabId);

  const OnAddFormField = () => {
    dispatch(addFormField());
  };

  const fabs = [
    {
      color: 'primary' as 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
      onClick: OnAddFormField,
    },
    {
      color: 'secondary' as 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
      onClick: OnAddFormField,
    },
    {
      color: 'inherit' as 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
      onClick: OnAddFormField,
    },
  ];

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={tabId === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              tabId === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
            onClick={fab.onClick}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </>
  );
};
