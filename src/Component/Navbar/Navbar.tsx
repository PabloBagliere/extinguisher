import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import RenderMobile from './RenderMobile';
import RenderMenu from './RenderMenu';
import AvatarPersonal from './AvatarPersonal';
import DrawerPersonal from './DrawerPersonal';
import useStyles from './styles';

const Navbar: React.FC = () => {
  const menuId = 'menu';
  const mobileMenuId = 'menu-mobile';
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-controls={menuId}
                aria-haspopup="true"
                aria-label="account of current user"
                color="inherit"
                edge="end"
                onClick={handleProfileMenuOpen}
              >
                <AvatarPersonal initials="PB" />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                aria-label="show more"
                color="inherit"
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <RenderMobile
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          mobileMenuId={mobileMenuId}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
        />
        <RenderMenu
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          isMenuOpen={isMenuOpen}
          menuId={menuId}
        />
      </div>
      <DrawerPersonal setState={setOpenDrawer} state={openDrawer} />
    </>
  );
};

export default Navbar;
