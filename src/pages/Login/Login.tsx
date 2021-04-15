import * as React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { SnackbarProvider } from 'notistack';
import { useLocation } from 'wouter';
import FormLogin from 'Component/FormLogin';
import { Auth } from 'Context/userContext';

import useStyles from './styles';

const Login: React.FC = () => {
  const classes = useStyles();
  const [, navigate] = useLocation();
  const ContextUser = React.useContext(Auth);

  React.useEffect(() => {
    if (ContextUser?.user) {
      navigate('/');
    }
  }, [ContextUser?.user, navigate]);

  return (
    <SnackbarProvider preventDuplicate maxSnack={2}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesion
          </Typography>
          <FormLogin />
        </div>
      </Container>
    </SnackbarProvider>
  );
};

export default Login;
