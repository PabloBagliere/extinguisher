import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
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

  const onSubmit = async (values: UserInput): Promise<void> => {
    setLoading(true);
    await app
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            enqueueSnackbar(
              'Contraseña o email invalido si sigue comuníquese con el administrador',
              { variant: 'error' },
            );
            break;
          case 'auth/wrong-password':
            enqueueSnackbar(
              'Contraseña o email invalido si sigue comuníquese con el administrador',
              { variant: 'error' },
            );
            break;
          case 'auth/too-many-requests':
            enqueueSnackbar(
              'Cuenta bloqueada por muchos intentos, comuníquese con el administrador',
              { variant: 'error' },
            );
            break;
          default:
            enqueueSnackbar(error.message, { variant: 'error' });
            break;
        }
      })
      .finally(() => setLoading(false));
  };
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<UserInput>({
    resolver: yupResolver(userSchema),
  });

  return (
    <form noValidate className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            fullWidth
            required
            autoComplete="email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            label="Email"
            margin="normal"
            variant="outlined"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
            label="Contraseña"
            margin="normal"
            type="password"
            variant="outlined"
            {...field}
          />
        )}
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
