import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import ListItems from './ListItems';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerPersonal: React.FC<props> = ({ state, setState }) => {
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItems />
    </div>
  );

  return (
    <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};

export default DrawerPersonal;
