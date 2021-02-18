import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Requerido'),
  password: Yup.string()
    .min(8, 'Minimos caracteres 8')
    .max(150, 'Limite maximo 150 caracteres')
    .required('Requerido'),
});

export default userSchema;
