import { Tab, Tabs, AppBar as MaterialBar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '~/store';
import { getTabId } from '~/store/selectors/appData';

const a11yProps = (index: any) => {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
};

export const AppBar = () => {
  const dispatch = useDispatch();
  const tabId = useSelector(getTabId);

  const onTabChange = (event: unknown, tabId: number) => {
    dispatch(changeTab(tabId));
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
        <Tab label="Editor" {...a11yProps(0)} />
        <Tab label="Previewer" {...a11yProps(1)} />
        <Tab label="Saved forms" {...a11yProps(2)} />
      </Tabs>
    </MaterialBar>
  );
};
