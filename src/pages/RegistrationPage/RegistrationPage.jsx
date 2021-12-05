import s from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={s.registrBox}>
      <h1 className={s.title}>Finance App</h1>
      <div className={s.subBox}></div>
      <RegistrationForm classPosition={s.registrationForm} />
    </div>
  );
};

export default RegistrationPage;
