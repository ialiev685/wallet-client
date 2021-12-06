import s from './DashboardPage.module.css';
import Background from 'pages/Background';

const DashboardPage = () => {
  return (
    <Background classDashboardPage={s.dashboardPage}>
      <div className={s.transparentBackground}>
        <div className={s.border}></div>
      </div>
    </Background>
  );
};

export default DashboardPage;
