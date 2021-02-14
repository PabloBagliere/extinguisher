import * as React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useLocation } from 'wouter';
import app from 'Firebase/Client';

interface props {
  anchorEl: HTMLElement | null;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

const signOut = (): void => {
  app.auth().signOut();
};

const RenderMenu: React.FC<props> = ({ anchorEl, menuId, isMenuOpen, handleMenuClose }) => {
  const [, navigate] = useLocation();

  const navigateDashboard = () => {
    navigate('/dashboard');
    handleMenuClose();
  };

  return (
    <Menu
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      open={isMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={navigateDashboard}>Dashboard</MenuItem>
      <MenuItem onClick={signOut}>Cerrar sesion</MenuItem>
    </Menu>
  );
};

export default RenderMenu;
