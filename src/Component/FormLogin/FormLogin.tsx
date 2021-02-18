import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import userSchema from 'Utils/Schema/userSchema';
import app from 'Firebase/Client';
import { useSnackbar } from 'notistack';

import useStyles from './styles';

interface UserInput {
  email: string;
  password: string;
}

const FormLogin: React.FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const { register, errors, handleSubmit } = useForm<UserInput>({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = async (values: UserInput): Promise<void> => {
    setLoading(!loading);
    await app
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setLoading(!loading);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: 'error' });
        setLoading(!loading);
      });
  };

  return (
    <form noValidate className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        autoFocus
        fullWidth
        required
        autoComplete="email"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : null}
        id="email"
        inputRef={register}
        label="Email"
        margin="normal"
        name="email"
        variant="outlined"
      />
      <TextField
        fullWidth
        required
        autoComplete="current-password"
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : null}
        id="password"
        inputRef={register}
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
        disabled={loading}
        type="submit"
        variant="contained"
      >
        Iniciar
      </Button>
    </form>
  );
};

export default FormLogin;
