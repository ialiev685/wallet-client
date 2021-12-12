import s from './LoginPage.module.css';
import { useMediaQuery } from 'react-responsive';
import LoginForm from 'components/LoginForm';
// import Background from 'pages/Background';
import Container from 'components/Container';
// import Section from 'components/Section';
// import { useLocation, Navigate, useNavigate, Route } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';
import PictureTablet from '../../images/background-images/PictureTabletLogin.png';
import PictureDesctop from '../../images/background-images/PictureDesktopLogin.png';

const LoginPage = () => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
    // query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();

  // let from = location.state?.from?.pathname || "/";
  return (
    <div>
      <Container className={s.container}>
        <div className={s.loginBox}>
          <div className={s.titleBox}>
            {isTablet && (
              <img className={s.img} src={PictureTablet} alt="boy" />
            )}
            {isDesktop && (
              <img
                className={s.img}
                src={PictureDesctop}
                alt="парень с тележкой"
              />
            )}

            <h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.subBox}>
            <LoginForm classPosition={s.loginForm} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
