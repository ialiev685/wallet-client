import s from './LoginPage.module.css';
import LoginForm from 'components/LoginForm';
import Background from 'pages/Background';

const LoginPage = () => {
  return (
    <Background>
      <div className={s.loginBox}>
        <h1 className={s.title}>Finance App</h1>
        <div className={s.subBox}></div>
        <LoginForm classPosition={s.loginForm} />
      </div>
    </Background>
  );
};

export default LoginPage;
