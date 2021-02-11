import { Avatar, Button, Container, TextField, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesion
        </Typography>
        <form noValidate className={classes.form}>
          <TextField
            autoFocus
            fullWidth
            required
            autoComplete="email"
            id="email"
            label="Email"
            margin="normal"
            name="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            id="password"
            label="Contraseña"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
          />
          <Button
            fullWidth
            className={classes.submit}
            color="primary"
            type="submit"
            variant="contained"
          >
            Iniciar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
