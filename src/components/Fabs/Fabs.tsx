import React, { useState } from 'react';
import {
  createStyles,
  Fab,
  Theme,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useStore } from 'react-redux';
import { addFormField, loadForm } from '~/store/actions';
import { saveDocument, loadDocumentList, getForm } from '~/utils';
import { FormList } from '../FormList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      minHeight: 200,
    },
    holder: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(2),
    },
  }),
);

export const Fabs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useStore();
  const [forms, setForms] = useState<''[]>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (open: boolean) => setIsOpen(open);

  const onAddFormField = () => {
    dispatch(addFormField());
  };

  const onSaveFormField = () => {
    saveDocument(store);
  };

  const onLoadFormField = () => {
    const result = loadDocumentList();
    setForms(result);
    setIsOpen(true);
  };

  const fabs = [
    {
      color: 'primary' as 'primary',
      icon: <AddIcon />,
      label: 'Add',
      onClick: onAddFormField,
    },
    {
      color: 'secondary' as 'secondary',
      icon: <SaveIcon />,
      label: 'Save',
      onClick: onSaveFormField,
    },
    {
      color: 'primary' as 'primary',
      icon: <GetAppIcon />,
      label: 'Save',
      onClick: onLoadFormField,
    },
  ];

  return (
    <>
      <div className={classes.holder}>
        {fabs.map((fab) => (
          <Fab
            key={fab.label}
            aria-label={fab.label}
            color={fab.color}
            onClick={fab.onClick}
          >
            {fab.icon}
          </Fab>
        ))}
      </div>

      <FormList forms={forms} isOpen={isOpen} handleOpen={handleOpen} />
    </>
  );
};
