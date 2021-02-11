import { Link, Typography } from '@material-ui/core';
import * as React from 'react';

const Copyright: React.FC = () => {
  return (
    <Typography align="center" color="textSecondary" variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="www.linkedin.com/in/pablo-bagliere/">
        Pablo Bagliere
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
