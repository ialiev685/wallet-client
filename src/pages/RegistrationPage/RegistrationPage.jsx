import s from './RegistrationPage.module.css';
import { useMediaQuery } from 'react-responsive';
import RegistrationForm from 'components/RegistrationForm';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';
import PictureTablet from '../../images/background-images/PictureTablet.png';
import PictureDesctop from '../../images/background-images/PictureDesktop.png';

const RegistrationPage = () => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
    // query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return (
    <div>
      <Container className={s.container}>
        {/* <Background> */}
        <div className={s.registrBox}>
          <div className={s.titleBox}>
            {isTablet && (
              <img className={s.img} src={PictureTablet} alt="girl" />
            )}
            {isDesktop && (
              <img className={s.img} src={PictureDesctop} alt="girl" />
            )}
            <h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.subBox}>
            <RegistrationForm classPosition={s.registrationForm} />
          </div>
        </div>
        {/* </Background> */}
      </Container>
    </div>
  );
};

export default RegistrationPage;
