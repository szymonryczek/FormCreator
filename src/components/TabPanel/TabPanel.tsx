import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export const TabPanel = ({ children, value, index, ...other }: Props) => (
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
