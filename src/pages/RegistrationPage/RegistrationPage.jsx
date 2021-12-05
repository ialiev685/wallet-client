import s from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Finance App</h1>
      <div className={s.subBox}></div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
