import s from './LoginPage.module.css';
import LoginForm from 'components/LoginForm';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';
import { useLocation, Navigate, useNavigate, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const LoginPage = () => {
  // let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();

  // let from = location.state?.from?.pathname || "/";
  return (
    <Section className={s.section}>
      <Container className={s.container}>
        <Background>
          <div className={s.loginBox}>
            <h1 className={s.title}>Finance App</h1>
            <div className={s.subBox}></div>
            <LoginForm classPosition={s.loginForm} />
          </div>
        </Background>
      </Container>
    </Section>
  );
};

export default LoginPage;
