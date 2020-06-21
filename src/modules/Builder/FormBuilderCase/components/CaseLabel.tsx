import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { changeInputType } from '~/store';

type Props = {
  formCaseID: number;
};

export const CaseLabel = ({ formCaseID }: Props) => {
  const [label, setLabel] = React.useState<string | number>('');
  const dispatch = useDispatch();

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    setLabel(label);

    dispatch(
      changeInputType({
        id: formCaseID,
        label,
      }),
    );
  };

  return (
    <TextField required label="Etykieta" value={label} onChange={handleLabel} />
  );
};
