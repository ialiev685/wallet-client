import { useMediaQuery } from 'react-responsive';
import s from './DashboardPage.module.css';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Сurrency';

const DashboardPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Background className={s.dashboardPage}>
        <Section className={s.transparentBackground}>
          <Container className={s.container}>
            <div className={s.border}></div>
            <div className={s.leftSideBox}>
              <div className={s.navEndBalance}>
                <Navigation className={s.navigation} />
                {!isMobile && <Balance className={s.balance} />}
              </div>
              {!isMobile && <Currency className={s.currencyPosition} />}
            </div>

            {/* сюда вставить весь компонент со статистикой (за месяц, год) с классом rightSideBox */}
          </Container>
        </Section>
      </Background>
    </>
  );
};

export default DashboardPage;
