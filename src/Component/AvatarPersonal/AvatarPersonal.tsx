import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import * as React from 'react';

interface props {
  initials: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  }),
);

const AvatarPersonal: React.FC<props> = ({ initials }) => {
  const classes = useStyles();

  return <Avatar className={classes.orange}> {initials} </Avatar>;
};

export default AvatarPersonal;
