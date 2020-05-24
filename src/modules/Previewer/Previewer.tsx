import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import {
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';

export const Previewer = () => {
  const formFields = useSelector(getFormFields);

  return (
    <Grid container spacing={2}>
      {formFields &&
        formFields.map((formField) => {
          return (
            <Grid item xs={12}>
              {!formField.type && (
                <Paper variant="outlined">
                  <Typography>Select type</Typography>
                </Paper>
              )}

              {formField.type === 'Select' && (
                <>
                  <InputLabel id="demo-controlled-open-select-label">
                    Typ pola
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </>
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
