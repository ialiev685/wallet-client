import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.registrBox}>
      <div className={s.registrSubBox}></div>
      <div className={s.registrationForm}></div>
      {/* сюда вставить компонент 'RegistrationForm' с классом 'registrationForm' */}
    </div>
  );
};

export default RegistrationPage;
