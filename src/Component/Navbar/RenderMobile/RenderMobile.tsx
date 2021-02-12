import * as React from 'react';
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import AvatarPersonal from '../AvatarPersonal';

interface props {
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMenuId: string;
}

const RenderMobile: React.FC<props> = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  mobileMenuId,
}) => {
  return (
    <Menu
      keepMounted
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      open={isMobileMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificacion</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
        >
          <AvatarPersonal initials="PB" />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );
};

export default RenderMobile;
