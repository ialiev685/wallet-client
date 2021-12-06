import s from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm';
import Background from 'pages/Background';

const RegistrationPage = () => {
  return (
    <Background>
      <div className={s.registrBox}>
        <h1 className={s.title}>Finance App</h1>
        <div className={s.subBox}></div>
        <RegistrationForm classPosition={s.registrationForm} />
      </div>
    </Background>
  );
};

export default RegistrationPage;
