import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { removeFormField } from '~/store';

type Props = {
  formCaseID: number;
};

export const CaseDelete = ({ formCaseID }: Props) => {
  const dispatch = useDispatch();

  const onRemoveField = () => {
    dispatch(removeFormField(formCaseID));
  };

  return (
    <IconButton
      aria-label="delete"
      color="secondary"
      onClick={onRemoveField}
      style={{ marginLeft: 'auto' }}
    >
      <DeleteIcon />
    </IconButton>
  );
};
