import * as React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';

import AvatarPersonal from '../AvatarPersonal';

import RenderMobile from './RenderMobile';
import RenderMenu from './RenderMenu';
import useStyles from './styles';

const MenuPerfil: React.FC = () => {
  const classes = useStyles();
  const menuId = 'menu';
  const mobileMenuId = 'menu-mobile';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

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
      {mobileMoreAnchorEl ? (
        <RenderMobile
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          mobileMenuId={mobileMenuId}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
        />
      ) : null}
      {anchorEl ? (
        <RenderMenu
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          isMenuOpen={isMenuOpen}
          menuId={menuId}
        />
      ) : null}
    </>
  );
};

export default MenuPerfil;
