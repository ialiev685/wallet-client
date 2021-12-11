import s from './LoginPage.module.css';
import LoginForm from 'components/LoginForm';
import Background from 'pages/Background';
import { useLocation, Navigate, useNavigate, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const LoginPage = () => {
  // let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();

  // let from = location.state?.from?.pathname || "/";
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
