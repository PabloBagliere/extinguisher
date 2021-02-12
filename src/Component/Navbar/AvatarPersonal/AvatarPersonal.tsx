import * as React from 'react';
import { Avatar } from '@material-ui/core';

import useStyles from './styles';
interface props {
  initials: string;
}

const AvatarPersonal: React.FC<props> = ({ initials }) => {
  const classes = useStyles();

  return <Avatar className={classes.orange}> {initials} </Avatar>;
};

export default AvatarPersonal;
