import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Auth } from 'Context/userContext';

import DrawerPersonal from './DrawerPersonal';
import useStyles from './styles';
import MenuPerfil from './MenuPerfil';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const ContextAuth = React.useContext(Auth);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              className={classes.menuButton}
              color="inherit"
              edge="start"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography noWrap className={classes.title} variant="h6">
              Extintores N°468
            </Typography>
            <div className={classes.grow} />
            {ContextAuth?.user ? <MenuPerfil /> : null}
          </Toolbar>
        </AppBar>
      </div>
      <DrawerPersonal setState={setOpenDrawer} state={openDrawer} />
    </>
  );
};

export default Navbar;
