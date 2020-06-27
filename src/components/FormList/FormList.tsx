import React from 'react';
import {
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Dialog,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loadForm } from '~/store';
import { getForm } from '~/utils';

type Props = {
  forms: ''[] | undefined;
  isOpen: boolean;
  handleOpen: (arg1: boolean) => void;
};

export const FormList = ({ forms, isOpen, handleOpen }: Props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    handleOpen(false);
  };

  const handleListItemClick = (value: string) => {
    const newForm = getForm(value);
    dispatch(loadForm(newForm));
    handleOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Select saved form</DialogTitle>
      <List>
        {forms &&
          forms.map((form) => (
            <ListItem
              button
              onClick={() => handleListItemClick(form)}
              key={form}
            >
              <ListItemText primary={form} />
            </ListItem>
          ))}
      </List>
    </Dialog>
  );
};
