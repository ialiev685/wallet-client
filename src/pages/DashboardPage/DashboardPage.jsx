import s from './DashboardPage.module.css';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';

const DashboardPage = () => {
  return (
    <Background className={s.dashboardPage}>
      <div className={s.transparentBackground}>
        <div className={s.border}></div>
      </div>
    </Background>
  );
};

export default DashboardPage;
