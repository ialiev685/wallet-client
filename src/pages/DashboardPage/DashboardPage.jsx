import { useMediaQuery } from 'react-responsive';
import s from './DashboardPage.module.css';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import DiagramTab from 'components/DiagramTab';

const DashboardPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (

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
          <div className={s.rightSideBox}>
            <DiagramTab />
          </div>
        </Container>
      </Section>
    </Background>

  );
};

export default DashboardPage;
