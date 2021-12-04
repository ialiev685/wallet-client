import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Finance App</h1>
      <div className={s.subBox}></div>
      <div className={s.ellipseOne}></div>
      <div className={s.ellipseTwo}></div>
      <div className={s.pictureTablet}></div>
      <div className={s.pictureDesktop}></div>

      {/* сюда вставить компонент 'RegistrationForm' с классом 'registrationForm' */}
    </div>
  );
};

export default RegistrationPage;
