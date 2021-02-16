import * as React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';

const ActionDashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Fab aria-label="add" className={classes.fab} color="primary">
        <AddIcon />
      </Fab>
    </>
  );
};

export default ActionDashboard;
