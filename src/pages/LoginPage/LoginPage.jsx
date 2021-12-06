import s from './LoginPage.module.css';
import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  return (
    <div className={s.loginBox}>
      <h1 className={s.title}>Finance App</h1>
      <div className={s.subBox}></div>
      <LoginForm classPosition={s.loginForm} />
    </div>
  );
};

export default LoginPage;
