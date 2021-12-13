import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
// import Navigation from 'components/Navigation';
import Currency from 'components/Currency';
// import Container from 'components/Container';
// import Section from 'components/Section';
// import Header from 'components/Header';
// import Background from 'pages/Background';
// import s from './CurrencyPage.module.css';
import { BasePage } from '../BasePage/BasePage';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      {/* <Container>
        <Header />
      </Container> */}
      {/* <Background className={s.backdrop}> */}
      {/* <Section className={s.currencyBackground}>
          <Container> */}
      <BasePage>
        {isMobile ? (
          <>
            {/* <div className={s.navigation}>
                  <Navigation />
                </div> */}
            <Currency />
          </>
        ) : (
          <Navigate to="/home" />
        )}
      </BasePage>
      {/* </Container> */}
      {/* </Section> */}
      {/* </Background> */}
    </>
  );
};

export default CurrencyPage;
