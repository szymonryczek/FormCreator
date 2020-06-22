import React from 'react';
import { Divider, Typography } from '@material-ui/core';

export const EmptyField = () => (
  <>
    <div
      style={{
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>Select field type to display</Typography>
    </div>
    <Divider />
  </>
);
