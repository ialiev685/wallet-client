import s from './LoginPage.module.css';
import { useMediaQuery } from 'react-responsive';
import LoginForm from 'components/LoginForm';

import Container from 'components/Container';

import PictureTablet from '../../images/background-images/PictureTabletLogin.png';
import PictureDesctop from '../../images/background-images/PictureDesktopLogin.png';

const LoginPage = () => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <Container className={s.container}>
      <div className={s.loginBox}>
        <div className={s.titleBox}>
          {isTablet && <img className={s.img} src={PictureTablet} alt="boy" />}
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
  );
};

export default LoginPage;
