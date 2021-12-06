import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from 'redux/auth/auth-operations';
import s from './LoginForm.module.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from 'helpers/svg/logo.svg';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});

const LoginForm = ({ classPosition }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { email, password } = values;
        dispatch(logInUser({ email, password }));
      }}
    >
      <Form className={`${s.form} ${classPosition}`}>
        <img className={s.logoIcon} src={logo} alt="логотип" />

        <Grid className={s.wrapper}>
          <EmailIcon className={`${s.icon} ${s.iconEmail}`} />
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <Grid className={s.errorMessage}>
            <ErrorMessage name="email" className={s.errorMessage} />
          </Grid>
        </Grid>

        <Grid className={s.wrapper}>
          <LockIcon className={`${s.icon} ${s.iconLock}`} />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <Grid className={s.errorMessage}>
            <ErrorMessage name="password" />
          </Grid>
        </Grid>

        <Button variant="contained" type="submit" className={s.button}>
          ВХОД
        </Button>
        <Button
          variant="outlined"
          type="button"
          className={s.buttonLogin}
          onClick={() => navigate('/signup')}
        >
          РЕГИСТРАЦИЯ
        </Button>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
};

export default LoginForm;
