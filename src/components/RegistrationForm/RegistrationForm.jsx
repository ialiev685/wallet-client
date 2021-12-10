import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/auth-operations';
import s from './RegistrationForm.module.css';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from 'images/icons/logo.svg';
import ProgressBar from '../ProgressBar/ProgressBar';
import { ButtonWindow } from '../ButtonWindow/ButtonWindow';
import { toast } from 'react-toastify';

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

const RegistrationForm = ({ classPosition }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { name, email, password, passwordConfirm } = values;
        if (password !== passwordConfirm) {
          toast.error('Пароль не совпадает, попробуйте ещё раз!');
          return;
          // alert('Пароль не совпадает, попробуйте ещё раз');
        }
        toast.success('Поздравляем, вы успешно зарегистрировались!');
        dispatch(registerUser({ name, email, password }));
        navigate('/login');
        return;
      }}
    >
      {props => (
        <Form className={`${s.form} ${classPosition}`}>
          <img className={s.logoIcon} src={logo} alt="логотип" />

          <Grid className={s.wrapper}>
            <EmailIcon className={`${s.icon} ${s.iconEmail}`} />
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={props.handleChange}
              value={props.values.email}
            />
            <Grid className={s.errorMessage}>
              <ErrorMessage name="email" />
            </Grid>
          </Grid>

          <Grid className={s.wrapper}>
            <LockIcon className={`${s.icon} ${s.iconLock}`} />
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={props.handleChange}
              value={props.values.password}
            />
            <Grid className={s.errorMessage}>
              <ErrorMessage name="password" />
            </Grid>
          </Grid>

          <Grid className={s.wrapper}>
            <LockIcon className={`${s.icon} ${s.iconLock}`} />
            <Field
              className={s.input}
              type="password"
              name="passwordConfirm"
              placeholder="Подтвердите пароль"
              onChange={props.handleChange}
              value={props.values.passwordConfirm}
            />
            <Grid className={`${s.errorMessage} ${s.errorPass}`}>
              <ErrorMessage name="password" />
            </Grid>
            {props.values.password === props.values.passwordConfirm &&
            (props.values.password !== '' ||
              props.values.passwordConfirm !== '') ? (
              <ProgressBar style={s.progressDone} />
            ) : (
              <ProgressBar style={s.progressNone} />
            )}
          </Grid>

          <Grid className={s.wrapper}>
            <AccountBoxIcon className={`${s.icon} ${s.iconUser}`} />
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Ваше имя"
              onChange={props.handleChange}
              value={props.values.name}
            />
            <Grid className={s.errorMessage}>
              <ErrorMessage name="name" />
            </Grid>
          </Grid>
          <ButtonWindow
            type="submit"
            title="РЕГИСТРАЦИЯ"
            className={s.button}
            action="добавить"
          />
          <ButtonWindow
            type="submit"
            title="ВХОД"
            onClick={() => navigate('/login')}
          />
        </Form>
      )}
    </Formik>
  );
};

RegistrationForm.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
};

export default RegistrationForm;
