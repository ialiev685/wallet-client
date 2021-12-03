import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { Navigation } from 'react-router-dom';
import { registerUser } from 'redux/auth/auth-operations';
import s from './RegistrationForm.module.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from 'helpers/svg/logo.svg';
import ProgressBar from '../ProgressBar/ProgressBar';


const validationSchema = Yup.object({
  name: Yup.string()
    .min(1, 'Too short name!')
    .max(12, 'Too long name!')
    .required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const navigation = Navigation();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { name, email, password, passwordConfirm } = values;
        if (password !== passwordConfirm) {
          alert ("Пароль не совпадает, попробуйте ещё раз");
        }
        dispatch(registerUser({ name, email, password, passwordConfirm }));
      }}
    >
      <Form className={s.form}>
        <img className={s.logoIcon} src={logo} alt="логотип" />

        <Grid className={s.wrapper}>
          <EmailIcon className={`${s.icon} ${s.iconEmail}`} />
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </Grid>
        <Grid className={s.errorMessage}>
          <ErrorMessage name="email" className={s.errorMessage} />
        </Grid>
        <Grid className={s.wrapper}>
          <LockIcon className={`${s.icon} ${s.iconLock}`} />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Пароль"
          />
        </Grid>
        <Grid className={s.errorMessage}>
          <ErrorMessage name="password" />
        </Grid>

        <Grid className={s.wrapper}>
          <LockIcon className={`${s.icon} ${s.iconLockPass}`} />
          <Field
            className={s.input}
            type="password"
            name="passwordConfirm"
            placeholder="Подтвердите пароль"
          />
          <ProgressBar style={s.progressDone}/>
        </Grid>
        <Grid className={s.errorMessage}>
          <ErrorMessage name="password" className={s.errorMessage} />
        </Grid>
        <Grid className={s.wrapper}>
          <AccountBoxIcon className={`${s.icon} ${s.iconUser}`} />
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
          />
        </Grid>
        <Grid className={s.errorMessage}>
          <ErrorMessage name="name" className={s.errorMessage} />
        </Grid>
        <Button variant="contained" type="submit" className={s.button}>
          РЕГИСТРАЦИЯ
        </Button>
        <Button
          variant="outlined"
          type="button"
          className={s.buttonLogin}
          // onClick={() => navigation('/login')}
        >
          ВХОД
        </Button>
      </Form>
    </Formik>
  );
};

RegistrationForm.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
};

export default RegistrationForm;
