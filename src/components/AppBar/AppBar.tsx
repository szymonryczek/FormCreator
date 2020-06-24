import React from 'react';
import { Tab, Tabs, AppBar as MaterialBar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { changeTab } from '~/store';
import { getTabId } from '~/store/selectors';

export const AppBar = () => {
  const dispatch = useDispatch();
  const tabId = useSelector(getTabId);

  const onTabChange = (event: unknown, targetTabId: number) => {
    dispatch(changeTab(targetTabId));
  };

  return (
    <MaterialBar position="static" color="default">
      <Tabs
        value={tabId}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab label="Editor" />
        <Tab label="Previewer" />
        <Tab label="Saved forms" />
      </Tabs>
    </MaterialBar>
  );
};
